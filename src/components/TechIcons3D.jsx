import React, { Component, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, createPortal, useFrame, useThree } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/*
 * Glossy 3D category icons for the Tech section.
 * ONE canvas overlays the whole card grid and each icon is rendered into its card's "slot"
 * with viewport + scissor (no WebGL context per card). Slot positions come from layout offsets
 * relative to the canvas, so icons stay glued to their cards while the page scrolls, while the
 * section's 3D entrance transform plays, and inside the horizontal carousel on mobile.
 */

const ORANGE = "#FF5400";

// Phosphor "fill" SVG (256×256 viewBox) → bevelled extrusion, centred, ~1 unit wide
const svgLoader = new SVGLoader();
const buildIconGeometry = (svg) => {
  const shapes = svgLoader.parse(svg).paths.flatMap((p) => SVGLoader.createShapes(p));
  const geometry = new THREE.ExtrudeGeometry(shapes, {
    depth: 26,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 6,
    bevelSize: 3.5,
    bevelSegments: 4,
  });
  geometry.rotateX(Math.PI); // SVG y points down; rotating (not mirroring) keeps face winding intact
  geometry.center();
  geometry.scale(1 / 256, 1 / 256, 1 / 256);
  return geometry;
};

// Position of `el` relative to `root`, from layout offsets (immune to CSS transforms), minus inner scrolling
const offsetWithin = (el, root) => {
  let left = 0;
  let top = 0;
  for (let node = el; node && node !== root; node = node.offsetParent) {
    left += node.offsetLeft;
    top += node.offsetTop;
  }
  for (let node = el.parentElement; node && node !== root; node = node.parentElement) {
    left -= node.scrollLeft;
    top -= node.scrollTop;
  }
  return { left, top };
};

/* ── One icon: orange glossy tile, light extruded glyph, orbit ring with a travelling bead ── */
const IconModel = ({ geometry, index, hoverRef, materials }) => {
  const group = useRef();
  const bead = useRef();

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;
    const hovered = hoverRef.current[index];
    const g = group.current;
    if (g) {
      const k = Math.min(1, delta * 4);
      const targetY = hovered ? 0.15 + Math.sin(t * 1.4) * 0.1 : -0.5 + Math.sin(t * 0.6 + index) * 0.18;
      g.rotation.y += (targetY - g.rotation.y) * k;
      g.rotation.x += ((hovered ? -0.05 : 0.18) - g.rotation.x) * k;
      g.scale.setScalar(g.scale.x + ((hovered ? 1.1 : 1) - g.scale.x) * k);
    }
    if (bead.current) {
      const a = t * 0.9 + index * 0.8;
      bead.current.position.set(Math.cos(a) * 0.95, Math.sin(a) * 0.3, Math.sin(a) * 0.42);
    }
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      <directionalLight position={[-4, -2, 2]} intensity={1.3} color="#ff9a5c" />
      <Float speed={2} rotationIntensity={0.25} floatIntensity={0.6}>
        <group ref={group}>
          <RoundedBox args={[1.45, 1.45, 0.42]} radius={0.3} smoothness={6} material={materials.tile} />
          <mesh geometry={geometry} material={materials.glyph} position={[0, 0, 0.27]} scale={0.98} />
        </group>
        <group rotation={[1.2, 0, 0.35]}>
          <mesh material={materials.ring}>
            <torusGeometry args={[0.98, 0.012, 8, 96]} />
          </mesh>
        </group>
        <mesh ref={bead} material={materials.bead}>
          <sphereGeometry args={[0.07, 16, 16]} />
        </mesh>
      </Float>
    </>
  );
};

/* Each icon lives in its own scene + camera, registered for the multi-viewport renderer */
const IconView = ({ index, svg, views, hoverRef, environment, materials }) => {
  const scene = useMemo(() => {
    const s = new THREE.Scene();
    s.environment = environment;
    return s;
  }, [environment]);
  const camera = useMemo(() => {
    const c = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
    c.position.set(0, 0, 4.9);
    return c;
  }, []);
  const geometry = useMemo(() => buildIconGeometry(svg), [svg]);

  useEffect(() => () => geometry.dispose(), [geometry]);
  useEffect(() => {
    const registry = views.current;
    registry[index] = { scene, camera };
    return () => {
      registry[index] = null;
    };
  }, [views, index, scene, camera]);

  return createPortal(
    <IconModel geometry={geometry} index={index} hoverRef={hoverRef} materials={materials} />,
    scene,
    { camera }
  );
};

