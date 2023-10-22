const inputElement = document.querySelector('#quantidade-input');
const fromElement = document.querySelector('#from');
const toElement = document.querySelector('#to');
const outputElement = document.querySelector('#output');
const convertBtn = document.querySelector('#convert-btn');
const messageElement = document.querySelector('#message');

function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
    }

    let meters;
    switch(fromValue) {
        case "mm":
            meters = inputElement.value / 1000;
            break;
        case "cm":
            meters = inputElement.value / 100;
            break;
        case "m":
            meters = inputElement.value;
            break;
        case "km":
            meters = inputElement.value * 1000;
            break;
    }

    let result;
    switch(toValue) {
        case "mm":
            result = meters * 1000;
            break;
        case "cm":
            result = meters * 100;
            break;
        case "m":
            result = meters;
            break;
        case "km":
            result = meters / 1000;
            break;
    }

    outputElement.value = result;
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;
    
    const message = `${inputElement.value} ${fromLabel} equilavem a ${result} ${toLabel}`;
    messageElement.textContent = message;
    return;
}

convertBtn.addEventListener('click', convert);
inputElement.addEventListener('keypress', e =>  {
    if (e.key === 'Enter') {
        convert();
    }
});
