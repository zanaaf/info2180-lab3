document.addEventListener("DOMContentLoaded", (event) => {
    const squares = document.querySelectorAll("#board div");
    for (const sq of squares){
        sq.classList.add("square")}
});