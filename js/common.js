// get input field value by id
function getInputFieldValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldNumber;
}

// ----set input field value function-----
function setElementValue(elementId, elementValue) {
    const inputField = document.getElementById(elementId);
    inputField.innerText = elementValue;
};

// get title for table
function getTitle(id) {
    const element = document.getElementById(id).innerText;
    return element;
};

// get container and create tr--------
function getContainer(id) {
    const container = document.getElementById(id);
    return container;
};

function createTr(element) {
    const tr = document.createElement(element);
    return tr;
};

// random color

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    let rgb = 'rgb(' + color.join(', ') + ')';
    return rgb;
};

function setColor(id) {
    const item = document.getElementById(id);
    const color = randomColor()
    item.style.backgroundColor = color;
}

function setRandomColor(id) {
    document.getElementById(id).addEventListener('mouseenter', function () {
        setColor(id);
    })
}

