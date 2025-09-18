const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "17ec58d8151a6632ee28c52486ab4581",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
