function setDailyRhythm(wakeUpTime, bedTime) {
    
}

function setAlarm(time, callback) {
    return function (data) {
        let hour = data.getHours();
        let minutes = data.getMinutes();
        let a = hour + ':' + minutes;

        if (hour < 10 && minutes < 10) {
            hour = '0' + hour;
            minutes = '0' + minutes;
        }
        
        console.log(a);

        if ( a === time ) {
            return callback();
        }
    }
}

const goodMorning = () => alert('Доброе утро!'),
	checkTime = setAlarm('07:00', goodMorning);

/*
	передаём в checkTime информацию о 
	текущем времени системы. Так как 07:00 и 07:30,
	goodMorning не вызывается
*/
checkTime('07:30');

checkTime('07:00'); // Доброе утро