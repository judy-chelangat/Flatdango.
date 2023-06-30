// As a user, I can:
// step 1. See the first movie's details, including its **poster, title, runtime,
// showtime, and available tickets** when the page loads. The number of
// available tickets will need to be derived by subtracting the number of
// `tickets_sold` from the theater's `capacity`. You will need to make a GET
// request to the following endpoint to retrieve the film data:

const initialize= ()=>{ // function to hold the entire code 
// fetch the movie details from the local server

function movieDetails(){
    fetch("http://localhost:3000/films/1")
    .then(resp => resp.json())
    .then(data =>{
        renderMovie(data) //passing in a function the data returned from the fetch 
        console.log(data)
    })

    function renderMovie(movie){
        const main = document.getElementById("movie-details")
        const details= document.createElement("div")
        let availableTickets= parseInt(`${movie.capacity}`) -parseInt(`${movie.tickets_sold}`)
        //dom manipulation to show the movie details when the page loads
        details.innerHTML=
        `
        <h3>${movie.title}</h3>
        <img src="${movie.poster}"/>
        <p>SHOWTIME:${movie.showtime}</p>
        <p>RUNTIME:${movie.runtime}</p>
        <p>CAPACITY:${movie.capacity}</p>
        <p>NUMBER OF TICKETS SOLD:${movie.tickets_sold}</p>
        <p>NUMBER OF AVAILABLE TICKETS:${availableTickets}</p>
        <p>DESCRIPTION:${movie.description}</p>
        `
        main.appendChild(details)
    }

}
movieDetails() // calling the function movie details 
//step 2 
// See a menu of all movies on the left side of the page in the `ul#films`
//    element when the page loads. (_optional_: you can style each film in the list
//    by adding the classes `film item` to each `li` element.) There is a
//    placeholder `li` in the `ul#films` element that is hardcoded in the HTML —
//    feel free to remove that element by editing the HTML file directly, or use
//    JavaScript to remove the placeholder element before populating the list. You
//    will need to make a GET request to the following endpoint to retrieve the
//    film data:
  // making a get request for all the movies
  function listMovies(){
    fetch("http://localhost:3000/films")
    .then(resp => resp.json())
    .then(data=>{
        // iterating over each movie to get the details
        data.forEach(movies=> {
            fetchMovies(movies)
        });
      
        console.log(data)
   
    })
function fetchMovies(movies){
    let ticketsAvailable= parseInt(`${movies.capacity}`) -parseInt(`${movies.tickets_sold}`)
    const listContainer =document.querySelector("#films")
   const listItems = document.createElement("li")
   listItems.className="film-items"
   listItems.innerHTML=`
       <h3>${movies.title}</h3>
        <img src="${movies.poster}"/>
        <p>SHOWTIME:${movies.showtime}</p>
        <p>RUNTIME:${movies.runtime}</p>
        <p>CAPACITY:${movies.capacity}</p>
        <p>NUMBER OF TICKETS SOLD:${movies.tickets_sold}</p>
        <p>NUMBER OF AVAILABLE TICKETS:${ticketsAvailable}</p>
        <p>DESCRIPTION:${movies.description}</p>
   `
   listContainer.appendChild(listItems)
}


  }
listMovies() //calling the listmovies function
//step 3:Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
//    see the number of available tickets decreasing on the frontend. I should not
//    be able to buy a ticket if the showing is sold out (if there are 0 tickets
//    available). **No persistence is needed for this feature**.


}


document.addEventListener("DOMContentLoaded",initialize) //making sure the dom is fully parsed before starting the script.js