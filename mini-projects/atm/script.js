const cardNum = document.getElementById("card-num");
const cvv = document.getElementById("cvv");
const validity = document.getElementById("validity");
const cardInfo = document.querySelector(".card-info");

let visa = /^4[0-9]{12}(?:[0-9]{3,4})?$/;
let mastercard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
let american_exp = /^3[47](?:[0-9]{13})$/;

if(visa.test(cardNum)==true) {
    cardInfo.innerHTML("Visa");
}