renderTime();

function renderTime() {
    var timerInterval = setInterval(function() {
        var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        var timeEl = document.getElementById("time");
        timeEl.textContent = time;
    
    }, 1000);
}