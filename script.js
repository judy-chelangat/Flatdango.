// As a user, I can:

// 1. See the first movie's details, including its **poster, title, runtime,
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
        renderMovie(data)
        console.log(data)
    })

    function renderMovie(movie){
        const main = document.getElementById("movie-details")
        const details= document.createElement("div")
        details.innerHTML=
        `
        <h3>${movie.title}</h3>
        <img src="${movie.poster}"/>
        <p>SHOWTIME:${movie.showtime}</p>
        <p>RUNTIME:${movie.runtime}</p>
        <p>CAPACITY:${movie.capacity}</p>
        <p>NUMBER OF TICKETS SOLD:${movie.tickets_sold}</p>
        <p>DESCRIPTION:${movie.description}</p>
        `
        main.appendChild(details)
    }

}
movieDetails()
}

document.addEventListener("DOMContentLoaded",initialize) //making sure the dom is fully parsed before starting the script.js