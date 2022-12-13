import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  onClose?: (div?: HTMLDivElement | null) => void;
};

export function RenderInWindow({ children, onClose }: Props) {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const newWindow = useRef(window);

  function handleClose() {
    if (onClose) {
      onClose(container);
    }
  }

  useEffect(() => {
    const div = document.createElement('div');
    setContainer(div);
    
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open('', '', 'width=600,height=400,left=200,top=200') as Window &
        typeof globalThis;
      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;
      if (onClose) curWindow.addEventListener('unload',handleClose);

      return () =>  curWindow.close();

    }
  }, [container]);

  return container && createPortal(children, container);
}
