import React from 'react';
import Cover from '../Cover';
import SteppingDots from '../SteppingDots';
import Footer from '../Footer';
import useImageLoaded from '../../hooks/useImageLoaded';
import Backdrop from '../Backdrop';
import CircularProgress from '../Progress/Circular';

interface Props {
  photos: any;
}

export default function PhotoAlbum(props: Props) {
  const { photos } = props;
  const loaded = useImageLoaded();
  return (
    <>
      <Backdrop open={!loaded}>
        <div>
          <div className="flex justify-center">
            <CircularProgress />
          </div>
          <div className="flex justify-center">Loading</div>
        </div>
      </Backdrop>
      {photos.map((row, i) => {
        const dir = i % 2 === 0 ? 'left' : 'right';
        return (
          <React.Fragment key={i}>
            <Cover dir={dir} title={row.title} photos={row.photos} />
            <SteppingDots dir={dir} />
          </React.Fragment>
        );
      })}
      <Footer />
    </>
  );
}
