var gifButton = $("#btnGifSubmit");

// var searchedMuscle = $("#searchMuscle");
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
gifButton.on("click", function() {
    var userEventText = $(this).prev().val();
    console.log(userEventText);
    if (muscleGroupsArr.includes(userEventText)) {
        console.log("There is a match!");

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
            .then(function(data) {
                console.log(data);
            })
            .catch((err) =>
                console.error(
                    err,
                    "there was an error while retriving Searched muscle group"
                )
            );
    } else {
        console.log("Could not find this muscle group... Try one of the following");
        console.log(muscleGroupsArr);
    }
});


// registration feeding
formButton.on("");