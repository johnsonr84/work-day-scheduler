$(document).ready(function() {
    var now = moment().format('LLLL');
    document.getElementById("currentDay").innerHTML = now;

    console.log(now);
})