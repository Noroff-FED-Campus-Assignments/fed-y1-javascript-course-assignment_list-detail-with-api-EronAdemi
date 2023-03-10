
let movie_div = document.getElementById("movies");

 const searchMovies = async (movie_name) => {
   try {
     let res = await fetch(
       `https://www.omdbapi.com/?s=${movie_name}&apikey=d56bc60a`
     );
     let data = await res.json();
     return data;
   } catch (error) {
     alert("an error happened while data fetching");
   }
 };
 
 const appendMovies = (movies) => {
   if (movies === undefined) {
     return false;
   }
 
   movies.forEach((movie) => {
     let cardContainer = document.createElement("div");
     movie_div.append(cardContainer);
 
     let poster = document.createElement("img");
     poster.src = movie.Poster;
     cardContainer.append(poster);
 
     let title = document.createElement("p");
     title.innerText = `Title: ${movie.Title}`;
     cardContainer.append(title);
 
     let year = document.createElement("p");
     year.innerText = `Year: ${movie.Year}`;
     cardContainer.append(year);
 
     poster.onclick = function () {
       handleClick(movie);
     };
   });
 };
 
 const handleClick = async (movie) => {
   console.log(movie.imdbID);
   const params = { id: `${movie.imdbID}` };
 
   const url = "/details.html?";
   const searchParams = new URLSearchParams(params);
   console.log(searchParams);
   const queryString = searchParams.toString();
 
   console.log(queryString);
 
   window.location.href = url + queryString;
 };
 
 const handleSearch = async () => {
   let name = document.getElementById("search").value;
   console.log(name);
 
   let res = await searchMovies(name);
   let movies = res.Search;
   appendMovies(movies);
   console.log(movies);
 };
 window.handleSearch=handleSearch;