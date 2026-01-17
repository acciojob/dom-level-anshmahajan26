//your JS code here. If required.
// get the element with id "level"
let element = document.getElementById("level");

let level = 0;

// count parents including html
while (element) {
  level++;
  element = element.parentElement;
}

// show result
alert("The level of the element is: " + level);
