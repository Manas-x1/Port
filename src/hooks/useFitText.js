import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Sizes a line of text so it spans exactly the width of its container.
 * Width scales linearly with font-size, so one measurement is enough.
 * Re-runs on resize and once the display font has loaded.
 * With `fitHeight`, also caps the size to the box height (box must get its height from layout).
 */
export default function useFitText({ fitHeight = false } = {}) {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const text = textRef.current;
    if (!box || !text) return;

    const fit = () => {
      const current = parseFloat(getComputedStyle(text).fontSize);
      const natural = text.getBoundingClientRect().width;
      if (!natural || !current || !box.clientWidth) return; // hidden at this breakpoint
      let size = (box.clientWidth / natural) * current;
      if (fitHeight && box.clientHeight) {
        const naturalH = text.getBoundingClientRect().height;
        if (naturalH) size = Math.min(size, (box.clientHeight / naturalH) * current);
      }
      setFontSize((prev) => (prev && Math.abs(prev - size) < 0.5 ? prev : Math.floor(size * 100) / 100));
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    window.addEventListener('resize', fit);
    document.fonts?.ready.then(fit);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, [fitHeight]);

  return { boxRef, textRef, fontSize };
}
