import environment from '../environment';

export const getPreviewMovieImagePath = (path: string) =>
  getMovieImagePath(path, 'w185');

export const getPosterMovieImagePath = (path: string) =>
  getMovieImagePath(path, 'w300');

export const getMovieImagePath = (path: string, size: string) =>
  `${environment.previewBaseImagesPath}${size}/${path}`;
