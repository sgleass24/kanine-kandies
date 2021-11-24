var message= prompt("How Old Are You?");
function getAge(){
    
    if(message >= 18){
        alert("Welcome");
    }else if (message < 18){
        alert("Sorry! Must be 18 or older to enter this page!");
        location.replace("404.html");
    }
    
}

getAge();


var day;
switch (new Date().getDay()) {
    case 0:
      day = "Brunch and Free Samples";
      break;
    case 1:
      day = "1/2 off All Oils";
      break;
    case 2:
       day = "2 for 1 Treats";
      break;
    case 3:
      day = "Buy One Get One Free";
      break;
    case 4:
      day = "Add a Gummy";
      break;
    case 5:
      day = "Bring a Friend, Get a Treat";
      break;
    case 6:
      day = "Buy Two Edibles Get One Free";
  }
document.getElementById("message1").innerHTML=(`Today is ${day}`);
console.log('Today is ' + (new Date().getDay()));

//   function kandies(){
//     const kandies=["Alleries",
//     "Anxiety", 
//     "Digestive Issues", 
//     "Glaucoma", 
//     "Seizures", 
//     "Skin Problems", 
//     "Joint and Mobility Problems", 
//     "Better Appetite"];
//     document.getElementById("btn").innerHTML = kandies;
// }

//carousel starts here
const arrayCarousel = [
  "images/chart.png", 
  "images/image.png",
];

counter=0;

function setImage(){
  document.getElementById("carousel-image").src = arrayCarousel [counter];
  // document.getElementById("carousel-image1").src = arrayCarousel [counter];
  
  counter = (counter + 1) % arrayCarousel.length;
}
setInterval (setImage, 3000);

// puppy calculator
function calculateDogAge(){
  var age = document.getElementById("dog").value;
  var ageCalc= age * 7;
  document.getElementById("celDog").innerHTML=(ageCalc);

}
calculateDogAge();

//dosage
var smDog ={
  starting: "3mg",
  medium: "6mg",
  higher: "9mg",
  
}
function getDosage(){
  var place =document.getElementById("btnsm");
  
 


for (value in smDog){
  place.innerHTML = "Starting: " + smDog.starting + '<br>' +
  "Medium: " + smDog.medium + "<br>" +
  "Higher: " + smDog.higher + "<br>" ;

}
};

function clear1(){
  var close = "";
  document.getElementById("btnsm").innerHTML = close;
  
};

var mdDog ={
  starting: "5mg",
  medium: "10mg",
  higher: "15mg",
  
}
function getDosage2(){
  var place =document.getElementById("btnmd");
  
 


for (value in mdDog){
  place.innerHTML = "Starting: " + mdDog.starting + '<br>' +
  "Medium: " + mdDog.medium + "<br>" +
  "Higher: " + mdDog.higher + "<br>" ;

}
};

function clear2(){
  var close = "";
  document.getElementById("btnmd").innerHTML = close;
  
};

var lgDog ={
  starting: "10mg",
  medium: "20mg",
  higher: "30mg",
  
}
function getDosage3(){
  var place =document.getElementById("btnlg");
  
 


for (value in lgDog){
  place.innerHTML = "Starting: " + lgDog.starting + '<br>' +
  "Medium: " + lgDog.medium + "<br>" +
  "Higher: " + lgDog.higher + "<br>" ;

}
};

function clear3(){
  var close = "";
  document.getElementById("btnlg").innerHTML = close;
  
};



// function special(){
// if(dayNumber ===1){
// return '1/2 off all oils'
// } else if (dayNumber ===2) {
// return '2 for 1 treats'
// } else if (dayNumber ===3){
//     return 'Buy one get one free'
// } else if (dayNumber ===4) {
//     return 'add a gummy'
// } else if (dayNumber ===5){
//     return 'bring a friend, get a treat'
// } else if (dayNumber ===6){
//     return 'buy two edibles get one free'
// } else if (dayNumber ===7){
//     return 'brunch and free samples'
// } else (element.classList.add("hideme"))
// };


// console.log('you got a ' + special());
// element.innerHTML='check out the special today' + '</br>' + special();

// function assignGrade(grade){
//     if ( grade <=60){
//         return 'F';
//     } else if (grade > 60 && grade <70){
//         return 'D';
//     } else if (grade > 70 && grade <80){
//         return 'C';
//     } else if (grade >80 && grade <90){
//         return 'B';
//     } else {
//         return 'A'
//     }
// }

// console.log(`you got a` + assignGrade(95));
