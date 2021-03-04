import PhotoAlbum from '../components/PhotoAlbum';
import photos from '../lib/photos/first-meet.json';

export default function FirstMeet() {
  return <PhotoAlbum photos={photos} />;
}