/* Renders every registered view into its slot; priority 1 replaces R3F's default render */
const MultiViewRenderer = ({ views, slotsRef, rootRef, onReady }) => {
  const gl = useThree((s) => s.gl);
  const size = useThree((s) => s.size);
  const reported = useRef(false);

  useFrame(() => {
    const root = rootRef.current;
    const canvasBox = gl.domElement.parentElement;
    if (!root || !canvasBox) return;
    const origin = offsetWithin(canvasBox, root);

    gl.autoClear = false;
    gl.setScissorTest(false);
    gl.clear(true, true, true);
    gl.setScissorTest(true);

    views.current.forEach((view, i) => {
      const slot = slotsRef.current[i];
      if (!view || !slot) return;
      const pos = offsetWithin(slot, root);
      const left = pos.left - origin.left;
      const top = pos.top - origin.top;
      const w = slot.offsetWidth;
      const h = slot.offsetHeight;
      if (!w || !h || left + w < 0 || top + h < 0 || left > size.width || top > size.height) return;

      const bottom = size.height - top - h;
      gl.setViewport(left, bottom, w, h);
      gl.setScissor(left, bottom, w, h);
      if (view.camera.aspect !== w / h) {
        view.camera.aspect = w / h;
        view.camera.updateProjectionMatrix();
      }
      gl.render(view.scene, view.camera);
    });

    gl.setScissorTest(false);
    if (!reported.current) {
      reported.current = true;
      onReady?.();
    }
  }, 1);

  return null;
};

const Scene = ({ icons, slotsRef, rootRef, hoverRef, onReady }) => {
  const gl = useThree((s) => s.gl);
  const views = useRef([]);

  // Studio-style reflections without loading any HDR file
  const environment = useMemo(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const texture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    return texture;
  }, [gl]);

  const materials = useMemo(
    () => ({
      tile: new THREE.MeshPhysicalMaterial({ color: ORANGE, roughness: 0.28, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 0.9 }),
      glyph: new THREE.MeshPhysicalMaterial({ color: "#fff4ec", roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.1, envMapIntensity: 0.8 }),
      ring: new THREE.MeshBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0.35 }),
      bead: new THREE.MeshPhysicalMaterial({ color: "#ffd2b8", emissive: ORANGE, emissiveIntensity: 0.6, roughness: 0.3 }),
    }),
    []
  );

  useEffect(
    () => () => {
      environment.dispose();
      Object.values(materials).forEach((m) => m.dispose());
    },
    [environment, materials]
  );

  return (
    <>
      {icons.map((svg, i) => (
        <IconView key={i} index={i} svg={svg} views={views} hoverRef={hoverRef} environment={environment} materials={materials} />
      ))}
      <MultiViewRenderer views={views} slotsRef={slotsRef} rootRef={rootRef} onReady={onReady} />
    </>
  );
};

// WebGL unavailable → render nothing; the cards keep their flat fallback icons
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const TechIcons3D = ({ icons, slotsRef, rootRef, hoverRef, onReady, className = "" }) => {
  const boxRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "100px" });
    if (boxRef.current) observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={boxRef} className={`pointer-events-none ${className}`} aria-hidden="true">
      <SceneBoundary>
        <Canvas
          frameloop={inView ? "always" : "never"}
          // Measure layout size, not the transformed box (the section tilts in via Scroll3D)
          resize={{ scroll: false, offsetSize: true }}
          dpr={[1, 2]}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          style={{ pointerEvents: "none" }}
        >
          <Scene icons={icons} slotsRef={slotsRef} rootRef={rootRef} hoverRef={hoverRef} onReady={onReady} />
        </Canvas>
      </SceneBoundary>
    </div>
  );
};

export default TechIcons3D;
