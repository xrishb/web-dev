// Select the element with the ID "para" and modify its innerHTML
let para = document.getElementById("para");
if (para) {
    para.innerHTML = "This is now modified with JavaScript";
} else {
    console.error("Element with ID 'para' not found.");
}

// Select all elements with the class "hd"
let headings = document.getElementsByClassName("hd");

// Loop through each heading element
for (let i = 0; i < headings.length; i++) {
    // Modify the innerHTML for each heading
    headings[i].innerHTML = "This heading is overridden by script";
    // Apply the color style for each heading
    headings[i].style.color = "green";
}

// Use querySelector to select the first element with the class "hd" and apply the color style
let hd = document.querySelector(".hd");
if (hd) {
    hd.style.color = "green";
} else {
    console.error("Element with class 'hd' not found.");
}
