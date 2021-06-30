// I get all the elements that have that class saved inside a node list; data structure similar to arrays
const panels = document.querySelectorAll('.panel');



panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}