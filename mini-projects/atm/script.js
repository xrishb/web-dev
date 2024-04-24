document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const cardNum = document.getElementById("card-num").value;
    const cardType = validateCardType(cardNum);
    if (cardType !== "Unknown") {
        displayCardType(cardType);
    } else {
        displayUnknownCardMessage();
    }
});

const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
const mastercardPattern = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
const americanExpPattern = /^3[47][0-9]{13}$/;

function validateCardType(cardNumber) {
    if (visaPattern.test(cardNumber)) {
        return "Visa";
    } else if (mastercardPattern.test(cardNumber)) {
        return "Mastercard";
    } else if (americanExpPattern.test(cardNumber)) {
        return "American Express";
    } else {
        return "Unknown";
    }
}

function displayCardType(type) {
    const cardInfo = document.querySelector(".card-info");
    cardInfo.textContent = ""; // Clear previous content

    const cardTypeDiv = document.createElement("div");
    cardTypeDiv.textContent = "Card Type: " + type;
    cardInfo.appendChild(cardTypeDiv);
}

function displayUnknownCardMessage() {
    const cardInfo = document.querySelector(".card-info");
    cardInfo.textContent = ""; // Clear previous content

    const unknownCardMessage = document.createElement("div");
    unknownCardMessage.textContent = "Unknown Card Type. Please enter a valid card number.";
    cardInfo.appendChild(unknownCardMessage);
}