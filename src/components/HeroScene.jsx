import React, { Component, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ── Floating embers: soft round points drifting upward ── */
const emberVertex = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSize;
  attribute float aScale;
  attribute float aSpeed;
  varying float vAlpha;

  void main() {
    vec3 p = position;
    p.y = mod(p.y + uTime * aSpeed + 6.0, 12.0) - 6.0;
    p.x += sin(uTime * 0.4 + p.y * 0.8 + aScale * 6.0) * 0.25;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aScale * uPixelRatio * (1.0 / -mv.z);

    // fade in at the bottom, out at the top
    vAlpha = smoothstep(-6.0, -3.5, p.y) * smoothstep(6.0, 3.0, p.y);
  }
`;

const emberFragment = /* glsl */ `
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(1.0, 0.94, 0.86, a * vAlpha * 0.75);
  }
`;

const Embers = ({ count }) => {
  const gl = useThree((s) => s.gl);

  const [geometry, material] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 7 - 1;
      scales[i] = 0.3 + Math.random();
      speeds[i] = 0.08 + Math.random() * 0.22;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    geo.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));

    const mat = new THREE.ShaderMaterial({
      vertexShader: emberVertex,
      fragmentShader: emberFragment,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: gl.getPixelRatio() },
        uSize: { value: 70 },
      },
      transparent: true,
      depthWrite: false,
    });
    return [geo, mat];
  }, [count, gl]);

  useEffect(() => () => { geometry.dispose(); material.dispose(); }, [geometry, material]);

  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return <points geometry={geometry} material={material} />;
};

/* ── Light ribbons: thin glowing curves sweeping along the side edges ── */
const SEGMENTS = 90;

const Ribbons = ({ count }) => {
  const viewport = useThree((s) => s.viewport);

  const lines = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(SEGMENTS * 3), 3));

        // RGBA vertex colours: alpha fades the line out towards both ends
        const colors = new Float32Array(SEGMENTS * 4);
        for (let s = 0; s < SEGMENTS; s++) {
          colors[s * 4] = 1;
          colors[s * 4 + 1] = 0.93;
          colors[s * 4 + 2] = 0.86;
          colors[s * 4 + 3] = Math.sin((s / (SEGMENTS - 1)) * Math.PI) * (0.4 + i * 0.08);
        }
        geo.setAttribute("color", new THREE.BufferAttribute(colors, 4));

        const mat = new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          depthWrite: false,
        });
        return new THREE.Line(geo, mat);
      }),
    [count]
  );

  useEffect(
    () => () => lines.forEach((l) => { l.geometry.dispose(); l.material.dispose(); }),
    [lines]
  );

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const halfW = viewport.width / 2;
    const halfH = viewport.height / 2;

    lines.forEach((line, i) => {
      const side = i % 2 === 0 ? -1 : 1;
      const arr = line.geometry.attributes.position.array;
      for (let s = 0; s < SEGMENTS; s++) {
        const u = s / (SEGMENTS - 1);
        const y = -halfH - 0.5 + u * (halfH * 2 + 1);
        const sway = Math.sin(u * 3.2 + t * 0.35 + i * 1.7) * 0.35 + Math.sin(u * 7 + t * 0.6 + i) * 0.08;
        const bow = Math.sin(u * Math.PI) * (0.6 + i * 0.15);
        arr[s * 3] = side * (halfW - 0.3 - i * 0.12 - bow + sway);
        arr[s * 3 + 1] = y;
        arr[s * 3 + 2] = -0.5 - i * 0.2;
      }
      line.geometry.attributes.position.needsUpdate = true;
    });
  });

  return lines.map((line, i) => <primitive key={i} object={line} />);
};

/* ── Gentle parallax driven by the window pointer (canvas itself ignores events) ── */
const Parallax = ({ children }) => {
  const group = useRef();
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    const k = Math.min(1, delta * 2.5);
    group.current.rotation.y += (target.current.x * 0.08 - group.current.rotation.y) * k;
    group.current.rotation.x += (target.current.y * 0.05 - group.current.rotation.x) * k;
  });

  return <group ref={group}>{children}</group>;
};

/* WebGL can be unavailable (old devices, disabled GPU) — fail silently, the hero still works */
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const HeroScene = () => {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(true);
  const [reducedMotion] = useState(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
  );
  const [isSmall] = useState(() => window.innerWidth < 768);

  // Stop rendering once the hero has been scrolled out of view
  useEffect(() => {
    const check = () => {
      const el = wrapRef.current;
      if (el) setInView(window.scrollY < el.offsetHeight);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const frameloop = reducedMotion ? "demand" : inView ? "always" : "never";

  return (
    <div ref={wrapRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <SceneBoundary>
        <Canvas
          frameloop={frameloop}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
          style={{ pointerEvents: "none" }}
        >
          <Parallax>
            <Embers count={isSmall ? 110 : 240} />
            <Ribbons count={isSmall ? 2 : 4} />
          </Parallax>
        </Canvas>
      </SceneBoundary>
    </div>
  );
};

export default HeroScene;
