function setDailyRhythm(wakeUpTime, bedTime) {
    function setAlarm(time, callback) {
        return function () {
            let data = new Date ();
            Hour = data.getHours();
            Minutes = data.getMinutes();
            let a = Hour + ':' + Minutes;
            console.log(a);
            if ( a === time ) {
                return callback();
            }
        }
    }

}
