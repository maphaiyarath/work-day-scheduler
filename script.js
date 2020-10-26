var currentHour = moment().format("HH");
var timeBlocks = $(".time-block");
var saveButton = $(".saveBtn");
var events = [];

// WHEN I open the planner THEN the current day is displayed at the top of the calendar
$("#currentDay").html(moment().format("dddd, MMMM Do,  YYYY"));

// WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future
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

// WHEN I click the save button for that time block THEN the text for that event is saved in local storage
saveButton.click(function() {
    var blockHour = $(this).parent('.time-block').data("hour");
    var desText = $.trim($(this).siblings('.description').val());
    console.log(desText);

    if (desText === '') {
        return;
    }

    var des = {
        'hour': blockHour,
        'event': desText
    };

    events.push(des);

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
}

init();
showEvents();

/* function showScores() {
    for (var i = 0; i < scores.length; i++) {
        var scoreItem = scores[i];

        var tr = document.createElement("tr");
        scoresEl.append(tr);
        
        var tdInitial = document.createElement("td");
        tdInitial.textContent = scoreItem.initials;
        tr.append(tdInitial);

        var tdScore = document.createElement("td");
        tdScore.textContent = scoreItem.score;
        tr.append(tdScore);
    }
} */