// Document-relative top of an element, ignoring CSS transforms
// (sections are wrapped in Scroll3D, so getBoundingClientRect / a lone offsetTop can be off).
export const pageTop = (el) => {
  let top = 0;
  for (let node = el; node; node = node.offsetParent) top += node.offsetTop;
  return top;
};

// The app-wide Lenis instance (set in App.jsx); null when smooth scrolling is unavailable
let lenis = null;
export const setLenis = (instance) => {
  lenis = instance;
};

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Animated scroll to a page position — eased glide via Lenis, native smooth scroll as fallback
export const scrollToY = (y) => {
  const top = Math.max(0, y);
  if (lenis) lenis.scrollTo(top, { duration: 1.4, easing: easeInOutCubic });
  else window.scrollTo({ top, behavior: "smooth" });
};

export const scrollToSection = (id, offset = 80) => {
  const el = document.getElementById(id);
  if (el) scrollToY(id === "home" ? 0 : pageTop(el) - offset);
};
