import { useEffect, useRef, useState } from 'react';
import { isOverflowing } from '../../../../utils/functions/isOverflowing';

export default function useTextEllipsis(text: string) {
  const [overflowing, setOverflowing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function verifyOverflowing() {
    if (!ref.current) return;
    const elementTarget = ref.current as HTMLDivElement;
    const elementIsOverflowing = isOverflowing(elementTarget);
    if (elementIsOverflowing) {
      setOverflowing(true);
    } else {
      setOverflowing(false);
    }
  }

  useEffect(() => {
    if (!ref.current) return;
    ref.current.addEventListener('resize', () => verifyOverflowing());
  }, []);

  useEffect(() => {
    verifyOverflowing();
  }, [text]);

  return { ref, overflowing };
}
