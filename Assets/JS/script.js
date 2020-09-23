$(document).ready(function() {})

// Declaration of variables
// The arrays are helpful to load the page
var divIDS = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
var locStor = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
// Getting the current hour needed for the page coloring
var curHour = parseInt(moment().hour())

// Function calls to load the page
loadPage();
colorPage();
setTime();


// Event listener for the save button click
$(".saveBtn").on("click", function() {
    // Gets what the user typed into the text area
    var userInput = ($(this).siblings("textarea").val().trim());
    // Grabs the time for the text area
    var userTime = ($(this).siblings("div").text().trim());
    // Stores the time and message into local storage
    localStorage.setItem(userTime, userInput);
})

// This will pull in the items from local storage
function loadPage() {
    // Pulling items from local storage
    // The arrays will go through each div tag
    for (i=0; i<divIDS.length; i++) {
        $("#" + divIDS[i]).children("textarea").text(localStorage.getItem(locStor[i]));
    };
    // Setting the current date
    $("#currentDay").text(moment().format('ddd MMM Do YYYY'));    
}

// Function to color the page
function colorPage() {  
    // loop to color each of the textarea tags  
    for (i=0; i<divIDS.length; i++) {
        if (curHour > (i+9)) {
            // add .past class
            $("#" + divIDS[i]).children("textarea").removeClass("present");
            $("#" + divIDS[i]).children("textarea").addClass("past");
        } else if (curHour === (i+9)) {
            // add .present class
            $("#" + divIDS[i]).children("textarea").removeClass("future");
            $("#" + divIDS[i]).children("textarea").addClass("present");
        } else {
            // add .future class
            $("#" + divIDS[i]).children("textarea").addClass("future");
        }
    }

}

// Function to update the time. This runs every minute and when the hour changes, the coloring will update
function setTime() {
    setInterval(function() {
        // Checking to see if the current hour matches what the page thinks it is
        if (curHour != parseInt(moment().hour())) {
            // Updating the current hour
            curHour = parseInt(moment().hour());
            //console.log("You entered an hour change")
            // Coloring the page
            colorPage();
        };
        // Logging the minute to make sure the listener functions correctly
        // console.log("hour: " + moment().hour());
        // console.log("minute: " + moment().minute());
        // console.log("system hour: " + curHour);
    }, 60000);
}

