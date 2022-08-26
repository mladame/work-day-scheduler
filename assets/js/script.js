//     PSEUDOCODE - branch - <setup>
//  upon open we are presented with:
//      planner,  timeblocks.textarea for standard business hours - branch <feature/timeblocks>
//      current date at top of calendar "Day, Month Date, Year" - branch <feature/time>
//  timeblocks should be color coded for past, present, future - branch <feature/color-code>
//  clicking on timeblock will prompt you to enter an event onto timeblock <feature/save-event>
//      save button will save event to local storage
//      events will persist upon refresh
//  append timeblock + button to hour?

//  Work Day Scheduler Code
//  -------DEFINE ELEMENTS--------
//      elements to be defined: 
//          "#currentDay" ".lead" - container to render the date
//          ".container" - will hold timeblocks
//          ".time-block" - timeblocks in container under rows
//          ".saveBtn" - in container under rows
//          ".hour" - will show or dictate current hour
//          ".past, .present, .future" - color coded classes
//          ".descrption" - textarea

//  -------CALENDAR--------
//  function to call date upon open

//  add moment.js format: moment().format("dddd, MMMM Do YYYY");
//      UNIX Timestapm (seconds)    moment(1318874398806).unix(); // 1318874398
//      moment(Number); var day = moment(1318781876406);    moment.unix(Number)
//      moment().hour(Number);
//      moment().hour(); // Number


//  -------COLOR CODE--------
//  color coded time interval for past, present, future
//  on open a function will show:
//       current hour as red, past hours as gray, future hours as green
// event.timeStamp - must be on an event
//      The difference in milliseconds between the time the browser created the event and January 1, 1970
// if statement for color code? possible logic:

// if (hour === eventTime){
//     eventInput.addClass(present)
// }

// setInterval()?
// add ids to textarea for each hour? for all hours?


//  --------TIMEBLOCKS-------
//  timeblock consists of schedule, textarea, button, current hour
//  aligned to standard business hours 9am - 5pm
//      use bootstrap grid in html classes - go to hmtl file
//      bootstrap>listgroup>flush; will define where the hour should be shown


//  --------SAVE EVENT---------
// onclick save button, event-input will be stored in local storage
// might have to use "this"

// upon save, the event is rendered in its respective timeblock, persists upon refresh