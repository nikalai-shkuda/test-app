import { AlbumCartProps } from "./types";

export function AlbumCart({ album }: AlbumCartProps) {
  return (
    <div>
      <h2>{album.title}</h2>
    </div>
  );
}
