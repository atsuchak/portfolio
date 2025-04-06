const display = document.getElementById("display");

let memoryValue = 0;

function appendToDisplay(input) {
    if(input === 'M+'){
        memoryPlus();
    }else {
        display.value += input;    
    }
}

function memoryPlus() {
    const current = parseFloat(display.value);
    if (!isNaN(current)) {
        memoryValue += current;
        display.value = ''; 
    } else {
        display.value = "ERROR";
    }
}

function memoryRecall() {
    display.value += memoryValue.toString();
}

function clearDisplay() {
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

// function specialDisplay() {
//     display.value = "SAKIN MOGA";
// }