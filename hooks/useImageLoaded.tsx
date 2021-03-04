import { useEffect, useState } from 'react';

export default function useTriggerOnScroll(images = document.images) {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    let len = images.length;
    let counter = 0;

    function incrementCounter() {
      counter++;
      if (counter === len) {
        setLoaded(true);
      }
    }

    [].forEach.call(images, function (img) {
      if (img.complete) incrementCounter();
      else img.addEventListener('load', incrementCounter, false);
    });
  }, []);

  return loaded;
}
