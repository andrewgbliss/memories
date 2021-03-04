import Links from '../Links';

export default function Footer() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="p-5 pt-10 sm:pt-20 sm:w-1/3">
          <h2 className="text-5xl label">Happy Memories!</h2>
          <div className="pt-10 sm:pt-10 px-10 flex justify-between">
            <div className="heart hover-expand" />
            <div className="heart hover-expand" />
            <div className="heart hover-expand" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="pt-10">
          <Links />
        </div>
      </div>
      <div className="h-32" />
    </>
  );
}
