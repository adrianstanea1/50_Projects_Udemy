const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let curentActive = 1;

//Listen for when a click on the object pointed by next happens
next.addEventListener("click", () => {
  //Run a function when that occurs
  curentActive++;

  if (curentActive > circles.length) {
    //We dont want to increment more than the total number of circles
    curentActive = circles.length;
  }

  update(); //function that i define to change styles
});

prev.addEventListener("click", () => {
  //Run a function when that occurs
  curentActive--;

  if (curentActive < 1) {
    //We dont want to decrement less than 1 which is the first state
    curentActive = 1;
  }

  update();
});

//aply the class that makes the circles blue
function update() {
  circles.forEach((circle, index) => {
    if (index < curentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //Modify the sate of the button so that is disabled when at the end or both enabled when in the middle
  if (curentActive === 1) {
    prev.disabled = true;
  } else if (curentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
