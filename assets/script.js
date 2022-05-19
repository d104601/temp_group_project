function renderTime() {
    var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        var timeEl = $("#time");
        timeEl.text(time);
    
}
renderTime();
setInterval(renderTime, 1000);