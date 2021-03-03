import { useState, useRef } from 'react';
import useTriggerOnScroll from '../../../hooks/useTriggerOnScroll';
import Slide from '../SlideDown';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function ScrollSlideUp(props: Props) {
  const { className = '', children } = props;
  const el = useRef();
  const [show, setShow] = useState<boolean>(false);
  useTriggerOnScroll(el, (triggered) => {
    setShow(triggered);
  });
  return (
    <div className={className} ref={el}>
      <Slide show={show}>{children}</Slide>
    </div>
  );
}
