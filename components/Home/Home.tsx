import Links from '../Links';

export default function Home() {
  return (
    <>
      <div className="full-screen flex justify-center items-center flex-col">
        <h2 className="text-5xl label">Happy Memories!</h2>
        <div className="pt-10">
          <Links />
        </div>
      </div>
    </>
  );
}
