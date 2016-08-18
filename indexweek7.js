
  // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAE93SRAUAO0oaCzZDsnV5b-k_q3I71Dpw",
    authDomain: "st-firebase-project-99a16.firebaseapp.com",
    databaseURL: "https://st-firebase-project-99a16.firebaseio.com",
    storageBucket: "st-firebase-project-99a16.appspot.com",
  };
  firebase.initializeApp(config);



// Create a variable to reference the database
var database = firebase.database();

$("#addEmployee").on("click", function() {
   // console.log(name + role);

  // YOUR TASK!!!
  // Code in the logic for storing and retrieving the most recent user.
  // Dont forget to handle the "initial load"

  // Capture User Inputs and store into variables
  var name = $('#nameInput').val().trim(); 
  var destination = $('#roleInput').val().trim(); 
  var start = $('#dateInput').val().trim(); 
  var frequency = $('#monthsInput').val().trim(); 
  
  
  var timeDifference = moment().diff(moment(start,"HH:mm"),'m');
  var timeRemaining = timeDifference % frequency;
  var away = frequency - timeRemaining
  var next = moment().add(away,'m');

  console.log(name);
  var row = $('<tr>');
  var cellDest = $('<th>').text(destination);
  var cellName = $('<th>').text(name);
  var cellFreq = $('<th>').text(frequency + " minutes");
  var cellAway = $('<th>').text(away);
  var cellNext = $('<th>').text(moment(next).format("HH:mm"));

    row .append(cellName)
        .append(cellDest)
        .append(cellFreq)
        .append(cellNext)
        .append(cellAway);


    $('#currentTrains').append(row);

//Creating object to be passed in key is the left, variable value is on the left
//made up key name is on the left, property 

//getting change
database.ref().push({
    Name: name,
    Destination: destination,
    Frequency: frequency,
    NextTrain: moment(next).format("HH:mm"),
    MinutesAway: away,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  // Don't refresh the page!
  return false;
});

// Create Firebase "watcher" (.on("value"))- we want to update HTML

//reading changes - need this to update html
// database.ref().on("child_added", function(childsnapshot) {
    
//     $("#namedisplay").html(childsnapshot.val().name);
//     $("#roledisplay").html(childsnapshot.val().age);
//     $("#startDatedisplay").html(childsnapshot.val().email);
//     $("#monthRatedisplay").html(childsnapshot.val().comment);
    
    
//   },

// Create Error Handling

// function (errorObject) {

//     // 
//       console.log("The read failed: " + errorObject.code);
  
//   });
