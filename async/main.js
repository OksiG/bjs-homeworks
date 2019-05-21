function setDailyRhythm(wakeUpTime, bedTime) {
    
    const wake = () => alert('Доброе утро, Вася');
        checkOneTime = setAlarm(wakeUpTime, wake);

    const bed = () => alert('Спокойной ночи, Вася!'),
        checkTwoTime = setAlarm(bedTime, bed);
    
    setInterval(checkOneTime, 1000, new Date());

    setInterval(checkTwoTime, 1000, new Date());
}

function setAlarm(time, callback) {
    return function (data) {
        let hour = data.getHours();
        let minutes = data.getMinutes();
        

        if (hour < 10) {
            hour = '0' + hour;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        
        let nowTime = hour + ':' + minutes;

        if ( nowTime === time ) {
            return callback();
        }
    }
}

setDailyRhythm('07:00', '11:22');