
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
   let movieDetail = document.getElementById("movieDetail");
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