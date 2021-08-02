$(document).ready(function () {
    var now = moment().format('LLLL');
    document.getElementById("currentDay").innerHTML = now;

    console.log(now);

    $(".saveBtn").on("click", function () {
        console.log(this);
        var event = $(this).siblings(".textarea").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, event);
    })

    $("#09 .textarea").val(localStorage.getItem("09"));
    $("#10 .textarea").val(localStorage.getItem("10"));
    $("#11 .textarea").val(localStorage.getItem("11"));
    $("#12 .textarea").val(localStorage.getItem("12"));
    $("#13 .textarea").val(localStorage.getItem("13"));
    $("#14 .textarea").val(localStorage.getItem("14"));
    $("#15 .textarea").val(localStorage.getItem("15"));
    $("#16 .textarea").val(localStorage.getItem("16"));
    $("#17 .textarea").val(localStorage.getItem("17"));
    
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