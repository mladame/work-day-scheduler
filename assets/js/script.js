//     PSEUDOCODE - branch - <setup>
//  clicking on timeblock will prompt you to enter an event onto timeblock <feature/save-event>
//      save button will save event to local storage
//      events will persist upon refresh

//  Work Day Scheduler Code
//  -------DEFINE ELEMENTS--------
//      elements to be defined: 
//          ".saveBtn" - in container under rows
//          ".descrption" - textarea



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
})

//  --------SAVE EVENT---------
// onclick save button, event-input will be stored in local storage
// might have to use "this"

// upon save, the event is rendered in its respective timeblock, persists upon refresh

//  get description - connect description to key?  $('#id').text('string'); ??
// set to local storage - localStorage.setItem(key,value);
// get from local storage - must remain - localStorage.getItem(key);