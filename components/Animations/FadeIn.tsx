import { Transition } from '@headlessui/react';

interface Props {
  show?: boolean;
  children: React.ReactNode;
}

export default function FadeIn(props: Props) {
  const { show, children } = props;
  return (
    <Transition
      show={show}
      enter="transform transition ease-in-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transform transition ease-in-out duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
}
