
  export function fetchFilm(filmName) {
    return fetch(`https://api.themoviedb.org/3/movie/550?api_key=1db949d546d8184041e5d93169d90d9f&media_type={media_type}&time_window={time_window}&&language=en-US&page=1&include_adult=false&movie={movie_id}&movie={movie_id}/videos`)
     .then(response => {
    // Response handling
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });
  }