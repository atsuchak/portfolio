const display = document.getElementById("display");

function appendToDisplay(input) {
    if(input === 'M+'){
        display.value = "Currenlty working on it";
        display.style.fontSize = "2.5rem";
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
    display.style.fontSize = "4rem";
    display.style.color = "red";
}