//-------------------------------------//
//----------GLOBALA VARIABLER----------//
//-------------------------------------//

const logo = document.getElementById("logo");
let meny = document.getElementById("meny");
let elHeadline= document.getElementById("elHeadline");
let elLogIn = document.getElementById("elLogIn");
let userInput = document.getElementById("userInput");
let password = document.getElementById("password");
const sendBtn = document.getElementById("sendBtn");
let elForgetMe = document.getElementById("elForgetMe");


const allUsers = [
    {User: "janne", Password: "test"},
    {User: "Calle", Password: "gone_fishing"},
    {User: "Sam", Password: "fraud"},
    {User: "Bulen", Password: "fåglar"}
        
]

console.log("running");


//-------------------------------------//
//--------------FUNKTIONER-------------//
//-------------------------------------//

sendBtn.addEventListener("click", () => { 
    
    let userName = userInput.value; 
    localStorage.setItem("userName", userName);//Sparar userinput i local storage
    elLogIn.style.display = "none"; //Gömmer Välkommen till Jannes verkstad
    elHeadline.innerHTML = "Välkommen " + userName +"!" +" Du är nu inloggad."; //Printar välkomstmedd med username
    printName();
    
});



function printName() { //hämta namnet från ls och printa på sidan
    let userName = localStorage.getItem("userName");
    let forgetButton = document.createElement("button"); //skapa en glömknapp
    elForgetMe.appendChild(forgetButton);
    forgetButton.innerText = "Log out";
    forgetButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        printUnknown();
            })};

function printUnknown () { //Kollar om LS är tomt eller ej och alertar accordingly
    if (localStorage.getItem("userName")) {
        alert("LS har innehåll")} else {
            alert("LS är tomt");
            elLogIn.style.display = "block";
            elHeadline.innerHTML = "Välkommen till jannes verkstad";
            elForgetMe.style.display = "none";
            }
        }; //Skriv ut att vi inte har något namn i LS


