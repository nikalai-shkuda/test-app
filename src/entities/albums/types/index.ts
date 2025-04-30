export type Album = {
  userId: number;
  id: number;
  title: string;
};

export type AlbumCartProps = {
  album: Album;
};

export type AlbumPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type AlbumThumbnailProps = {
  title: string;
  url: string;
};
