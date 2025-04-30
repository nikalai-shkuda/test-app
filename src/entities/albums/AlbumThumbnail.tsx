import { AlbumThumbnailProps } from "./types";

export function AlbumThumbnail({ url, title }: AlbumThumbnailProps) {
  return (
    <figure>
      <img src={url} alt={title} loading="lazy" />
      {/* <figcaption>{title}</figcaption> */}
    </figure>
  );
}
