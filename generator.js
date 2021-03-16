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

function random(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)]

}
console.log(random(resturant));


let transportation = ["uber","taxi","rental","train","airplane"];

function random(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)]

}
console.log(random(transportation));


let entertainment = ["lasertag","movie","swimming","horseRiding","arcade"]

function random(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)]

}
console.log(random(entertainment));








if (confirm("is this random trip to your liking?")){
    Text = "you pressed ok";
} else{
    Text = "you pressed cancel";
}







console.log("you selected" + random(destination));
console.log("you selected" + random(resturant));
console.log("you selected" + random(transportation));
console.log("you selected" + random(entertainment));

