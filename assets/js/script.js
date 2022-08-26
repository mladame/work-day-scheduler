//     PSEUDOCODE - branch - <setup>

//  timeblocks should be color coded for past, present, future - branch <feature/color-code>
//  clicking on timeblock will prompt you to enter an event onto timeblock <feature/save-event>
//      save button will save event to local storage
//      events will persist upon refresh

//  Work Day Scheduler Code
//  -------DEFINE ELEMENTS--------
//      elements to be defined: 
var timeBlock = $(".time-block");
//          ".container" - will hold timeblocks
//          ".time-block" - timeblocks in container under rows
//          ".saveBtn" - in container under rows
//          ".hour" - will show or dictate current hour - currentTime
//          ".past, .present, .future" - color coded classes
//          ".descrption" - textarea
//          ".hrX" = hour of row



// functions are called on page load
$(document).ready(function(){

    // ----CALENDAR-----
    var todaysDate = moment().format("dddd, MMMM Do YYYY");
    $('#currentDay').html(todaysDate);

//  ----COLOR CODE----
    function colorCode() {
        // current hour
        var currentTime = moment().hour();
        // console.log(currentTime);

        //call class, get hours loop
        // var scheduleTime = parseInt($(this).attr("id").split("hr","Number"));
        $(".time-block").each(function () {
            var scheduleTime = parseInt($(this).attr("id").split("hr")[1]);
        // console.log(scheduleTime);
        }
    )}


    colorCode()
})


//  color coded time interval for past, present, future
//  on open a function will show:
//       current hour as red, past hours as gray, future hours as green
// event.timeStamp - must be on an event
//      The difference in milliseconds between the time the browser created the event and January 1, 1970


//  function to define current hour in scheduler
//      moment.js to define current time? jquery?
//      if loop??
//      check timeblocks? check id, how? set class to number? setinterval()?
//      if (scheduleTime === currentTime) {
//          give class present
//      }
//      if (scheduleTime > currentTime) {
//          give class future
//      } else or
//      if (scheduleTime < currentTime) {
//          give class past
//      }

//      scheduleTime = the hour of the row


//  --------SAVE EVENT---------
// onclick save button, event-input will be stored in local storage
// might have to use "this"

// upon save, the event is rendered in its respective timeblock, persists upon refresh

//  get description - connect description to key?  $('#id').text('string'); ??
// set to local storage - localStorage.setItem(key,value);
// get from local storage - must remain - localStorage.getItem(key);