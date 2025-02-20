const display = document.getElementById("display");

function appendToDisplay(input) {
    if(input === 'M+'){
        display.value = "Currenlty working on it";
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
}