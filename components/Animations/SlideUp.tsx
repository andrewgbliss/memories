import { Transition } from '@headlessui/react';

interface Props {
  show?: boolean;
  children: React.ReactNode;
}

export default function SlideUp(props: Props) {
  const { show, children } = props;
  return (
    <Transition
      show={show}
      enter="transform transition ease-out duration-500"
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transform transition ease-out duration-500"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-full"
    >
      {children}
    </Transition>
  );
}
