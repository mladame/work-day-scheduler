//     PSEUDOCODE - branch - <setup>
//  upon open we are presented with:
//      planner, sortable timeblocks for standard business hours - branch <feature/timeblocks>
//          sortable timeblocks - jquery 
//      current date at top of calendar "Day, Month Date, Year" - branch <feature/time>
//  timeblocks should be color coded for past, present, future - branch <feature/color-code>
//  clicking on timeblock will prompt you to enter an event onto timeblock <feature/save-event>
//      save button will save event to local storage
//      events will persist upon refresh

//  Work Day Scheduler Code
//  -------DEFINE ELEMENTS--------
//      elements to be defined: 
//          "#currentDay" ".lead" - container to render the date
//          ".container" - will hold timeblocks
//          ".timeblocks" - timeblocks in container under rows
//          ".saveBtn" - in container under rows

//  -------CALENDAR--------
//  function to call date upon open

//  add moment.js format: moment().format("dddd, MMMM Do YYYY");
//      UNIX Timestapm (seconds)    moment(1318874398806).unix(); // 1318874398


//  --------TIMEBLOCKS-------
//  timeblock script from jquery - sortable - default

//  aligned to standard business hours 8am - 5pm
//      use bootstrap grid in html classes - go to hmtl file
//      bootstrap>listgroup>flush 

// onclick each timeblock can record an event/text


//  -------COLOR CODE--------
//  color coded time interval for past, present, future




//  --------SAVE EVENT---------
// onclick save button, event value will be stored in local storage

// upon save, the event is rendered in its respective timeblock, persists upon refresh