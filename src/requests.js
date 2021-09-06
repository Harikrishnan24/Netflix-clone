const API_KEY = "9d864116004bf5e27a81c98cdb338903";


const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchDiscovers: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_networks=213&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`,
    fetchMovieDetails: `/movie/{movie_id}?api_key=<<api_key>>&language=en-US`,
    fetchApiKey: `9d864116004bf5e27a81c98cdb338903`
}

export default requests;