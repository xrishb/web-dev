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

// event listeners
// get button with id and use event listeners
let button = document.getElementById("btn");
// button.onclick =  function() { 
//         alert("button was clicked"); 
//     };

// upper syntax was good, but the better approach is :

button.addEventListener("click", function() {
    alert("event listeners in work");
});
// some useful events

button.addEventListener("mouseover", function() {
    hd.innerHTML = "mouse entered the button border";
    hd.style.color = "red";
    hd.style.fontSize = "2rem";
});

button.addEventListener("mouseout", function() {
    hd.innerHTML = "mouse left the button ";
    hd.style.color = "blue";
    hd.style.fontSize = "1.5rem";
})

// some others => keydown + eventkey, keyup, input + this.value, scroll, resize, submit, load 