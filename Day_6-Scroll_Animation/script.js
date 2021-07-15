const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
  const triggetBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    //The functiion gives me the position of the item relative to the viewport, from it s data i take the top bound
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggetBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

checkBoxes();

window.addEventListener("scroll", checkBoxes);
