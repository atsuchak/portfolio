const display = document.getElementById("display");

function appendToDisplay(input) {
    if(input === 'M+'){
        display.value = "Currenlty working on it";
        display.style.fontSize = "5vh";
    }else {
        display.value += input;    
    }
}

function clearDisplay(input) {
    display.value = "";
    
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "ERROR"
    }
    
}

function specialDisplay() {
    display.value = "SAKIN MOGA";
    display.style.fontSize = "5vh";
    display.style.color = "red";
}