console.log("hello");

// Initialize Firebase

    var config = {
        apiKey: "AIzaSyA6aXUUYGoQgKGJsO-2zqI5P_jThs9idzU",
        authDomain: "train-scheduler-app-75e82.firebaseapp.com",
        databaseURL: "https://train-scheduler-app-75e82.firebaseio.com",
        storageBucket: "train-scheduler-app-75e82.appspot.com",
      };

  firebase.initializeApp(config);

  //Set Up Variable To Connect To Firebase Database
  var database = firebase.database();

  //Add Submit Button On Click Event
  $("#add-train-btn").on("click", function (event) {
      event.preventDefault();

      //Pull Inputs
      var $trainName = $("#train-name-input").val().trim();
      var $destinationInput = $("#destination-input").val().trim();
      var $trainTimeInput = $("#time-input").val().trim();
      var $frequencyInput = $("#train-name-input").val().trim();

      var addTrain = {
          train: $trainName,
          destination: $destinationInput,
          time: $trainTimeInput,
          frequency: $frequencyInput,
      };

      //Upload Employee Data To Database
      database.ref().push(addTrain);

      console.log(addTrain.train);
      console.log(addTrain.destination);
      console.log(addTrain.time);
      console.log(addTrain.frequency);

      alert("it worked--You're not a dumbass")

      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#time-input").val("");
      $("#train-name-input").val("");
  });

  database.ref().on("child_added", function(childSnapshot){
      console.log(childSnapshot.val());

      //Store Info Into Variables
      var $trainName = childSnapshot.val().train;
      var $destinationInput = childSnapshot.val().destination;
      var $trainTimeInput = childSnapshot.val().time;
      var $frequencyInput = childSnapshot.val().frequency;
    
      // Employee Info
      console.log($trainName);
      console.log($destinationInput);
      console.log($trainTimeInput);
      console.log($frequencyInput);

    //Create New Row
    console.log("adding train info")
    var newRow = $("<tr>").append(
        $("<td>").text($trainName),
        $("<td>").text($destinationInput),
        $("<td>").text($trainTimeInput),
        $("<td>").text($frequencyInput),
        //$("<td>").text(empRate),
        //$("<td>").text(empBilled)
      );
      $("#train-table").append(newRow);

  });