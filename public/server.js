var regBtn = document.querySelectorAll(".dropdown-item");
var dropDiv = document.getElementsByClassName("hero");
var login = document.getElementById('login');
var register = document.getElementById('register')
var button = document.getElementById('btn');
console.log(login, register, button);

function myRegister(){
  login.style.left ="-400px";
  register.style.left ="50px";
  button.style.left ="110px";
}

function myLogin(){
  login.style.left ="50px";
  register.style.left ="450px";
  button.style.left ="0px";
}
myRegister()
myLogin()


//Donation tab
function showDiv(){
  // document.getElementsByClassName("show-details").style.display = "block";  
  document.getElementById("show-div").style.display = "block";
  
}

showDiv();
// hide donate tab------------------------------------------------
function hideDiv(){
document.getElementById("show-div").style.display ="none";
  
}

hideDiv();

//--------------------------Show courses---------------------
function showCourse(){
  document.getElementById("bi").style.display= "block";
}
showCourse();
function showScience(){
  document.getElementById("ds").style.display= "block";
}
showScience();
function showAnalysis(){
  document.getElementById("da").style.display= "block";
}
showAnalysis();
function showWeb(){
  document.getElementById("wd").style.display= "block";
}
showWeb();
function showMobile(){
  document.getElementById("md").style.display= "block";
}
showMobile();

/*--------------------------------------------Search------------------------------------------------------*/
const courses= [
{name: 'business intelligence'},
{name: 'data analysis'},
{name: 'data science'},
{name: 'digital marketing'},
{name: 'employability skills'},
{name: 'mobile developemen'},
{name: 'project management'},
{name: 'social media marketing'},
{name: 'web development'}
];

const list = document.getElementById('list');

function setList(group){
clearList();
for (const courses of group){
const item =document.createElement('li');
item.classList.add('list-group-item');
const text = document.createTextNode(courses.name);
item.appendChild(text);
list.appendChild(item);
}
if (group.length === 0){
  setNoResults();
}
}

function clearList(){
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
}
function setNoResults(){
  const item =document.createElement('li');
  item.classList.add('list-group-item');
  const text = document.createTextNode('No results found');
  item.appendChild(text);
  list.appendChild(item);
}

function getRelevancy(value, searchTerm){
  if(value === searchTerm){
    return 2;
  }else if (value.startWith(term)){
    return 1;
  }else{
    return 0;
  }
}

const searchInput =document.getElementById('search-input');

searchInput.addEventListener('input', (event) =>{
  let value = event.target.value;
  if(value && value.trim().length > 0){
    value = value.trim().toLowerCase();
    setList(courses.filter(learn =>{
      return learn.name.includes(value);

    }).sort((learnA, learnB) =>{
      return getRelevancy(learnB.name, value)- getRelevancy(learnA.name, value);
    }));
  }else{
    clearList();
  }
})
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