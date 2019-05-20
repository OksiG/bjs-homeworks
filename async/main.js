function setDailyRhythm(wakeUpTime, bedTime) {
    
}

function setAlarm(time, callback) {
    return function (data) {
        data = new Date ();
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

const goodMorning = () => alert('Доброе утро!'),
	checkTime = setAlarm('07:00', goodMorning);

checkTime('07:30');

checkTime('07:00'); // Доброе утро