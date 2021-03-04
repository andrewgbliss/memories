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
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/04-park-city-min.jpg',
            caption: 'Andy',
            objectPosition: '100% 50%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-park-city-min.jpg',
            caption: 'Saori',
            objectPosition: '100% 25%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/05-parkcity-min.jpg',
            caption: 'Walking Around',
            objectPosition: '100% 0%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-park-city-min.jpg',
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
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-Forrest-min.jpg',
            caption: 'Andy',
            objectPosition: '100% 40%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-Forrest-min.jpg',
            caption: 'Saori',
            objectPosition: '100% 70%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/03-Forrest-min.jpg',
            caption: 'Arch',
            objectPosition: '100% 50%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/04-Forrest-min.jpg',
            caption: '2 7 11',
            objectPosition: '100% 50%',
          },
        ]}
      />
      <SteppingDots dir="right" />
      <Cover
        dir="left"
        title="Grand Canyon"
        photos={[
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/03-Grand-min.jpg',
            caption: 'A + S',
            objectPosition: '100% 40%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/05-Grand-min.jpg',
            caption: 'S + A',
            objectPosition: '100% 50%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-Grand-min.jpg',
            caption: 'Grand Canyon',
            objectPosition: '100% 20%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-Grand-min.jpg',
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
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-LasVegas-min.jpg',
            caption: 'Andy',
            objectPosition: '100% 70%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-LasVegas-min.jpg',
            caption: 'Saori',
            objectPosition: '100% 60%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/03-LasVegas-min.jpg',
            caption: '7 magic mountains',
            objectPosition: '100% 60%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/04-LasVegas-min.jpg',
            caption: 'Gordon Ramsey Burgr',
            objectPosition: '100% 40%',
          },
        ]}
      />
      <SteppingDots dir="right" />
      <Cover
        dir="left"
        title="California"
        photos={[
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-Cali-min.jpg',
            caption: 'Cheesecake Factory',
            objectPosition: '100% 40%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/03-Cali-min.jpg',
            caption: 'Strawberries',
            objectPosition: '100% 30%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/04-Cali-min.jpg',
            caption: 'Hat Store',
            objectPosition: '100% 40%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-Cali-min.jpg',
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
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-Dis-min.jpg',
            caption: 'Saori',
            objectPosition: '100% 60%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/03-Dis-min.jpg',
            caption: 'Andy',
            objectPosition: '100% 0%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/04-Dis-min.jpg',
            caption: 'Mickey Pumpkin',
            objectPosition: '100% 40%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-Dis-min.jpg',
            caption: 'Andy 2',
            objectPosition: '100% 30%',
          },
        ]}
      />
      <SteppingDots dir="right" />
      <Cover
        dir="left"
        title="Places"
        photos={[
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-Cal-2-min.jpg',
            caption: 'Concert',
            objectPosition: '100% 60%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-Cal-2-min.jpg',
            caption: 'Sushi',
            objectPosition: '100% 40%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/06-LasVegas-min.jpg',
            caption: 'Chocolate',
            objectPosition: '100% 30%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/07-LasVegas-min.jpg',
            caption: 'Jackpot',
            objectPosition: '100% 20%',
          },
        ]}
      />
      <SteppingDots />
      <Cover
        dir="right"
        title="Memories"
        photos={[
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-SaltLake-min.jpg',
            caption: 'Salt Lake City',
            objectPosition: '100% 60%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-SaltLake-min.jpg',
            caption: 'Airport',
            objectPosition: '100% 35%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/09-LasVegas-min.jpg',
            caption: 'Spider Man',
            objectPosition: '100% 30%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/03-park-city-min.jpg',
            caption: 'Flowers',
            objectPosition: '100% 20%',
          },
        ]}
      />
      <SteppingDots dir="right" />
      <Footer />
    </>
  );
}
