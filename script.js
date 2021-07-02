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
}

// --getQuntity --//
function getQuntity(ticket) {
  const ticketInput = document.getElementById(ticket + "-quantity").value;
  const ticketQuantity = parseInt(ticketInput);
  return ticketQuantity;
}
