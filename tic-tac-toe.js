document.addEventListener("DOMContentLoaded", () => {
    const squares = Array.from(document.querySelectorAll("#board div"));
    
    for (const sq of squares){
        sq.classList.add("square")}
    
    let array = ["","","","","","","","", ""];
    let counter = 1;
    const stats = document.querySelector("#status");

    for (const sq of squares){
        sq.addEventListener("click", () => {
            if (counter%2 != 0) {
                sq.classList.add("X");
                sq.innerHTML="X";
                counter=counter+1;
                let index = squares.indexOf(sq);
                array[index]="X";
                winnercheck(array);
            }
            else {
                sq.classList.add("O");
                sq.innerHTML="O";
                counter=counter+1;
                let index = squares.indexOf(sq);
                squares.indexOf(sq);
                array[index]="O";
                winnercheck(array);
            }
        });            
            
        sq.onmouseover = function(){
            if (sq.textContent == "X") {
                sq.classList.add("hover");
            }
            else{
                sq.classList.add("hover");
            }
            }

        sq.onmouseleave = function(){
            if (sq.textContent == "X") {
                sq.classList.remove("hover");
            }
            else{
                sq.classList.remove("hover");
            }
        }
    }

        
        function winnercheck(array){
            const winconditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7] , [2,5,8], [0,4,8], [2,4,6]];
            for (const ele of winconditions){
                if (array[ele[0]]==array[ele[1]] && array[ele[1]]==array[ele[2]] && array[ele[0]]!= ""){
                    stats.classList.add("you-won");
                    if (array[ele[0]]=="X"){
                        stats.innerHTML="Congratulations! X is the Winner!";
                    }
                    else{
                        stats.innerHTML="Congratulations! O is the Winner!";
                    }       
                }
            }
        }

        const button = document.querySelector("button");

        button.addEventListener("click", () => {
            for (const sq of squares){
                sq.classList.remove("O");
                sq.classList.remove("X");
                sq.innerHTML="";
                }
            stats.classList.remove("you-won");
            stats.innerHTML="Move your mouse over a square and click to play an X or an O.";
            counter = 1;
            array = ["","","","","","","","", ""];
        });
});


