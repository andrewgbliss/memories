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
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/04-park-city.jpg',
            caption: 'Andy',
            objectPosition: '100% 50%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-park-city.jpg',
            caption: 'Saori',
            objectPosition: '100% 25%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/05-parkcity.jpg',
            caption: 'Walking Around',
            objectPosition: '100% 0%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-park-city.jpg',
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
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-Forrest.jpg',
            caption: 'Andy',
            objectPosition: '100% 40%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-Forrest.jpg',
            caption: 'Saori',
            objectPosition: '100% 70%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/03-Forrest.jpg',
            caption: 'Arch',
            objectPosition: '100% 50%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/04-Forrest.jpg',
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
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/03-Grand.jpg',
            caption: 'A + S',
            objectPosition: '100% 40%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/05-Grand.jpg',
            caption: 'S + A',
            objectPosition: '100% 50%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-Grand.jpg',
            caption: 'Grand Canyon',
            objectPosition: '100% 20%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-Grand.jpg',
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
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-LasVegas.jpg',
            caption: 'Andy',
            objectPosition: '100% 70%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-LasVegas.jpg',
            caption: 'Saori',
            objectPosition: '100% 60%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/03-LasVegas.jpg',
            caption: '7 magic mountains',
            objectPosition: '100% 60%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/04-LasVegas.jpg',
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
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-Cali.jpg',
            caption: 'Cheesecake Factory',
            objectPosition: '100% 40%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/03-Cali.jpg',
            caption: 'Strawberries',
            objectPosition: '100% 30%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/04-Cali.jpg',
            caption: 'Hat Store',
            objectPosition: '100% 40%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-Cali.jpg',
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
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-Dis.jpg',
            caption: 'Saori',
            objectPosition: '100% 60%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/03-Dis.jpg',
            caption: 'Andy',
            objectPosition: '100% 0%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/04-Dis.jpg',
            caption: 'Mickey Pumpkin',
            objectPosition: '100% 40%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-Dis.jpg',
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
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-Cal-2.jpg',
            caption: 'Concert',
            objectPosition: '100% 60%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-Cal-2.jpg',
            caption: 'Sushi',
            objectPosition: '100% 40%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/06-LasVegas.jpg',
            caption: 'Chocolate',
            objectPosition: '100% 30%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/07-LasVegas.jpg',
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
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/01-SaltLake.jpg',
            caption: 'Salt Lake City',
            objectPosition: '100% 60%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/02-SaltLake.jpg',
            caption: 'Airport',
            objectPosition: '100% 35%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/09-LasVegas.jpg',
            caption: 'Spider Man',
            objectPosition: '100% 30%',
          },
          {
            src:
              'https://storage.googleapis.com/nthchild-memories/andrewgbliss/03-park-city.jpg',
            caption: 'Flowers',
            objectPosition: '100% 20%',
          },
        ]}
      />
      <Footer />
    </>
  );
}
