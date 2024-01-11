
let battery = 100;
let alarmList = [];

currentDate();
batteryCount();

function batteryCount() {
    battery = battery - 1;

    document.getElementsByClassName("battery")[0].innerText = "배터리 : " + battery + "%";

    if(battery > 0) {
        setTimeout(() => batteryCount(), 1000);
    }
    else {
        batteryZero();
        document.getElementsByClassName("battery")[0].innerText = "배터리부족";
    }
}

function batteryZero() {
    document.getElementsByClassName("time")[0].style = "background : black; color : black";
}

function currentDate() {
    const today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let day = today.getDay();

    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();

    month = (month < 10) ? "0" + month : month;
    date = (date < 10) ? "0" + date : date;

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    switch(day) {
        case 0 :
            day = "일";
            break;
        case 1 :
            day = "월";
            break;
        case 2 :
            day = "화";
            break;
        case 3 :
            day = "수";
            break;
        case 4 :
            day = "목";
            break;
        case 5 :
            day = "금";
            break;
        case 6 :
            day = "토";
            break;
    }

    const todayDate = year + "년 " + month + "월 " + date + "일 (" + day +")";
    const time = hh + " : " + mm + " : " + ss;

    document.getElementsByClassName("date")[0].innerText = todayDate;
    document.getElementsByClassName("time")[0].innerText = time;

    setTimeout(() => currentDate(), 1000);
}

function addAlarm() {
    if(alarmList.length < 3) {
        let hour = prompt("시간을 입력해주세요.(00~23)");
        let minute = prompt("분을 입력해주세요.(00~59)");
        let second = prompt("초를 입력해주세요.(00~59)");

        if((hour >= 0 && hour <= 23 && hour != null) && (minute >= 0 && minute <= 59 && minute != null) && (second >= 0 && second <= 59 && second != null)) {
            hour = (hour < 10 && hour.length == 1) ? "0" + hour : hour;
            minute = (minute < 10 && minute.length == 1) ? "0" + minute : minute;
            second = (second < 10 && second.length == 1) ? "0" + second : second;

            let newAlarm = (hour + "시 " + minute + "분 " + second + "초 " + "\n");
            let printAlarmList = [];

            alarmList.push(newAlarm);

            for(let i = 0; i < alarmList.length; i++) {
                printAlarmList[i] = i+1 + "번째 알람 : " + alarmList[i];
            }
            let joinAlarmList = printAlarmList.join("");
            document.getElementsByClassName("content")[0].innerText = joinAlarmList;
        }
        else {
            alert("입력이 잘못되었습니다. 다시 시도해주세요.");
        }
    }
    else {
        alert("알람은 3개까지 설정할 수 있습니다.");
    }
}

function deleteAlarm() {
    if(alarmList.length != 0) {
        const selectAlarm = prompt("몇번째 알람을 삭제하겠습니까?");

        if(selectAlarm <= alarmList.length && selectAlarm > 0) {
            let printAlarmList = [];
            alarmList.splice(selectAlarm-1, 1);

            for(let i = 0; i < alarmList.length; i++) {
                printAlarmList[i] = i+1 + "번째 알람 : " + alarmList[i];
            }

            let joinAlarmList = printAlarmList.join("");
            document.getElementsByClassName("content")[0].innerText = joinAlarmList;
        }
        else {
            alert("잘못된 입력입니다.");
        }
    }
    else {
        alert("삭제할 알람이 없습니다.")
    }
}
