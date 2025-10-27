// Week 1 JS recap 2 - task 6

const output = document.getElementById("movies");
const movies = [];

const createMovieElements = (movies, sorting = true) => {
  if (movies.length < 1) return;
  if (sorting) movies.sort((a, b) => b.rating - a.rating);

  console.log(movies);

  movies.forEach((movie) => {
    const root = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = movie.title;
    root.appendChild(title);

    const rating = document.createElement("p");
    rating.textContent = movie.rating;
    root.appendChild(rating);

    output.appendChild(root);
  });
}

while (true) {
  const movieName = prompt("Enter a movie name (enter \"done\" to stop):");

  if (movieName === "done") break;

  const movieRating = Number(prompt(`Enter a rating for ${movieName} (1 - 5):`));

  movies.push({
    title: movieName,
    rating: movieRating
  });
}

createMovieElements(movies);



