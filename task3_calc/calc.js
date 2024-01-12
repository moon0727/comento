let inputNumber = '';
let inputNumberArray = [];
let inputOperator = [];
let displayString = '';
let test = 1;
let history = '';
let historyList = [];

function getNumber(data) {
    if(test == 1) {
        inputNumber += data;

        document.getElementsByClassName("calcScreen")[0].innerText += data;
    }
    else {
        alert("연산자를 입력해주세요.");
    }
}

function getOperator(data) {
    if(inputOperator.length == 0) {
        inputOperator.push(data);
        inputNumberArray.push(inputNumber);
        inputNumber = '';

        switch(data) {
            case '*' :
                displayString = 'x';
                break;
            case '/' :
                displayString = '÷';
                break;
            default :
                displayString = inputOperator[0];
                break;
        }

        test = 1;
        document.getElementsByClassName("calcScreen")[0].innerText += displayString;
    }
    else {
        alert("이항식 계산만 가능합니다.")
    }

}

function calculate() {
    inputNumberArray.push(inputNumber);
    let operand1 = Number(inputNumberArray.shift());
    let result = operand1;
    let operand2 = Number(inputNumberArray.shift());
    let operator = inputOperator.shift();

    history = operand1 + " " + operator + " " + operand2;

    switch(operator) {
        case '+' :
            result = operand1 + operand2;
            break;
        case '-' :
            result = operand1 - operand2;
            break;
        case '*' :
            result = operand1 * operand2;
            break;
        case '/' :
            result = operand1 / operand2;
            break;
        default :
            result = 0;
    }

    history += " = " + result + "\n";

    historyList.push(history);

    printHistory();

    inputNumber = result;
    test = -1;

    document.getElementsByClassName("calcScreen")[0].innerText = inputNumber;
}

function percentage() {
    if(inputNumberArray.length != 0) {
        inputNumber = Math.round((inputNumberArray[inputNumberArray.length-1] / 100) * inputNumber);

        document.getElementsByClassName("calcScreen")[0].innerText = (inputNumberArray + inputOperator + inputNumber);
    }
    else {
        alert("불가능한 연산입니다.")
    }
}

function fraction() {
    inputNumber = Math.round(1/inputNumber * 100) / 100;

    document.getElementsByClassName("calcScreen")[0].innerText = (inputNumberArray + inputOperator + inputNumber);
}

function square() {
    inputNumber *= inputNumber;

    document.getElementsByClassName("calcScreen")[0].innerText = (inputNumberArray + inputOperator + inputNumber);
}

function sqrt() {
    inputNumber = Math.round(Math.sqrt(inputNumber) * 100) / 100;;

    document.getElementsByClassName("calcScreen")[0].innerText = (inputNumberArray + inputOperator + inputNumber);
}

function positiveNegative() {
    if(inputNumber > 0) {
        inputNumber = -inputNumber;
    }
    else if(inputNumber < 0) {
        inputNumber = Math.abs(inputNumber);
    }

    document.getElementsByClassName("calcScreen")[0].innerText = (inputNumberArray + inputOperator + inputNumber);
}

function deleteAll() {
    inputNumber = '';
    inputNumberArray = [];
    inputOperator = [];

    document.getElementsByClassName("calcScreen")[0].innerText = inputNumber;

    test = 1;
}

function deleteOperand() {
    inputNumber = '';

    document.getElementsByClassName("calcScreen")[0].innerText = (inputNumberArray + inputOperator);
    test = 1;
}

function printHistory() {
    historyListRe = historyList.reverse();
    let joinHistoryList = historyListRe.join("");
    document.getElementsByClassName("content")[0].innerText = joinHistoryList;
}


