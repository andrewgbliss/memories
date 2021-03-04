import React from 'react';
import Cover from '../components/Cover';
import SteppingDots from '../components/SteppingDots';
import Footer from '../components/Footer';
import photos from '../lib/photos/first-meet.json';

export default function Home() {
  return (
    <>
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
