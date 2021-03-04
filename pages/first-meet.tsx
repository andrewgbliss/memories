import PhotoAlbum from '../components/PhotoAlbum';
import photos from '../lib/photos/first-meet.json';

export default function FirstMeet() {
  if (!process.browser) {
    return <></>;
  }
  return <PhotoAlbum photos={photos} />;
}
