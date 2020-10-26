/*

WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/

// WHEN I open the planner THEN the current day is displayed at the top of the calendar
$("#currentDay").html(moment().format("dddd, MMMM Do,  YYYY"));

// WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future
var currentHour = moment().format("HH");
var timeBlocks = $(".time-block");

timeBlocks.each(function() {
    var blockHour = $(this).data("hour");
    var blockDes = $(this).children(".description");
    
    if (blockHour < currentHour) {
        blockDes.addClass("past");
    } else if (blockHour === currentHour) {
        blockDes.addClass("present");
    } else {
        blockDes.addClass("future");
    }
});

/*
$('.testimonial').each(function(){
    //if statement here 
    // use $(this) to reference the current div in the loop
    //you can try something like...
    if(condition){
    }
 });
*/