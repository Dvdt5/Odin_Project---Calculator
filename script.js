const firstNumberSpan = document.getElementById("first-number");
const secondNumberSpan = document.getElementById("second-number");
const operatorSpan = document.getElementById("operator");
const calculateBtn = document.getElementById("calculate-btn");
const clearBtn = document.getElementById("clear-btn")

const number0Btn = document.getElementById("number-0");
const number1Btn = document.getElementById("number-1");
const number2Btn = document.getElementById("number-2");
const number3Btn = document.getElementById("number-3");
const number4Btn = document.getElementById("number-4");
const number5Btn = document.getElementById("number-5");
const number6Btn = document.getElementById("number-6");
const number7Btn = document.getElementById("number-7");
const number8Btn = document.getElementById("number-8");
const number9Btn = document.getElementById("number-9");

const divisionOperatorBtn = document.getElementById("operator-/");
const multiplyOperatorBtn = document.getElementById("operator-*");
const subtractOperatorBtn = document.getElementById("operator--");
const sumOperatorBtn = document.getElementById("operator-+");



let firstNumber = [];
let secondNumber = [];
let operator = "";


const displayChanges = () => {
    firstNumberSpan.innerText = firstNumber.join("");
    operatorSpan.innerText = operator;
    secondNumberSpan.innerText = secondNumber.join("");
}


const clearAll = () => {
    operator = "";
    firstNumber = [];
    secondNumber = [];
    firstNumberSpan.innerText = "";
    operatorSpan.innerText = "";
    secondNumberSpan.innerText = "";
}


const calculate = () => {
    firstNumberSpan.innerText = "";
    operatorSpan.innerText = "";
    let result;
    switch (operator){
        case "+":
            result = `${Number(firstNumber.join("")) + Number(secondNumber.join(""))} `
            break;
        case "-":
            result = `${Number(firstNumber.join("")) - Number(secondNumber.join(""))} `
            break;
        case "x":
            result = `${Number(firstNumber.join("")) * Number(secondNumber.join(""))} `
            break;
        case "/":
            result = `${Number(firstNumber.join("")) / Number(secondNumber.join(""))} `
            break;
    }
    clearAll();
    secondNumberSpan.innerText = result;
}


const assignOperator = (opt) => {
    if (firstNumberSpan.innerText === "") {
        return;
    }
    if (!operator) {
        operator = opt;
    }
    displayChanges()
}

const enterNumber = (number) => {
    if (!operator) {
        if (firstNumber.length === 12 ){
            return;
        }
        firstNumber.push(number);
    } 
    else {
        if (secondNumber.length === 12){
            return;
        }
        secondNumber.push(number);
    }

    displayChanges();
}

number0Btn.addEventListener("click",()=>enterNumber("0"));
number1Btn.addEventListener("click",()=>enterNumber("1"));
number2Btn.addEventListener("click",()=>enterNumber("2"));
number3Btn.addEventListener("click",()=>enterNumber("3"));
number4Btn.addEventListener("click",()=>enterNumber("4"));
number5Btn.addEventListener("click",()=>enterNumber("5"));
number6Btn.addEventListener("click",()=>enterNumber("6"));
number7Btn.addEventListener("click",()=>enterNumber("7"));
number8Btn.addEventListener("click",()=>enterNumber("8"));
number9Btn.addEventListener("click",()=>enterNumber("9"));

sumOperatorBtn.addEventListener("click", ()=>assignOperator("+"));
subtractOperatorBtn.addEventListener("click", ()=>assignOperator("-"));
multiplyOperatorBtn.addEventListener("click", ()=>assignOperator("x"));
divisionOperatorBtn.addEventListener("click", ()=>assignOperator("/"));

calculateBtn.addEventListener("click", ()=>calculate());
clearBtn.addEventListener("clicl", ()=>clearAll());