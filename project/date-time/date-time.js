// adding html elements to show date and time
let clockDiv = document.createElement('div');
document.body.appendChild(clockDiv);
clockDiv.setAttribute("id", "clock");
let clockElement = document.getElementById('clock')

// adding 'st', 'nd', 'rd', 'th' on dates
function getDateSuffix(date) {
    let dateSuffix;
    if (date == 1) {
        dateSuffix = "st"
    } else if (date == 2) {
        dateSuffix == "nd"
    } else if (date == 3) {
        dateSuffix == "rd"
    } else {
        dateSuffix = "th"
    }
    return dateSuffix;
}


function updateTime() {
    var currentDate = new Date();

    // day and date
    var year = currentDate.getFullYear();
    var day = currentDate.getDay() - 1;
    var date = currentDate.getDate();
    var month = currentDate.getMonth()
    var dayName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dateSuffix = getDateSuffix(date);

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

    clockElement.innerHTML = `Today is ${dayName[day]} - ${date}${dateSuffix} ${monthName[month]}, ${year}</br>
    <b>Current time is: </b>${hours1}:${mins}:${secs} ${strToAppend}`
}

setInterval(updateTime, 1000);