import React, { useEffect, useRef } from "react";
import { pageTop } from "../utils/scroll";

/*
 * Scroll-linked 3D entrance for a whole section: it rises in, tilted back in perspective,
 * and flattens as it reaches the viewport.
 * Measurements use offsetTop (unaffected by transforms), so the effect never feeds back into itself.
 * Once a section is fully in place the transform is cleared, keeping text crisp and sticky children intact.
 */

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const reducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

const Scroll3D = ({ children, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;

    let raf = 0;
    let settled = null;

    // Transform only — no opacity, or the pinned hero behind would show through the section
    const apply = (transform) => {
      el.style.transform = transform;
      el.style.willChange = transform ? "transform" : "";
    };

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const top = pageTop(el) - window.scrollY;

      // 0 when the section's top touches the bottom of the screen, 1 once it has climbed 70% of the viewport
      const p = clamp01((vh - top) / (vh * 0.7));
      if (p === 1) {
        if (settled !== true) apply("");
        settled = true;
        return;
      }
      settled = false;
      const e = easeOut(p);
      const inv = 1 - e;
      apply(
        `perspective(1400px) translate3d(0, ${(inv * 120).toFixed(1)}px, 0) rotateX(${(inv * 14).toFixed(2)}deg) scale(${(0.92 + e * 0.08).toFixed(4)})`
      );
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    el.style.transformOrigin = "50% 0%";
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      apply("");
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Scroll3D;
