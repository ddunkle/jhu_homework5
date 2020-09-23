$(document).ready(function() {})

var divIDS = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
var locStor = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var curHour = parseInt(moment().hour())

loadPage();
colorPage();
setTime();


// Event listener for the save button click
$(".saveBtn").on("click", function() {
    var userInput = ($(this).siblings("textarea").val().trim());
    var userTime = ($(this).siblings("div").text().trim());
    localStorage.setItem(userTime, userInput);
})

//This will pull in the items from local storage
function loadPage() {
    // Pulling items from local storage
    // The arrays will go through each div tag
    for (i=0; i<divIDS.length; i++) {
        $("#" + divIDS[i]).children("textarea").text(localStorage.getItem(locStor[i]));
    };
    // Setting the current date
    $("#currentDay").text(moment().format('ddd MMM Do YYYY'));    
}

function colorPage() {    
    for (i=0; i<divIDS.length; i++) {
        if (curHour > (i+9)) {
            // add .past class
            $("#" + divIDS[i]).children("textarea").addClass("past");
        } else if (curHour === (i+9)) {
            // add .present class
            $("#" + divIDS[i]).children("textarea").addClass("present");
        } else {
            // add .future class
            $("#" + divIDS[i]).children("textarea").addClass("future");
        }
    }

}

function setTime() {
    var timerInterval = setInterval(function() {
        if (curHour != parseInt(moment().hour())) {
            curHour = parseInt(moment().hour())
            colorPage();
        };
        
        console.log(moment().minute());

    }, 60000);
}
