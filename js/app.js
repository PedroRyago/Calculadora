'use strict';

const operation = document.getElementById("operation");
const result = document.getElementById("result");

document.querySelector('.ball').addEventListener('click', (e)=>{
    themeChange();
    e.target.classList.toggle('ball-move');
});

function themeChange(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    
};

function show(param) {
    if (result.innerHTML == 0) {
        result.innerText = param;
    } else {
        result.innerText += param;
    }

}

function clickResult() {
    let operationContent = result.innerText;
    operation.innerText = operationContent;

    operationContent = operationContent.replace('x', '*');
    operationContent = operationContent.replace('÷', '/');
    result.innerText = eval(operationContent);
}

function clickAC() {
    result.innerText = '0';
}

function clickDel() {
    if (result.innerText.length > 1) {
        result.innerText = result.innerText.substring(0, result.innerText.length - 1);
    } else {
        result.innerText = '0';
    }
}