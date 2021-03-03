import { useState } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  className?: string;
  expandedClassName?: string;
  objectPosition?: string;
  caption?: string;
}

export default function Photo(props: Props) {
  const {
    src,
    className = '',
    expandedClassName = '',
    objectPosition = '100% 0%',
    caption = '',
  } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div
      className={`p-3 bg-white border rounded-xl shadow-2xl hover-expand cursor-pointer ${className} ${
        expanded ? `expanded-photo ${expandedClassName}` : ''
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Image
        src={src}
        width="300"
        height="200"
        objectFit="cover"
        objectPosition={objectPosition}
        className="rounded-xl"
      />
      <div className="text-center">{caption}</div>
    </div>
  );
}
