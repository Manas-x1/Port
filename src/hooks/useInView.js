import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element is near the viewport.
 * Returns [ref, inView, hasBeenInView] — `hasBeenInView` latches true so heavy
 * content (videos, WebGL) can mount lazily and then simply pause off-screen.
 */
export default function useInView({ rootMargin = '200px 0px', initial = false } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(initial);
  const [hasBeenInView, setHasBeenInView] = useState(initial);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      setHasBeenInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setHasBeenInView(true);
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return [ref, inView, hasBeenInView];
}
