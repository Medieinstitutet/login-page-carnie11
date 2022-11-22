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
let demo = document.getElementById("demo");



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
    userChecker();
    
    
});


function userChecker (){ //funktion som loopar arrayen och kollar om input finns i arrayen
    for (i=0; i<allUsers.length; i++) {
    let userName = userInput.value; 

        if (userName === allUsers[i].User) {
            //du finns i registret
            printName();
        break; } else {
                printUnknown()//Du finns inte i registret
            };
        }};


function printName() { //spara namnet i LS, hämta namnet från ls och printa på sidan
    let userName = userInput.value; 
    localStorage.setItem("userName", userName);//Sparar userinput i local storage
    userName = localStorage.getItem("userName");
    elHeadline.innerHTML = "Välkommen " + userName +"!" +" Du är nu inloggad."; //Printar välkomstmedd med username
    elLogIn.style.display = "none"; //Gömmer loginfälten

    let forgetButton = document.createElement("button"); //skapa en glömknapp
    elForgetMe.appendChild(forgetButton);
    forgetButton.innerText = "Log out";
    forgetButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        printLogOut();
            })};

function printLogOut () { //Kollar om LS är tomt eller ej och alertar accordingly
    if (localStorage.getItem("userName")) {
        alert("LS har innehåll")} else {
            alert("LS är tomt");
            elLogIn.style.display = "block";
            elHeadline.innerHTML = "Välkommen till Jannes fräsiga verkstad";
            elForgetMe.style.display = "none";
            }
        }; //Skriv ut att vi inte har något namn i LS

function printUnknown() {
        elHeadline.innerHTML = "Felaktiga uppgifter, försök igen";
        elLogIn.style.display = "block"; //Visar loginfälten

}
