import { useState, useRef } from 'react';
import useTriggerOnScroll from '../../../hooks/useTriggerOnScroll';
import FadeIn from '../FadeIn';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function ScrollFadeIn(props: Props) {
  const { className = '', children } = props;
  const ref = useRef();
  const [show, setShow] = useState<boolean>(false);
  useTriggerOnScroll(ref, (triggered) => {
    setShow(triggered);
  });
  return (
    <div className={className} ref={ref}>
      <FadeIn show={show}>{children}</FadeIn>
    </div>
  );
}
