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

// WHEN I click the save button for that time block THEN the text for that event is saved in local storage

// WHEN I refresh the page THEN the saved events persist

/*

if (scoreForm) {
    // when the game is over, the user can save their initials and score
    scoreForm.addEventListener("submit", function(event) {
        event.preventDefault();
    
        var initialText = initialInput.value.trim();
    
        // do not accept empty initials
        if (initialText === '') {
            return;
        }

        var userScore = {
            'initials': initialText,
            'score': score
        };
        
        // add the new score to the scores array
        scores.push(userScore);
        
        // reset the input field
        initialInput.value = '';
    
        // add the scores array to localStorage
        localStorage.setItem('scores', JSON.stringify(scores));

        // go to highscores page
        window.location.href = "https://maphaiyarath.github.io/code-quiz/highscores.html";
    });
    
}

// grab the previous high scores from localStorage
function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scores = storedScores;
    }
}

// present the high scores as a table
function showScores() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scores = storedScores;
    }

    // create a row for each score found
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
}

// self-explanatory
function clearScores() {
    scoresEl.innerHTML = '';
    localStorage.clear();
}

// if on high scores page, then show scores
if (scoresEl) {
    showScores();
}

init();

*/