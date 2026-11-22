// Shared navigation for plain routes and home-page anchors ('/#skills').
// Anchors on another page: route home first, then scroll once the route transition has cleared.
function scrollToHash(hash) {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -8 });
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function goTo(navigate, path) {
  if (path.startsWith('/#')) {
    const hash = path.slice(1);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToHash(hash), 1100); // after the 1s page veil
    } else {
      scrollToHash(hash);
    }
    return;
  }
  if (path === '/' && window.location.pathname === '/') {
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  navigate(path);
}
