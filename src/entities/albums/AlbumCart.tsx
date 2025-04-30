import { BASE_URL } from "../../shared/constants";
import { useFetch } from "../../shared/hooks/useFetch";
import { AlbumThumbnail } from "./AlbumThumbnail";
import { AlbumCartProps, AlbumPhoto } from "./types";
import styles from "./AlbumCart.module.css";

const PHOTOS_LIMIT = 3;
const IMAGE_URL = "https://placehold.co/150x150/92c952/fff";

export function AlbumCart({ album }: AlbumCartProps) {
  const PHOTOS_URL = `${BASE_URL}/photos?albumId=${album.id}&_limit=${PHOTOS_LIMIT}`;
  const { data: photos, isLoading, isError } = useFetch<AlbumPhoto>(PHOTOS_URL);

  return (
    <div>
      <h2>{album.title}</h2>

      {isLoading && !isError && <div>Loading...</div>}
      {!isLoading && isError && <div>Error, try again</div>}
      {!isLoading && !isError && (
        <ul className={styles.list}>
          {photos.map((photo) => (
            <li key={photo.id}>
              <AlbumThumbnail
                url={`${IMAGE_URL}?text=${`AlbumId - ${album.id}, photoId - ${photo.id}`}`}
                title={photo.title}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
