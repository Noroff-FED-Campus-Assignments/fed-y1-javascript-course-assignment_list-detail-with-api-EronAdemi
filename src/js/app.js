/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/**
 * TODO: Create an event listener to sort the list.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L91
 */

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an array of objects from the API

/*
============================================
Helper functions
https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L154
============================================
*/

/**
 * TODO: Create a function to filter the list of item.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L135
 * @param {item} item The object with properties from the fetched JSON data.
 * @param {searchTerm} searchTerm The string used to check if the object title contains it.
 */

/**
 * TODO: Create a function to create a DOM element.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */

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
 
 const main = async () => {
   let name = document.getElementById("search").value;
   console.log(name);
 
   let res = await searchMovies(name);
   let movies = res.Search;
   appendMovies(movies);
   console.log(movies);
 };
 