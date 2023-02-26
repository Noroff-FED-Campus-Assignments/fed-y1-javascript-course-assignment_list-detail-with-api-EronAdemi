/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

// TODO: Get the query parameter from the URL

// TODO: Get the id from the query parameter

// TODO: Create a new URL with the id @example: https://www.youtube.com/shorts/ps7EkRaRMzs

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an a single of objects from the API

/*
============================================
Helper functions
============================================
*/

/**
 * TODO: Create a function to create a DOM element.
 * @example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */


 const url = window.location.href;
 const searchParams = new URL(url).searchParams;
 console.log(searchParams);
 const data = new URLSearchParams(searchParams).entries();

 const array = Array.from(data)[0];
 const movieId = array[1];
 console.log(movieId);

 const getDetails = async (movieId) => {
   try {
     let res = await fetch(
       `https://www.omdbapi.com/?i=${movieId}&apikey=d56bc60a`
     );
     let moviedetails = await res.json();
     return moviedetails;
   } catch (Error) {
     alert("an error happened while data fetching");
   }
 };

 const fetchDetails = async (movieId) => {
   const movieDetails = await getDetails(movieId);
   console.log(movieDetails);
   showDetails(movieDetails);
 };
 fetchDetails(movieId);

 const showDetails = (d) => {
   d.innerHTML = null;

   let div = document.createElement("div");
   let moviePoster = document.createElement("img");
   moviePoster.src = d.Poster;

   let info = document.createElement("div");
   info.id = "info";
   let releaseDate = document.createElement("p");
   releaseDate.textContent = `Released Date: ${d.Released}`;
   let title = document.createElement("p");
   title.textContent = `Title: ${d.Title}`;
   let ratings = document.createElement("p");
   ratings.textContent = `IMDB Rating: ${d.imdbRating}`;
   let des = document.createElement("p");
   des.textContent = `Plot: ${d.Plot}`;
   let recom = document.createElement("label");
   recom.textContent = "recommendated";
   recom.style.backgroundColor = "#FBC02D";

   if (d.imdbRating >= 8.5) {
     info.append(recom);
   }
   info.append(title, releaseDate, ratings, des);
   div.append(moviePoster, info);
   movieDetail.append(div);
 };