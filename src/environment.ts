interface Environment {
  previewBaseImagesPath: string;
  apiUrl: string;
  apiKey: string;
}

const environment: Environment = {
  previewBaseImagesPath: 'https://image.tmdb.org/t/p/',
  apiUrl: process.env.REACT_APP_API_URL as string,
  apiKey: process.env.REACT_APP_API_KEY as string,
};

export default environment;
