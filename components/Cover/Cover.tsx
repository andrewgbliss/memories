import Photo from '../Photo';

interface Photo {
  src: string;
  caption: string;
  objectPosition: string;
}

interface Props {
  dir?: string;
  title: string;
  photos: Array<Photo>;
}

export default function Cover(props: Props) {
  const { dir = 'left', title = '', photos = [] } = props;
  return (
    <div
      className="full-screen"
      style={{
        background: `linear-gradient(${
          dir === 'right' ? '190deg' : '164deg'
        }, #ffffff 49%, #F9A8D4 0)`,
      }}
    >
      <div className="min-h-screen flex justify-center sm:items-center">
        <div
          className={`flex flex-wrap justify-center ${
            dir === 'right' ? 'flex-row-reverse' : ''
          }`}
        >
          <div className="p-5 pt-10 sm:pt-20 sm:w-1/3">
            <h2 className="text-5xl label">{title}</h2>
            <div className="pt-10 sm:pt-20 px-10 flex justify-between">
              <div className="heart hover-expand" />
              <div className="heart hover-expand" />
              <div className="heart hover-expand" />
            </div>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 gap-3">
              <Photo
                src={photos[0].src}
                className="transform -rotate-6"
                expandedClassName="hover:translate-x-1/2 sm:hover:translate-x-0"
                objectPosition={photos[0].objectPosition}
                caption={photos[0].caption}
              />
              <Photo
                src={photos[1].src}
                className="transform rotate-6 sm:-translate-x-6"
                expandedClassName="hover:-translate-x-1/2 sm:hover:-translate-x-0"
                objectPosition={photos[1].objectPosition}
                caption={photos[1].caption}
              />
              <Photo
                src={photos[2].src}
                className="transform -rotate-6 translate-y-4"
                expandedClassName="hover:translate-x-1/2 sm:hover:translate-x-0"
                objectPosition={photos[2].objectPosition}
                caption={photos[2].caption}
              />
              <Photo
                src={photos[3].src}
                className=" transform rotate-6 translate-y-4 sm:-translate-x-6"
                expandedClassName="hover:-translate-x-1/2 sm:hover:-translate-x-0"
                objectPosition={photos[3].objectPosition}
                caption={photos[3].caption}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
