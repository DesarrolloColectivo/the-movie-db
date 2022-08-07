async function getTrendingMoviesPreview() {
  try {
    const rest = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=" + API_KEY
    );
    const data = await rest.json();
    const movies = data.results;
    console.log("hola movie,", movies);

    movies.forEach((movie) => {
      const trendingPreviewMoviesContainer = document.querySelector(
        "#trendingPreview .trendingPreview-movieList"
      );
      const movieContainer = document.createElement("div");
      movieContainer.classList.add("movie-container");

      const movieImg = document.createElement("img");
      movieImg.classList.add("movie-img");
      movieImg.setAttribute("alt", movie.title);
      movieImg.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w300" + movie.poster_path
      );
      movieContainer.appendChild(movieImg);
      trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
  } catch (error) {console.log("error,", error);}
}
getTrendingMoviesPreview();
