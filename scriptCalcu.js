const display = document.getElementById("display");

function appendToDisplay(input) {
    if(input === 'M+'){
        display.value = "Currenlty working on it";
        display.style.fontSize = "2rem";
    }else {
        display.value += input;    
    }
}

function clearDisplay(input) {
    display.value = "";
    
}

function calculate() {
    display.value = eval(display.value);
}

function specialDisplay() {
    display.value = "SAKIN MOGA";
    display.style.fontSize = "3rem";
    display.style.color = "red";
}