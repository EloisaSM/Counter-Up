const startCounter = moment("2020-09-10 14:06:00");



function counter(){
    const timeNow = moment();

    const days = timeNow.diff(startCounter, 'days');
    const hours = timeNow.diff(startCounter, 'hours');
    const minutes = timeNow.diff(startCounter, 'minutes');
    const seconds = timeNow.diff(startCounter, 'seconds');

    const calculatingHours = hours - days * 24;
    const calculatingMinutes = minutes - hours * 60;
    const calculatingSeconds = seconds - minutes * 60;

    const counterFormat = `${days} days ${calculatingHours} hours ${calculatingMinutes} minutes ${calculatingSeconds} seconds `;

    showCounter(counterFormat);
}

function showCounter(value){
    const timerElement = document.querySelector('.timer');

    timerElement.innerHTML =  value;
}

setInterval(counter, 1000);