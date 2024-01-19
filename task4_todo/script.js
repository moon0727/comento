
let tasks = [];

let ul = document.createElement('ul');

function addTask() {
    if(!document.getElementsByClassName('addTask')[0].value) {
        alert('내용을 입력해주세요');
    }
    else if(tasks.length == 10) {
        alert('일정은 최대 10개까지 추가할 수 있습니다');
    }
    else {
        let task = document.getElementsByClassName('addTask')[0].value;
        tasks.push(task);
        settingTask();
    }
}

function deleteTask() {
    let checkboxes = document.querySelectorAll('input[name="check"]');

    for(let checkbox of checkboxes) {
        if(checkbox.checked == true) {
            checkbox.nextElementSibling.remove();
            checkbox.remove();
        }
    }
}

function settingTask() {
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "check");
    input.setAttribute("onchange", "checking()")
    let span = document.createElement('span');
    let hr = document.createElement('hr');
    let text;

    for(let i = 0; i < tasks.length; i++) {
        text = tasks[i];
        span.innerText = text;
        ul.appendChild(li);
        li.appendChild(input);
        li.appendChild(span);

    }
    document.getElementsByClassName('list')[0].appendChild(ul);
}


function checking() {
    let checkboxes = document.querySelectorAll('input[name="check"]');

    for(let checkbox of checkboxes) {
        if(checkbox.checked == true) {
            checkbox.nextElementSibling.style.textDecorationLine = "line-through";
        }
        else {
            checkbox.nextElementSibling.style.textDecorationLine = "none";
        }
    }
}
