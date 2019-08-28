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
  this.data = pickedMovie
}
Ticket.prototype.makeTicket = function(finalTicketPrice){
  var newTicketPrice = 0;
  if (this.age >= 55) {
    var newTicketPrice = finalTicketPrice.senior;
    displayTicket(newTicketPrice)
  } else if (this.age >= 18) {
    var newTicketPrice = finalTicketPrice.regular;
    displayTicket(newTicketPrice)
  } else if (this.age > 0) {
    var newTicketPrice = finalTicketPrice.kids;
    displayTicket(newTicketPrice)
  } else {
    alert("Please enter a valid age")
  }
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
  });
});
