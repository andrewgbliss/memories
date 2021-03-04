import BigDot from './BigDot';
import MediumDot from './MediumDot';
import SmallDot from './SmallDot';

interface Props {
  dir?: string;
}

export default function SteppingDots(props: Props) {
  const { dir = 'left' } = props;
  return (
    <div
      className="full-screen"
      style={{
        background: `linear-gradient(${
          dir === 'right' ? '7deg' : '-18deg'
        }, #ffffff 49%, #F9A8D4 0)`,
      }}
    >
      <div className="flex justify-center">
        <div>
          <BigDot />
          <div
            className={`transform ${dir === 'left' ? '-' : ''}translate-x-14`}
          >
            <SmallDot />
          </div>
          <div
            className={`transform ${dir === 'left' ? '-' : ''}translate-x-24`}
          >
            <SmallDot />
          </div>
          <div
            className={`transform ${dir === 'left' ? '-' : ''}translate-x-28`}
          >
            <MediumDot />
          </div>
          <div
            className={`transform ${dir === 'left' ? '-' : ''}translate-x-24`}
          >
            <SmallDot />
          </div>
          <div
            className={`transform ${dir === 'left' ? '-' : ''}translate-x-14`}
          >
            <SmallDot />
          </div>
          <BigDot />
        </div>
      </div>
    </div>
  );
}
