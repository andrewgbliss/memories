import Cover from '../components/Cover';
import SteppingDots from '../components/SteppingDots';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Cover
        title="Andy and Saori's Memories"
        photos={[
          {
            src: '/img/photos-1/04-park-city.jpg',
            caption: 'Andy',
            objectPosition: '100% 50%',
          },
          {
            src: '/img/photos-1/01-park-city.jpg',
            caption: 'Saori',
            objectPosition: '100% 25%',
          },
          {
            src: '/img/photos-1/05-parkcity.jpg',
            caption: 'Walking Around',
            objectPosition: '100% 0%',
          },
          {
            src: '/img/photos-1/02-park-city.jpg',
            caption: 'Dog',
            objectPosition: '100% 40%',
          },
        ]}
      />
      <SteppingDots />
      <Cover
        dir="right"
        title="Forrest Gump Road"
        photos={[
          {
            src: '/img/photos-1/01-Forrest.jpg',
            caption: 'Andy',
            objectPosition: '100% 40%',
          },
          {
            src: '/img/photos-1/02-Forrest.jpg',
            caption: 'Saori',
            objectPosition: '100% 70%',
          },
          {
            src: '/img/photos-1/03-Forrest.jpg',
            caption: 'Arch',
            objectPosition: '100% 50%',
          },
          {
            src: '/img/photos-1/04-Forrest.jpg',
            caption: '2 7 11',
            objectPosition: '100% 50%',
          },
        ]}
      />
      <SteppingDots />
      <Cover
        dir="left"
        title="Grand Canyon"
        photos={[
          {
            src: '/img/photos-1/03-Grand.jpg',
            caption: 'A + S',
            objectPosition: '100% 40%',
          },
          {
            src: '/img/photos-1/05-Grand.jpg',
            caption: 'S + A',
            objectPosition: '100% 50%',
          },
          {
            src: '/img/photos-1/01-Grand.jpg',
            caption: 'Grand Canyon',
            objectPosition: '100% 20%',
          },
          {
            src: '/img/photos-1/02-Grand.jpg',
            caption: 'Castle',
            objectPosition: '100% 20%',
          },
        ]}
      />
      <SteppingDots />
      <Cover
        dir="right"
        title="Las Vegas"
        photos={[
          {
            src: '/img/photos-1/01-LasVegas.jpg',
            caption: 'Andy',
            objectPosition: '100% 70%',
          },
          {
            src: '/img/photos-1/02-LasVegas.jpg',
            caption: 'Saori',
            objectPosition: '100% 60%',
          },
          {
            src: '/img/photos-1/03-LasVegas.jpg',
            caption: '7 magic mountains',
            objectPosition: '100% 60%',
          },
          {
            src: '/img/photos-1/04-LasVegas.jpg',
            caption: 'Gordon Ramsey Burgr',
            objectPosition: '100% 40%',
          },
        ]}
      />
      <SteppingDots />
      <Cover
        dir="left"
        title="California"
        photos={[
          {
            src: '/img/photos-1/02-Cali.jpg',
            caption: 'Cheesecake Factory',
            objectPosition: '100% 40%',
          },
          {
            src: '/img/photos-1/03-Cali.jpg',
            caption: 'Strawberries',
            objectPosition: '100% 30%',
          },
          {
            src: '/img/photos-1/04-Cali.jpg',
            caption: 'Hat Store',
            objectPosition: '100% 40%',
          },
          {
            src: '/img/photos-1/01-Cali.jpg',
            caption: 'Whats Up Men - Ramen',
            objectPosition: '100% 50%',
          },
        ]}
      />
      <SteppingDots />
      <Cover
        dir="right"
        title="Disneyland"
        photos={[
          {
            src: '/img/photos-1/02-Dis.jpg',
            caption: 'Saori',
            objectPosition: '100% 60%',
          },
          {
            src: '/img/photos-1/03-Dis.jpg',
            caption: 'Andy',
            objectPosition: '100% 0%',
          },
          {
            src: '/img/photos-1/04-Dis.jpg',
            caption: 'Mickey Pumpkin',
            objectPosition: '100% 40%',
          },
          {
            src: '/img/photos-1/01-Dis.jpg',
            caption: 'Andy 2',
            objectPosition: '100% 30%',
          },
        ]}
      />
      <SteppingDots />
      <Cover
        dir="left"
        title="Places"
        photos={[
          {
            src: '/img/photos-1/01-Cal-2.jpg',
            caption: 'Concert',
            objectPosition: '100% 60%',
          },
          {
            src: '/img/photos-1/02-Cal-2.jpg',
            caption: 'Sushi',
            objectPosition: '100% 40%',
          },
          {
            src: '/img/photos-1/06-LasVegas.jpg',
            caption: 'Chocolate',
            objectPosition: '100% 30%',
          },
          {
            src: '/img/photos-1/07-LasVegas.jpg',
            caption: 'Jackpot',
            objectPosition: '100% 20%',
          },
        ]}
      />
      <SteppingDots />
      <Cover
        dir="left"
        title="Memories"
        photos={[
          {
            src: '/img/photos-1/01-SaltLake.jpg',
            caption: 'Salt Lake City',
            objectPosition: '100% 60%',
          },
          {
            src: '/img/photos-1/02-SaltLake.jpg',
            caption: 'Airport',
            objectPosition: '100% 35%',
          },
          {
            src: '/img/photos-1/09-LasVegas.jpg',
            caption: 'Spider Man',
            objectPosition: '100% 30%',
          },
          {
            src: '/img/photos-1/03-park-city.jpg',
            caption: 'Flowers',
            objectPosition: '100% 20%',
          },
        ]}
      />
      <Footer />
    </>
  );
}
