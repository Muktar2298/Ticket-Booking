function ticketClass(ticket, isIncreseQuantity) {
  // ---Ticket Quantity ---//
  const ticketInput = document.getElementById(ticket + "-quantity").value;
  const ticketQuantity = parseInt(ticketInput);

  let ticketUpdateQuantity = ticketQuantity;
  if (isIncreseQuantity == true && ticketQuantity < 6) {
    ticketUpdateQuantity = ticketQuantity + 1;
  }
  if (isIncreseQuantity == false && ticketQuantity >= 1) {
    ticketUpdateQuantity = ticketQuantity - 1;
  }
  document.getElementById(ticket + "-quantity").value = ticketUpdateQuantity;

  // // --For Booking Details --//
  document.getElementById(ticket + "-class" + "-quantity").innerText =
    ticketUpdateQuantity;
  document.getElementById(ticket + "-class" + "-quantity").innerText =
    ticketUpdateQuantity;

  //---Ticket Price ---//
  let ticketTotalPrice = ticketUpdateQuantity;
  if (ticket == "first") {
    ticketTotalPrice = ticketUpdateQuantity * 150;
  }
  if (ticket == "economy") {
    ticketTotalPrice = ticketUpdateQuantity * 100;
  }
  document.getElementById(ticket + "-price").innerText =
    "$ " + ticketTotalPrice;

  // --booking details --//
  document.getElementById(ticket + "-class" + "-price").innerText =
    ticketTotalPrice;
  document.getElementById(ticket + "-class" + "-price").innerText =
    ticketTotalPrice;

  ticketPriceCalculation();
}

// ----Calculations ----//
function ticketPriceCalculation() {
  const firstQuantity = getQuntity("first");
  const economyQuantity = getQuntity("economy");
  //---subtotal--//
  const subtotal = firstQuantity * 150 + economyQuantity * 100;
  document.getElementById("subtotal").innerText = "$ " + subtotal;
  //--tax--//
  const tax = subtotal * 0.1;
  document.getElementById("tax").innerText = "$ " + tax;

  //--total --//
  const total = subtotal + tax;
  document.getElementById("total").innerText = "$ " + total;

  // --booking details tax --//
  document.getElementById("booking-tax").innerText = "$" + tax;
  document.getElementById("booking-total").innerText = "$" + total;
}

// --getQuntity --//
function getQuntity(ticket) {
  const ticketInput = document.getElementById(ticket + "-quantity").value;
  const ticketQuantity = parseInt(ticketInput);
  return ticketQuantity;
}

//-------Extra Functionnility --------//

// // ---For Booking Details ----//
document.getElementById("book-now").addEventListener("click", function () {
  const booking = document.getElementById("booking");
  booking.style.display = "none";

  const bookingDetails = document.getElementById("ticket-booking-details");
  bookingDetails.style.display = "block";
});

// ---Confirm Booking Btn --//
document.getElementById("confirm-btn").addEventListener("click", function () {
  const bookingDetails = document.getElementById("ticket-booking-details");
  bookingDetails.style.display = "none";

  const confimrBooking = document.getElementById("confirm-booking");
  confimrBooking.style.display = "block";
});

// ---Cancle Booking Btn ---//
document.getElementById("cancle-btn").addEventListener("click", function () {
  const bookingDetails = document.getElementById("ticket-booking-details");
  bookingDetails.style.display = "none";

  // --Move to Home Page --//
  window.location.replace("index.html");
});
