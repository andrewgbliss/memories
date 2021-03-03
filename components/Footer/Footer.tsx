export default function Home() {
  return (
    <div
      className="full-screen flex justify-center items-center"
      style={{
        background: `linear-gradient(-8deg, #ffffff 75%, #F9A8D4 0)`,
      }}
    >
      <div className="p-5 pt-10 sm:pt-20 sm:w-1/3">
        <h2 className="text-5xl label">Happy Memories!</h2>
        <div className="pt-10 sm:pt-20 px-10 flex justify-between">
          <div className="heart hover-expand" />
          <div className="heart hover-expand" />
          <div className="heart hover-expand" />
        </div>
      </div>
    </div>
  );
}
