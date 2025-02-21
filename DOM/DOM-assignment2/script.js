let fun = document.getElementById("keyboard");
let display = document.getElementById("display");
let currentInput = "";

fun.addEventListener("click", (event) => {
    let clickedButton = event.target.innerText;

    if (event.target.id === "keyboard") return; 

    if (clickedButton === "C") {  // "C" ko uppercase likhna zaroori hai
        currentInput = "";
    } else if (clickedButton === "=") {
        try {
            currentInput = eval(currentInput).toString(); 
        } catch (error) {
            currentInput = "Error";
        }
    } else {
        currentInput += clickedButton;
    }

    display.innerText = currentInput;
});
