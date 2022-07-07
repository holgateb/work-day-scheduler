var containerEL = document.querySelector("timeblocks")

//DECLARE current time

//DECLARE current hour

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//DECLARE currrent day element

//DECLARE time entries container element

//Render a black for each hour of the day

// var myArray = ["asdf", "asdf"] {
for(var i = 0; i > today.length; i++){
    
};

//compare i to currrent hour to determine if this hour is past present future

//attempt to get the saved data for the hour of loop
// var data = "hour-"+i

// var data = ["asdf"]


//APPEND html to container element

// }

//set up a click event listener on the container

containerEL.on("click", "[data-hour]", function(event) {

    //fetch the hour from the clicked buttons (event.taget) "data-hour" attribute.

    //use the hour to create the key for local storage.

    //from the clicked button, traverse the DOM to the nearby textarea to fetch it's value

    //Use the key and the value into localstorage

});

    // save an hour to local storage




// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
