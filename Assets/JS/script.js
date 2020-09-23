$(document).ready(function() {})

loadPage();

// Event listener for the save button click
$(".saveBtn").on("click", function() {
    var userInput = ($(this).siblings("textarea").val().trim());
    var userTime = ($(this).siblings("div").text().trim());
    localStorage.setItem(userTime, userInput);
})

//This will pull in the items from local storage
function loadPage() {
    $("#hour-9").children("textarea").text(localStorage.getItem("9AM"));
    $("#hour-10").children("textarea").text(localStorage.getItem("10AM"));
    $("#hour-11").children("textarea").text(localStorage.getItem("11AM"));
    $("#hour-12").children("textarea").text(localStorage.getItem("12PM"));
    $("#hour-13").children("textarea").text(localStorage.getItem("1PM"));
    $("#hour-14").children("textarea").text(localStorage.getItem("2PM"));
    $("#hour-15").children("textarea").text(localStorage.getItem("3PM"));
    $("#hour-16").children("textarea").text(localStorage.getItem("4PM"));
    $("#hour-17").children("textarea").text(localStorage.getItem("5PM"));
}