const allSeatBtnList = document.querySelectorAll(".seat-btn");
const couponBtn = document.getElementById("coupon-btn");
const seatError = document.getElementById("seat-error");
const nextBtn = document.getElementById("next-btn");

for (let i = 0; i < allSeatBtnList.length; i++) {
  allSeatBtnList[i].addEventListener("click", function (event) {
    handleSeatClick(event);
  });
}

let selectedSeatsNumber = 0;
const seatNameArray = [];

function handleSeatClick(event) {
  let seatBtn = event.target;
  nextError.innerText = "";
  const seatName = seatBtn.innerText;

  if (selectedSeatsNumber < 4 && seatNameArray.indexOf(seatName) == -1) {
    selectedSeatsNumber++;
    seatError.innerText = "";
    document.getElementById("coupon-input-error").innerText = "";
    const numberOfSelectedSeats = document.getElementById(
      "selected-seat-number"
    );
    const seatsLeft = document.getElementById("seat-left");
    let seatsLeftNumber = parseInt(seatsLeft.innerText);

    seatsLeftNumber--;
    seatsLeft.innerText = seatsLeftNumber;

    seatBtn.classList.add("bg-btnPrimary", "text-white");

    numberOfSelectedSeats.innerText = selectedSeatsNumber;

    seatNameArray.push(seatName);
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
    "justify-between",
    "text-center",
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
  seatNameArray.push(seatName);
}

couponBtn.addEventListener("click", function () {
  const grandPriceEl = document.getElementById("grand-total");
  const couponInput = document.getElementById("coupon-input");
  const couponDiv = document.getElementById("coupon-div");
  const couponInputValue = couponInput.value;
  const grandPrice = parseInt(grandPriceEl.innerText);

  if (selectedSeatsNumber > 0) {
    if (couponInputValue === "NEW15" || couponInputValue === "Couple 20") {
      document.getElementById("coupon-input-error").innerText = "";
      const discountedText = document.getElementById("discountedText");
      const discountedPriceText = document.getElementById("discountedPrice");
      couponDiv.style.display = "none";
      let discountedPrice;
      let discount;
      if (couponInputValue === "NEW15") {
        discountedPrice = grandPrice - (grandPrice * 15) / 100;
        discount = grandPrice - discountedPrice;
      } else if (couponInputValue === "Couple 20") {
        discountedPrice = grandPrice - (grandPrice * 20) / 100;
        discount = grandPrice - discountedPrice;
      }

      discountedText.innerText = "Discount (-)";
      discountedPriceText.innerText = "BDT " + discount;
      grandPriceEl.innerText = discountedPrice;
    } else {
      document.getElementById("coupon-input-error").innerText =
        "Invalid Coupon Code";
    }
  } else {
    seatError.innerText = "Please Select At Least One Seat!  ";
  }
});

nextBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const nextError = document.getElementById("nextError");
  if (selectedSeatsNumber > 0) {
    nextError.innerText = "";
    handleNext();
  } else {
    nextError.innerText = "Please Select At Least One Seat First!";
  }
});

function handleNext() {
  const phoneNumber = Number(document.getElementById("phone").value);
  const phoneError = document.getElementById("phoneError");
  console.log(phoneNumber);
  if (
    phoneNumber !== 0 &&
    typeof phoneNumber === "number" &&
    !isNaN(phoneNumber)
  ) {
    my_modal_1.showModal();
    phoneError.innerText = "";
  } else {
    phoneError.innerText = "Please Enter a Valid Phone Number";
  }
}
