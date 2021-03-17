"use strict";




console.log("welcome to the day trip planner");
console.log("random destination, resturant, transport, and entertainment");
console.log("everything you need to generate your day trip!");






let destination = ["milwaukee", "madison", "dells", "devilslake"];
function random(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)];
    
}
let destinationRandom = random(destination);
console.log("destination " +destinationRandom);






let resturant = ["mcdonalds","dennys","fineDining","flemmin"];
let resturantRandom = random(resturant);
console.log("resturant " + resturantRandom);






let transportation = ["uber","taxi","rental","train","airplane"];
let transportationRandom = random(transportation);
console.log("transport " + transportationRandom);





let entertainment = ["lasertag","movie","swimming","horseRiding","arcade"]
let entertainmentRandom = random(entertainment);
console.log("entertainment " + entertainmentRandom);





let userInput = prompt("would you like to change anything about your random trip?");


if (userInput == "yes"){
    while (userInput == "yes"){
        console.log ("you have changed to " + reChoose());
        userInput = prompt ("would you like to change another catagory. yes or no.");
    }
}
else if (userInput == "no"){
    console.log("have a great time");
}
else{
    userInput = prompt ("are you sure?");
}
console.log("enjoy your trip!");





function reChoose(){
    let user = prompt("what would you like to change?");
    if (user == "destination"){
         destinationRandom = random(destination);
        return destinationRandom;
    }
    else if( user === "resturant"){
        resturantRandom = random(resturant);
        return resturantRandom;
    }
    else if (user === "transportation"){
         transportationRandom = random(transportation);
        return transportationRandom;
    }
    else if (user === "entertainment"){
         entertainmentRandom = random(entertainment);
        return entertainmentRandom;
    }
}





alert("you have choosen " + destinationRandom);
alert("this will be the place to eat at " + resturantRandom);
alert("the type of transport will be " + transportationRandom);
alert("the type of enjoyment you wish for is " + entertainmentRandom);

console.log ("you have choosen " + destinationRandom);
console.log ("this will be the place to eat at " + resturantRandom);
console.log ("the type of transport you will take is " + transportationRandom);
console.log ( "the type of enjoyment you wish for is " + entertainmentRandom);

console.log (" you have choosen to go to " + destinationRandom + " and eat at "+ resturantRandom + " with the transportation of " + transportationRandom + " to go enjoy doing "  + entertainmentRandom);