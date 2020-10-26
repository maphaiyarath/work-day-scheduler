// good ol' variables
var currentHour = moment().format("HH");
var timeBlocks = $(".time-block");
var saveButton = $(".saveBtn");
var desEl = $(".description");
var events = [];

// WHEN I open the planner THEN the current day is displayed at the top of the calendar
$("#currentDay").html(moment().format("dddd, MMMM Do,  YYYY"));

// WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future
timeBlocks.each(function() {
    var blockHour = $(this).data("hour");
    var blockDes = $(this).children(".description");
    
    // past, present, and future
    if (blockHour < currentHour) {
        blockDes.addClass("past");
    } else if (blockHour === currentHour) {
        blockDes.addClass("present");
    } else {
        blockDes.addClass("future");
    }
});

// WHEN I click the save button for that time block THEN the text for that event is saved in local storage
saveButton.click(function() {
    var blockHour = $(this).parent('.time-block').data("hour");
    var desText = $.trim($(this).siblings('.description').val());

    // if no text, you don't have to do anything, unless something was already saved
    if (desText === '' && !events.some(i => i.hour === blockHour)) {
        return;
    }

    var des = {
        'hour': blockHour,
        'event': desText
    };

    // just in case an old event needs to be overwritten
    if (events.some(i => i.hour === blockHour)) {
        var oldDes = events.find(({hour}) => hour === blockHour);
        oldDes.event = desText;
    } else {
        events.push(des);
    }

    localStorage.setItem('events', JSON.stringify(events));
});

// WHEN I refresh the page THEN the saved events persist
function init() {
    var storedEvents = JSON.parse(localStorage.getItem('events'));

    if (storedEvents !== null) {
        events = storedEvents;
    }
};


function showEvents() {
    var storedEvents = JSON.parse(localStorage.getItem('events'));

    if (storedEvents !== null) {
        events = storedEvents;
    }

    // match up the hours and the stored events, if any
    desEl.each(function() {
        var blockHour = $(this).parent('.time-block').data("hour");
        var desItem = events.find(({hour}) => hour === blockHour);

        if (desItem)
            this.value = desItem.event;
    });
}

init();
showEvents();