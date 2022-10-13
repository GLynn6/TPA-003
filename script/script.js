let API_URL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a778f608cc2da52edfa63af16f8ebbc2";
let IMG_URL = "https://image.tmdb.org/t/p/w400";
let searching ="https://api.themoviedb.org/3/search/movie?api_key=a778f608cc2da52edfa63af16f8ebbc2";

let card = document.getElementById("daftar-movie");
let form = document.getElementById("form");
let search = document.getElementById("search");

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(respond => respond.json()).then(movies => {
        console.log(movies)
        showMovies(movies.results)
    })
    
}



function showMovies(movies) {
  
    card.innerHTML = '';

  movies.forEach((movie) => {
    let { title, poster_path, vote_average, release_date } = movie;
    
    let movieList = document.createElement("div");
    movieList.classList.add("movie");
    movieList.innerHTML += `
    
    <div class="card-group">
        <div class="card">
          <img class="card-img-top" src="${IMG_URL + poster_path }" alt="${title}" ">
          <div class="card-movie">
              <div class="card-body">
                  <div class="d-flex justify-content-between ">
                      <div>
                          <p class="card-text pe-5 "> ${title}</p>
                      </div>
                      <div>
                          <p class="card-number ps-2 "> <strong>${vote_average}</strong> </strong></p>
                      </div>
                  </div>
                  <p class="card-text mt-3">${release_date}</p>
              </div>
          </div>
        </div>
    </div>
            `

    card.appendChild(movieList);
  });
}

form.addEventListener("submit",  async (e) => {
  e.preventDefault();

  let searchMovie = search.value;

  if (searchMovie) {
    getMovies(searching + '&query=' + searchMovie);

  }
});
