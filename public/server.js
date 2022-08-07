//-------------------------Enroll now==============================
document.getElementById("action-btn").addEventListener("click", function(){alert("Registration closed");});


//Donation tab===========================================================================
function showDiv(){
  // on click the donation details will be displayed
  document.getElementById("show-div").style.display = "block";
  
}

showDiv();
// hide donate tab------------------------------------------------
function hideDiv(){
document.getElementById("show-div").style.display ="none";
  
}

hideDiv();



// function myFunction() {
//   document.getElementById("display-info").innerHTML = ();
// }


// show login form
function myFunction() {
  var y = document.getElementById("clickme");
  if ( y.style.display ="none"){
    y.style.display="block";
  }else{
    y.style.display = "none";
  }
  // document.getElementById("clickme").style.display = "block";
}

myFunction();
// hide form------------------------------------------------
function hide() {
  var formDiv = document.getElementById("clickme");
  if ( formDiv.style.display ="block"){
    formDiv.style.display="none";
  }else{
    formDiv.style.display = "block";
  }
}

hide();


// when users click log out button the close nav button doesn't display//
// document.addEventListener("click", myFunc);
// function myFunc(){
//   console.log("clicked");
//   document.getElementById("close-form").style.display = "none";
// }

// hide nav links---------------------------------------------
// function close() {
//   var navList = document.getElementById("navlist");
//   console.log(navList);
//   if ( navList.style.display ="block"){
//     navList.style.display ="none";
//   }else{
//     navList.style.display = "block";
//   }
//   // document.getElementById("clickme").style.display = "block";
// }

// close();



// var form =document.getElementById('form')
// form.addEventListener('submit', function(event){
//   event.preventDefault();

//   var firstName =document.getElementById('email').value;
//   var firstName =document.getElementById('password').value;

// })
// loginUser()
// // fetch('')