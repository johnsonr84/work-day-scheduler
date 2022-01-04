$(document).ready(function () {
    var now = moment().format('LLLL');
    document.getElementById("currentDay").innerHTML = now;

    console.log(now);
    // listen for save button clicks
    $(".saveBtn").on("click", function () {
        console.log(this);
        // get nearby values
        var toDo = $(this).siblings(".textarea").val();
        var time = $(this).parent().attr("id");
        // save in localStorage
        localStorage.setItem(time, toDo);
    })
 
    // load any saved data from localStorage
    $("#09 .textarea").val(localStorage.getItem("09"));
    $("#10 .textarea").val(localStorage.getItem("10"));
    $("#11 .textarea").val(localStorage.getItem("11"));
    $("#12 .textarea").val(localStorage.getItem("12"));
    $("#13 .textarea").val(localStorage.getItem("13"));
    $("#14 .textarea").val(localStorage.getItem("14"));
    $("#15 .textarea").val(localStorage.getItem("15"));
    $("#16 .textarea").val(localStorage.getItem("16"));
    $("#17 .textarea").val(localStorage.getItem("17"));
    
    // set up interval to check if current time needs to be updated
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