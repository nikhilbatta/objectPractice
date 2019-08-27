// Ticket.prototype.addRating = function() {
  //   if(this.age < Movie.rating) {
    //       alert('Please select a different movie!')
    //     } else if (this.age >= Movie.rating) {
      //       return true;
      //     }
      //   };
      // var loewy-movie = new Movie( 18);
      // var nikhil-movie = new Movie("Nikhil goes to Oregon", 13);
      // var pizza-movie = new Movie("Pizza, the Movie", 1);
      // var dom-movie = new Movie("Dom goes to School", 1);


//backend for ticket and age logic
var ticketPrice = {
  senior: 7.00,
  kids: 3.50,
  matinee: 7.50,
  regular: 9.00
}

function Movie(title,age) {
  this.movie = title,
  this.age = age
}


function Ticket(age, pickedMovie){
  this.age = age,
  // this.time= time,
  this.data = pickedMovie
}



Ticket.prototype.makeTicket = function(finalTicketPrice){
  var newTicketPrice = 0;
  if (this.age >= 55) {
    var newTicketPrice = finalTicketPrice.senior;
  } else if (this.age >= 18) {
    var newTicketPrice = finalTicketPrice.regular;
  } else if (this.age > 0) {
    var newTicketPrice = finalTicketPrice.kids;
  } else {
    alert("Please enter a valid age")
  }
  return newTicketPrice;
};


function displayTicket(newTicketPrice) {
  $("#output").text("$" + newTicketPrice);
};


$(document).ready(function(){
  newTicketPrice = "";
  var finalTicketPrice =  {
    senior: 7.00,
    kids: 3.50,
    matinee: 7.50,
    regular: 9.00
  };
  $("#movieform").submit(function(event) {
    event.preventDefault();
    var inputAge = $("#age1").val();
    var inputMovie = $("#movie-title").val();
    var inputTime = $("#movie-time").val();
    var pickedMovie = new Movie(inputMovie, inputAge);
    var ticketParameters = new Ticket(inputAge,pickedMovie);
    ticketParameters.makeTicket(finalTicketPrice);
    console.log(ticketParameters);
    displayTicket(newTicketPrice);
    console.log(displayTicket(finalTicketPrice));
  });
});
