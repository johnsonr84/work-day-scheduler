$(document).ready(function() {
    var now = moment().format('LLLL');
    document.getElementById("currentDay").innerHTML = now;

    console.log(now);

    $(".save-btn").on("click", function () {
        console.log(this);
        var event = $(this).siblings(".textarea").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(event, time);
})

$("#9AM .textarea").val(localStorage.getItem("9AM"))

})