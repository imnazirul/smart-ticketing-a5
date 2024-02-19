const allSeatBtnList = document.querySelectorAll(".seat-btn");

for (let i = 0; i < allSeatBtnList.length; i++) {
  allSeatBtnList[i].addEventListener("click", function (event) {
    handleSeatClick(event);
  });
}

let selectedSeatsNumber = 0;

function handleSeatClick(event) {
  selectedSeatsNumber++;
  if (selectedSeatsNumber <= 4) {
    let seatBtn = event.target;
    const numberOfSelectedSeats = document.getElementById(
      "selected-seat-number"
    );
    const seatsLeft = document.getElementById("seat-left");
    let seatsLeftNumber = parseInt(seatsLeft.innerText);

    seatsLeftNumber--;
    seatsLeft.innerText = seatsLeftNumber;
    numberOfSelectedSeats.innerText = selectedSeatsNumber;
    seatBtn.classList.add("bg-btnPrimary", "text-white");

    const seatName = seatBtn.innerText;
    handlePaymentInfo(seatName, selectedSeatsNumber);
  }
}

function handlePaymentInfo(name, seatsNumber) {
  const seatName = name;
  const seatType = "Economy";
  const seatPrice = 550;
  const div = document.createElement("div");
  const nameSpan = document.createElement("span");
  const typeSpan = document.createElement("span");
  const priceSpan = document.createElement("span");
  const paymentContainer = document.getElementById("payment-container");

  div.classList.add(
    "flex",
    "justify-around",
    "text-[#03071299]",
    "text-lg",
    "mb-2"
  );

  nameSpan.innerText = seatName;
  typeSpan.innerText = seatType;
  priceSpan.innerText = seatPrice;

  div.appendChild(nameSpan);
  div.appendChild(typeSpan);
  div.appendChild(priceSpan);

  paymentContainer.appendChild(div);

  const totalPrice = seatPrice * seatsNumber;

  const totalPriceEl = document.getElementById("total-price");
  const grandPriceEl = document.getElementById("grand-total");

  totalPriceEl.innerText = totalPrice;
  grandPriceEl.innerText = totalPrice;
}
