"use strict"


console.log("welcome to the day trip planner")
console.log("random destination, resturant, transport, and entertainment")
console.log("everything you need to generate your day trip!")



let destination = ["milwaukee", "madison", "dells", "devilslake"];

function random(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)]
    
}
console.log(random(destination));



let resturant = ["mcdonalds","dennys","fineDining","flemmin"];


console.log(random(resturant));


let transportation = ["uber","taxi","rental","train","airplane"];


console.log(random(transportation));


let entertainment = ["lasertag","movie","swimming","horseRiding","arcade"]


console.log(random(entertainment));



let userInput = prompt("would you like to change anything about your random trip?")


if (userInput == "yes"){
    while (userInput == "yes"){
        console.log ("you have selected" + reChoose(userInput))
        userInput = prompt ("would you like to change another catagory. yes or no.")
    }
}
else if (userInput == "no"){
    console.log("have a great time");
}
else{
    userInput = prompt ("are you sure?")
}
console.log("enjoy your trip!")


function reChoose(input){
    let user = prompt("what would you like to change?");
    if (user == "destination"){
        let newDestination = random(destination)
        return newDestination;
    }
    else if( user === "resturant"){
        let newResturant = random(resturant);
        return newResturant;
    }
    else if (user === "transportation"){
        let newTransportation = random(transportation);
        return newTransportation
    }
    else (user === "entertainment");{
        let newEntertainment = random(entertainment);
        return newEntertainment
    }
}


