//-------------------------Enroll now==============================
// document.getElementById("action-btn").addEventListener("click", function(){alert("Registration closed");});


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