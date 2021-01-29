// adding html elements to show date and time
let clockDiv = document.createElement('div');
document.body.appendChild(clockDiv);
clockDiv.setAttribute("id", "clock");
let clockElement = document.getElementById('clock')

// adding 'st', 'nd', 'rd', 'th' on dates
function getDaySuffix(day) {
    let daySuffix;
    if (day == 1) {
        daySuffix = "st"
    } else if (day == 2) {
        daySuffix == "nd"
    } else if (day == 3) {
        daySuffix == "rd"
    } else {
        daySuffix = "th"
    }
    return daySuffix;
}


function updateTime() {
    var currentDate = new Date();

    // day and date
    var year = currentDate.getFullYear();
    var day = currentDate.getDate();
    var month = currentDate.getMonth()
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var daySuffix = getDaySuffix(day);

    // time 
    var hours = currentDate.getHours();
    var mins = currentDate.getMinutes();
    var secs = currentDate.getSeconds();
    var strToAppend;

    if (hours > 12) {
        strToAppend = "PM";
        hours < 22 ? hours1 = "0" + (hours - 12) : hours1 = String(hours);    
    }
    else if (hours < 12) {
        strToAppend = "AM";
        hours < 10 ? hours1 = "0" + (hours) : hours1 = String(hours);   
    }
    else {
        hours1 = hours;
        strToAppend = "PM";
    }
    
    // adding a "0" when value of minute is less than 10
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    clockElement.innerHTML = `Today is ${day}${daySuffix} ${monthName[month]}, ${year}</br>
    <b>Current time is: </b>${hours1}:${mins}:${secs} ${strToAppend}`
}

setInterval(updateTime, 1000);