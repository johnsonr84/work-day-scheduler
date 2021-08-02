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
    
    var timer = setInterval(schedule, 100000)

function schedule() {

    var eventRow = document.querySelectorAll('.event-row');
    console.log(eventRow)

    var eventTime = moment().format('HH');
    console.log(eventTime)

    $(".event-row").each(function () {

        var eventBlock = $(this).attr("id")
        console.log(eventBlock)

        if (eventBlock < eventTime) {
            $(this).removeClass("present future")
            $(this).addClass("past")
        } else if (eventBlock > eventTime) {
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