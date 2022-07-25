var saveBtnEl = document.querySelector("button");
var msgDiv = document.querySelector("#msg");

//DECLARE time entries container element

var containerEl = document.querySelector("#timeblocks")

//DECLARE current time

var time = moment().format("h:mm:ss");
$("#currentTime").text(time);

//Declare current day

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//DECLARE currrent day element

// var currentDayEl = document.querySelector('#currentDay')
// var currentTimeEl = document.querySelector('#currentTime')

//Render a block for each hour of the day

for (var i = 9; i <= 17; i++) { 

    var key = "hour-"+i;
    //Attempt to get saved data for each hour of the loop
    var data = ""
    //compare i to current hour to determine if past present future

    //past red, current white, future green

    // if (i) {
    //     $('.description').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    //   } else if {
    //     $('.description').css({ 'background-color': '#a8c9a1', color: '#1a1a1a' });
    //   } else {
    //     $('.description').css({ 'background-color': '#a8c9a1', color: '#1a1a1a' });
    //   }
    
    var template = `
    <div class="row">
      <div>${i}AM</div>
      <div class="hour">
        <textarea>${data}</textarea>
      </div>
      <div>
        <button class="saveBtn" data-hour="${i}">Save</button>
      </div>
    </div>
    `;

console.log(template)

  //APPEND html to container element????

  $(".container").append(template);
};

//set up a click event listener on the container

containerEL.on("click", "button", function(event) {

//     //fetch the hour from the clicked buttons (event.taget) "data-hour" attribute.

    var hour = event.target.getAttribute('data-hour');

//     //use the hour to create the key for local storage.

    hour = localStorage.setItem("data-hour");

//     //from the clicked button, traverse the DOM to the nearby textarea to fetch it's value

    saveBtnEl.addEventListener("click", saveEntry());
    document.querySelector(".description").innerHTML = data;
    
//     //Save the key and the value into localstorage

    function saveEntry(hour, data) {
      var hour = localStorage.getItem("data-hour");
      var data = localStorage.getItem("data");
    
      msgDiv.textContent = data-hour + data;
    }
});

    // save an hour to local storage

    saveButtonEl.addEventListener("click", function(event) {
      event.preventDefault();
    
      var email = document.querySelector("#email").value;
      var password = document.querySelector("#password").value;
    
      if (email === "") {
        displayMessage("error", "Email cannot be blank");
      } else if (password === "") {
        displayMessage("error", "Password cannot be blank");
      } else {
        displayMessage("success", "Registered successfully");
    
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        renderLastRegistered();
      }
});