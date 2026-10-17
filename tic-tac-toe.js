document.addEventListener("DOMContentLoaded", (event) => {
    const squares = document.querySelectorAll("#board div")
    for (const sq of squares){
        sq.classList.add("square")}
    
let array = [];
let counter = 1;
for (const sq of squares){
    sq.addEventListener("click", (event) => {
        if (counter%2 != 0) {
            sq.classList.add("X");
            sq.innerHTML="X";
            counter=counter+1;
            }
        else {
            sq.classList.add("O");
            sq.innerHTML="O";
            counter=counter+1;
            }
        });
    }
});


