const label = document.querySelectorAll(".form-control label");

label.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map((letter, idx) => `<span style="transition-delay:${idx * 40}ms">${letter}</span>`)
        .join("");
});

// const formActive = document.querySelectorAll("#login");
// const formControl = document.querySelectorAll(".form-control");

// for (let elem of formActive) {
//     if (elem.textContent) {
//         elem.classList.toggle("active");
//     }
// }

// const input = document.querySelector("#email");
// const form = document.querySelector("#login .form-control"); //i take the first element from the form

// if (input.value !=0 "") {
//     form.classList.add("active");
// } else {
//     form.classList.remove("active");
// }
