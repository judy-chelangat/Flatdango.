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





}


document.addEventListener("DOMContentLoaded",initialize) //making sure the dom is fully parsed before starting the script.js