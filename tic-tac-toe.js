document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div")
    for (const sq of squares){
        sq.classList.add("square")}
    
    let array = [];
    let counter = 1;
    for (const sq of squares){
        sq.addEventListener("click", () => {
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
            
        sq.onmouseover = function(){
            if (sq.textContent == "X") {
                sq.classList.add("hover");
            }
            else{
                sq.classList.add("hover");
            }
            };

        sq.onmouseleave = function(){
            if (sq.textContent == "X") {
                sq.classList.remove("hover");
            }
            else{
                sq.classList.remove("hover");
            }
        };       
    }
});


