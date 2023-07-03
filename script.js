// As a user, I can:
// step 1. See the first movie's details, including its **poster, title, runtime,
// showtime, and available tickets** when the page loads. The number of
// available tickets will need to be derived by subtracting the number of
// `tickets_sold` from the theater's `capacity`. You will need to make a GET
// request to the following endpoint to retrieve the film data:

const initialize= ()=>{ // function to hold the entire code 
// fetch the movie details from the local server
let availableTickets; // Declare availableTickets in the outer scope
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
        availableTickets= parseInt(`${movie.capacity}`) -parseInt(`${movie.tickets_sold}`) 
        //dom manipulation to show the movie details when the page loads
        details.innerHTML=
        `
        <h3>${movie.title}</h3>
        <img src="${movie.poster}"/>
        <p class ="description" >DESCRIPTION:${movie.description}</p>
        <p>SHOWTIME:${movie.showtime}</p>
        <p>RUNTIME:${movie.runtime}</p>
        <p>CAPACITY:${movie.capacity}</p>
        <p>NUMBER OF TICKETS SOLD:${movie.tickets_sold}</p>
        <p id="availableTickets ${movie.id}">NUMBER OF AVAILABLE TICKETS:${availableTickets}</p>
        <button class="ticketButton btn btn-dark"> Buy Ticket</button>
     
        `
        main.appendChild(details)
        //implement a button for Buying a ticket and adding an event listener
   const buyTicketButton = details.querySelector(".ticketButton");
   buyTicketButton.addEventListener("click", buyTicket);
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
    availableTickets= parseInt(`${movies.capacity}`) -parseInt(`${movies.tickets_sold}`)//global scope
    const listContainer =document.querySelector("#films")
   const listItems = document.createElement("li")
   listItems.className="film-items"
   listItems.innerHTML=`
       <h2>${movies.title}</h2>
        <img src="${movies.poster}"/>
        <p class="description">DESCRIPTION:${movies.description}</p>
        <p>SHOWTIME: ${movies.showtime}</p>
        <p>RUNTIME: ${movies.runtime}</p>
        <p>CAPACITY: ${movies.capacity}</p>
        <p>NUMBER OF TICKETS SOLD: ${movies.tickets_sold}</p>
        <p id="availableTickets ${movies.id}">NUMBER OF AVAILABLE TICKETS: ${availableTickets}</p>
        <button class="ticketButton btn btn-dark"> Buy Ticket</button>
      
   `
   listContainer.appendChild(listItems)
   //implement a button for Buying a ticket and adding an event listener
   const button = listItems.querySelector(".ticketButton");
   button.addEventListener("click", buyTicket);
}


  }
listMovies() //calling the listmovies function
//STEP 3:Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
//    see the number of available tickets decreasing on the frontend. I should not
//    be able to buy a ticket if the showing is sold out (if there are 0 tickets
//    available). **No persistence is ne  eded for this feature**.
//function to decrement number of tickets 
function buyTicket() {
    const availableTicketsMain= this.parentNode.querySelector("p[id^='availableTickets']");// find the parent element of the element that has that id
    let leftTickets = parseInt(availableTicketsMain.textContent.split(": ")[1]); //retrieves the text content of the availableTicketsElement and splits it by the colon and space ": ".
    if (leftTickets > 0) {
      leftTickets --;
      availableTicketsMain.textContent = `NUMBER OF AVAILABLE TICKETS: ${leftTickets}`;
      availableTickets = leftTickets; // Update the availableTickets variable
    }
    else if (availableTickets === 0) {

           this.textContent = "Sold Out";
          }
  }
}

document.addEventListener("DOMContentLoaded",initialize) //making sure the dom is fully parsed before starting the script.js