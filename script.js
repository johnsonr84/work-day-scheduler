$(document).ready(function () {
    var now = moment().format('LLLL');
    document.getElementById("currentDay").innerHTML = now;

    console.log(now);

    $(".saveBtn").on("click", function () {
        console.log(this);
        var event = $(this).siblings(".textarea").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(event, time);
    })

    $("#9AM .textarea").val(localStorage.getItem("9AM"));
    $("#10AM .textarea").val(localStorage.getItem("10AM"));
    $("#11AM .textarea").val(localStorage.getItem("11AM"));
    $("#12PM .textarea").val(localStorage.getItem("12PM"));
    $("#1PM .textarea").val(localStorage.getItem("1PM"));
    $("#2PM .textarea").val(localStorage.getItem("2PM"));
    $("#3PM .textarea").val(localStorage.getItem("3PM"));
    $("#4PM .textarea").val(localStorage.getItem("4PM"));
    $("#5PM .textarea").val(localStorage.getItem("5PM"));
    
    var timer = setInterval(schedule, 100000)

function schedule() {

    var timeRows = document.querySelectorAll('.time-row');
    console.log(timeRows)

    var currentTime = moment().format('HH');
    console.log(currentTime)

    $(".time-row").each(function () {

        var timeBlock = $(this).attr("id")
        console.log(timeBlock)

        if (timeBlock < currentTime) {
            $(this).removeClass("present future")
            $(this).addClass("past")
        } else if (timeBlock > currentTime) {
            $(this).removeClass("past present")
            $(this).addClass("future")

        } else {
            $(this).removeClass("future past")
            $(this).addClass("present")
        }
    })
}
schedule();
})