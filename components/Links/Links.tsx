import Link from 'next/link';

export default function Links() {
  return (
    <div className="flex flex-col gap-5">
      <div className="btn">
        <Link href="/first-meet">First Meet</Link>
      </div>
      <div className="btn">
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
