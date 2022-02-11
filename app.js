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


// api begins
function searchBreeds(search_str) {
  var string_length = search_str.length // get the length of the search string so we know how many characters of the breed name to compare it to
  search_str = search_str.toLowerCase(); // ensure search string and breed name are same case otherwise they won't match
  for (var i = 0; i < breeds.length; i++) // loop through all the breeds in order
  {
    var breed_name_snippet = breeds[i].name.substr(0, string_length).toLowerCase(); // get the first few cahracters of the name
    if (breed_name_snippet == search_str) {
      getDogByBreed(breeds[i].id) // show the breed just as we did in the Select demo
      return; // return the function so we don't keep searching
    }
  }
}

// Setup the Controls
var $breed_select = $('select.breed_select');
$breed_select.change(function() {
  var id = $(this).children(":selected").attr("id");
  getDogByBreed(id)
});


// Load all the Breeds
function getBreeds() {
  ajax_get('https://api.thedogapi.com/v1/breeds', function(data) {
    populateBreedsSelect(data)
    breeds = data
  });
}
// Put the breeds in the Select control
function populateBreedsSelect(breeds) {
  $breed_select.empty().append(function() {
    var output = '';
    $.each(breeds, function(key, value) {
      output += '<option id="' + value.id + '">' + value.name + '</option>';
    });
    return output;
  });
}
// triggered when the breed select control changes
function getDogByBreed(breed_id) {
  // search for images that contain the breed (breed_id=) and attach the breed object (include_breed=1)
  ajax_get('https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=' + breed_id, function(data) {

    if (data.length == 0) {
      // if there are no images returned
      clearBreed();
      $("#breed_data_table").append("<tr><td>Sorry, no Image for that breed yet</td></tr>");
    } else {
      //else display the breed image and data
      displayBreed(data[0])
    }
  });
}
// clear the image and table
function clearBreed() {
  $('#breed_image').attr('src', "");
  $("#breed_data_table tr").remove();
}
// display the breed image and data
function displayBreed(image) {
  $('#breed_image').attr('src', image.url);
  $("#breed_data_table tr").remove();

  var breed_data = image.breeds[0]
  $.each(breed_data, function(key, value) {
    // as 'weight' and 'height' are objects that contain 'metric' and 'imperial' properties, just use the metric string
    if (key == 'weight' || key == 'height') value = value.imperial
    // add a row to the table
    $("#breed_data_table").append("<tr><td>" + key + "</td><td>" + value + "</td></tr>");
  });
}

// make an Ajax request
function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
// call the getBreeds function which will load all the Dog breeds into the select control
getBreeds();






// 4a60b34e0a424436bdbd659aaf5deab9 news key
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=4a60b34e0a424436bdbd659aaf5deab9';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })


// // order form starts
// function calcOrder(){
//   var orderForm = document.forms.orderForm;

//   // calculate initial cost
//   var mIndex = orderForm.elements.model.selectedIndex;
//   var mCost = orderForm.elements.model.options[mIndex].value;
//   var qIndex = orderForm.elements.qty.selectedIndex;
//   var qIndex = orderForm.elements.qty[qIndex].value;

//   // initial cost = model cost x quanity
//   var initalCost = mCost*quanity;
//   orderForms.elements.initalCost.value = formatUSCurrency(initialCost);

//   // retrieve cost of the users protection plan
//   var pCost = document.querySelector('input[name="protection"]:checked').value*quantity;
//   orderForm.elements.protectionCost.value = formatNumber(initalCost + pCost, 2);

//   // calculate order subtotal
//   orderForm.elements.subtotal.value = formatNumber (initalCost +pCost, 2);

//   // calculate sales tax
//   var salesTax = 0.05*(initalCost +pCost);
//   orderForm.elements.salesTax.value = formatNumber(salesTax,2);

//   // calculate the cost of the total order
//   var totalCost = initalCost + pCost + salesTax;
//   orderForm.elements.totalCost.value = formatUSCurrency(totalCost);

// }



// const apiURL = "//random.dog/f856b11f-6d47-4089-9edf-aad8107161d0.jpg";
// fetch(apiURL)
// .then((dogImg)=> {
//     console.log(dogImg);
// });



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
