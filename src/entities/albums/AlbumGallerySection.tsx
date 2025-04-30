import { BASE_URL } from "../../shared/constants";
import { useFetch } from "../../shared/hooks/useFetch";
import { AlbumCart } from "./AlbumCart";
import { Album } from "./types";

const AlBUMS_LIMIT = 10;
const AlBUMS_URL = `${BASE_URL}/albums?_limit=${AlBUMS_LIMIT}`;

export default function AlbumGallerySection() {
  const { data: albums, isLoading, isError } = useFetch<Album>(AlBUMS_URL);

  return (
    <div>
      <h2>Albums</h2>
      {isLoading && !isError && <div>Loading...</div>}
      {!isLoading && isError && <div>Error, try again</div>}
      {!isLoading && !isError && (
        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              <AlbumCart album={album} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
