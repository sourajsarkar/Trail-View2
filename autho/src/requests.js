const apiKey = "d45af7793f2c9504a857220c1cd482d1";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchNetflixOriginals: `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
};

export default requests;
