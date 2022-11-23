//-------------------------------------//
//----------GLOBALA VARIABLER----------//
//-------------------------------------//

const logo = document.getElementById("logo");
let meny = document.getElementById("meny");
let elHeadline= document.getElementById("elHeadline");
let elLogIn = document.getElementById("elLogIn");
let userInput = document.getElementById("userInput");
let password = document.getElementById("password");
let sendBtn = document.getElementById("sendBtn");
let elForgetMe = document.getElementById("elForgetMe");
let demo = document.getElementById("demo");



const allUsers = [
    {User: "janne", Password: "test"},
    {User: "Calle", Password: "gone_fishing"},
    {User: "Sam", Password: "fraud"},
    {User: "Bulen", Password: "fåglar"}
        
]

console.log("running");
skapaSendBtnEventListener();

//-------------------------------------//
//--------------FUNKTIONER-------------//
//-------------------------------------//

function skapaSendBtnEventListener (){
sendBtn.addEventListener("click", () => { 
    //let userName = userInput.value; 
    userChecker();
})};


// function userChecker (){
//     console.log(i);
//     i++;

//     let person = userInput.value;
//     console.log(person);
    
//     let match = allUsers.find(item => {                 //Alternativ function (.find) i UserChecker
//         if (person == item.User) return true;
//         else return false;
//     });

//     let losenord = password.value;
//     console.log(losenord);
//     let match2 = allUsers.find(item => {
//         if (losenord == item.Password) return true;
//         else return false;
//     });

//     console.log("Det här är vad som finns i match: " + match)
//         if (match && match2) {
//             printName();  
//             exit; 
//         } else {
//                 printUnknown();
//           }             
// };





let j = 1;
function userChecker (){
    console.log("j = " + j);
    j++;
    for (i=0; i<allUsers.length; i++) {
        let userName = userInput.value; 
        console.log(i); // test
        if (userName === allUsers[i].User) {
                //du finns i registret
            printName();
            break; 
        }
        else  {printUnknown()};//Du finns inte i registret
    };
};

function printName() { //spara namnet i LS, hämta namnet från ls och printa på sidan
    console.log("printName");
    let userName = userInput.value; 
    localStorage.setItem("userName", userName);//Sparar userinput i local storage
    userName = localStorage.getItem("userName");
    elHeadline.innerHTML = "Välkommen " + userName +"!" +" Du är nu inloggad."; //Printar välkomstmedd med username
    elLogIn.innerHTML = ""; //Gömmer loginfälten
    skapaForgetMeBtn();
};

function skapaForgetMeBtn () {
    let forgetButton = document.createElement("button"); //skapa en glömknapp
    elForgetMe.appendChild(forgetButton);
    forgetButton.innerText = "Log out";
    forgetButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        elLogIn.innerHTML = '<input id="userInput" type="text" placeholder="Username"> </input><input id="password" type="text" placeholder="Password"> </input><button id="sendBtn">Log in</button><div id=demo></div>';
        elHeadline.innerHTML = "Välkommen till Jannes fräsiga verkstad";
        elForgetMe.innerHTML = "";
        skapaSendBtnEventListener();
        //printLogOut();
    });
};

function printLogOut () { //Kollar om LS är tomt eller ej och alertar accordingly
    if (localStorage.getItem("userName")) {
        alert("LS har innehåll");
    } else {
            alert("LS är tomt");
            
        };
}; //Skriv ut att vi inte har något namn i LS


function printUnknown() {
    console.log("printUnknown");
    elHeadline.innerHTML = "Felaktiga uppgifter, försök igen";
    elLogIn.innerHTML = '<input id="userInput" type="text" placeholder="Username"> </input><input id="password" type="text" placeholder="Password"> </input><button id="sendBtn">Log in</button><div id=demo></div>'; //Visar loginfälten
    skapaSendBtnEventListener();

};







//Inkopierad före ändringar // function userChecker (){ //funktion som loopar arrayen och kollar om inputnamnet finns i arrayen
