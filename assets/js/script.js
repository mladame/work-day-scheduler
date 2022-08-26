// WORK SCHEDULER CODE
// functions are called on page load
$(document).ready(function(){

    // ----CALENDAR-----
    var todaysDate = moment().format("dddd, MMMM Do YYYY");
    $('#currentDay').html(todaysDate);

//  ----COLOR CODE----
    function colorCode() {
        // current hour
        var currentTime = moment().hour();

        //call class, get hours loop
        $(".time-block").each(function () {
            var scheduleTime = parseInt($(this).attr("id").split("hr")[1]);

        // Assign class for color code
        if (scheduleTime === currentTime) {
            $(this).addClass("present");
        }
        if (scheduleTime > currentTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }})
}
    colorCode()

    //  ----SAVE EVENT-----
    $(".saveBtn").on("click", function() {
        var event = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, event);
    })

    //local storage render for each
    $("#hr9 .description").val(localStorage.getItem("hr9"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hr11"));
    $("#hr12 .description").val(localStorage.getItem("hr12"));
    $("#hr13 .description").val(localStorage.getItem("hr13"));
    $("#hr14 .description").val(localStorage.getItem("hr14"));
    $("#hr15 .description").val(localStorage.getItem("hr15"));
    $("#hr16 .description").val(localStorage.getItem("hr16"));
    $("#hr17 .description").val(localStorage.getItem("hr17"));

})
