const cardNum = document.getElementById("card-num");
const cvv = document.getElementById("cvv");
const validity = document.getElementById("validity");
const cardInfo = document.querySelector(".card-info");

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

cardNum.addEventListener("input", function() {
    const cardType = validateCardType(cardNum.value);
    displayCardType(cardType);
});

function displayCardType(type) {
    const cardTypeElement = document.querySelector(".card-info .card-type");
    if (cardTypeElement) {
        cardTypeElement.textContent = type;
    } else {
        const cardTypeDiv = document.createElement("div");
        cardTypeDiv.classList.add("card-type");
        cardTypeDiv.textContent = type;
        cardInfo.appendChild(cardTypeDiv);
    }
}