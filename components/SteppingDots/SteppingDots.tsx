import BigDot from './BigDot';
import MediumDot from './MediumDot';
import SmallDot from './SmallDot';

export default function SteppingDots() {
  return (
    <div
      className="full-screen"
      style={{
        background: 'linear-gradient(7deg, #ffffff 49%, #F9A8D4 0)',
      }}
    >
      <div className="flex justify-center">
        <div>
          <BigDot />
          <SmallDot />
          <SmallDot />
          <MediumDot />
          <SmallDot />
          <SmallDot />
          <BigDot />
        </div>
      </div>
    </div>
  );
}
