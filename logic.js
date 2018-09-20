

// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyCarMgwSxNHUULoJ06uwn-cKqIJ4fmFXeU",
    authDomain: "homework-activity-7.firebaseapp.com",
    databaseURL: "https://homework-activity-7.firebaseio.com",
    projectId: "homework-activity-7",
    storageBucket: "homework-activity-7.appspot.com",
    messagingSenderId: "176250757959"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Button for adding train information
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainTime = moment($("#first-train-time-input").val().trim(), "HH:mm").format("X");
    var trainFrequency = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding train data
    var newTrain = {
      trnName: trainName,
      trnDestination: trainDestination,
      trnTime: trainTime,
      trnFrequency: trainFrequency
    };
  
    // Uploads train data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.trnName);
    console.log(newTrain.trnDestination);
    console.log(newTrain.trnTime);
    console.log(newTrain.trainFrequency);
  
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-time-input").val("");
    $("#frequency-input").val("");
  });
  
 
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trnName = childSnapshot.val().trainName;
    var trnDestination = childSnapshot.val().trainDestination;
    var trnTime = childSnapshot.val().trainTime;
    var trnFrequency = childSnapshot.val().trainFrequency;
  
    // Train Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainTime);
    console.log(trainFrequency);
  
    
    var trainStart = moment.unix(train).format("HH:mm");
  
   
    var trnMinutes = moment().diff(moment(trainStart, "X"), "minutes");
    console.log(trnMinutes);
  
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trnName),
      $("<td>").text(trnDestination),
      $("<td>").text(trnTime),
      $("<td>").text(trainFrequency),
      
    );
  
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
  });
  
 