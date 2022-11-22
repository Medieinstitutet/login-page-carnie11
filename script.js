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

sendBtn.addEventListener("click", () => { //Sparar user i local storage
    //console.log(userId.value);
    let userName = userInput.value;
    localStorage.setItem("userName", userName);
    elLogIn.style.display = "none"; 
    elHeadline.innerHTML = "Välkommen " + userName +"!" +" Du är nu inloggad.";
    printName();
    
});

// function whenLoggedIn () {
//     elLogIn.innerHTML = "Välkommen " + userName +"." +" Du är inloggad";
// };

function printName() { //hämta namnet från ls och printa på sidan
    let userName = localStorage.getItem("userName");
    
    let forgetButton = document.createElement("button"); //skapa en glömknapp
    elForgetMe.appendChild(forgetButton);
    forgetButton.innerText = "Log out";
    forgetButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        //printUnknown;
        if (userName) {
            alert("LS har innehåll");
            console.log("LS efter tömning: " +localStorage.value); } else {
                alert("LS är tomt")
                console.log("LS efter tömning: " +localStorage.value);
        };
            })};

// function printUnknown () {
//     if (localStorage.userName) {
//         alert("LS har innehåll")} else {
//             alert("LS är tomt)")}
//         }; //Skriv ut att vi inte har något namn i LS


