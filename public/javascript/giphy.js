//for Giphy/Exercise
var gifButton = $("#gifButton");
var searchedMuscle = $("#searchedMuscle");
var exerciseName = $("#exercise-name");
var exerciseBP = $("#exercise-bodyPart");
var exerciseTarget = $("#exercise-target");
var exerciseGiphy = $("#exercise-giphy");
var exerciseEquipment = $("#exercise-equipment");
var muscleGroupsArr = [
  "abductors",
  "abs",
  "adductors",
  "biceps",
  "calves",
  "cardiovascular system",
  "delts",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "levator scapulae",
  "pectorals",
  "quads",
  "serratus anterior",
  "spine",
  "traps",
  "triceps",
  "upper back",
];

// for login Forum
var nameOfUser = $("name");
var lastName = $("lastname");
var emailOfUser = $("email");
var formButton = $("registerBtn");

// event lister for exercise + GIF
gifButton.on("click", function () {
  var userEventText = searchedMuscle.val();
  console.log(userEventText);
  // checking input for lowercase, user may put ABS, and it becomes invalid..
  if (muscleGroupsArr.includes(userEventText.toLowerCase())) {
    console.log("There is a match!");
    console.log(Math.floor(Math.random() * 95));
    // run fetch call with user's input
    const fetchExercises = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": "37f2a9a7cemsh5b611bc49e7a303p1e79e6jsn6b86cc035e5d",
      },
    };

    fetch(
      `https://exercisedb.p.rapidapi.com/exercises/target/` + userEventText,
      fetchExercises
    )
      .then((response) => response.json())
      .then(function (data) {
        // console.log(data);
        // console.log(data.length, "LENGTH OF ARRAY");

        var rndmNum = Math.floor(Math.random() * data.length);

        rndmExercise = data[rndmNum];

        exerciseName.text(`Exercise Name: ${rndmExercise.name}`);

        exerciseBP.text(`Main body part: ${rndmExercise.bodyPart}`);
        exerciseTarget.text(`Target muscle: ${rndmExercise.target}`);
        exerciseEquipment.text(`Equipment: ${rndmExercise.equipment}`);
        exerciseGiphy.attr("src", `${rndmExercise.gifUrl}`);
      })
      .catch((err) =>
        console.error(
          err,
          "there was an error while retriving Searched muscle group"
        )
      );
  } else {
    console.error(
      "Could not find this muscle group... Try one of the following"
    );
    console.error(muscleGroupsArr);
    alert("Could not find this muscle group... Try one of the following");
    alert(muscleGroupsArr);
  }
});

// registration feeding
// formButton.on("");
