//-------------------------------------//
//----------GLOBALA VARIABLER----------//
//-------------------------------------//

const logo = document.getElementById("logo");
let elHeadline= document.getElementById("elHeadline");
let elLogIn = document.getElementById("elLogIn");
//let userInput = document.getElementById("userInput");
//let password = document.getElementById("password");
//let sendBtn = document.getElementById("sendBtn");
let elForgetMe = document.getElementById("elForgetMe");
let demo = document.getElementById("demo");



const allUsers = [
    {User: "janne", Password: "test"},
    {User: "Calle", Password: "gone_fishing"},
    {User: "Sam", Password: "fraud"},
    {User: "Bulen", Password: "fåglar"}
        
]

console.log("running");
skapaLogIn();

function skapaLogIn() {
    elLogIn.innerHTML = '<input id="userInput" type="text" placeholder="Username"> </input><input id="password" type="text" placeholder="Password"> </input><div id=demo></div>';
    let sendBtn = document.createElement('button');
    sendBtn.innerText = "Log in";
    elLogIn.appendChild(sendBtn);
    sendBtn.addEventListener("click", () => { 
        userChecker();
    });
}

//-------------------------------------//
//--------------FUNKTIONER-------------//
//-------------------------------------//




let j = 1;
function userChecker (){
    console.log("j = " + j);
    j++;
    let userName = userInput.value; 
    let passwordInput = password.value;

    for (i=0; i<allUsers.length; i++) {
        
        console.log(i); // test
        if ((userName == allUsers[i].User) && (passwordInput == allUsers[i].Password)) 
        // if (userName && passwordInput === allUsers[i])
        {
        printName(userName, passwordInput); //du finns i registret
            return;
        } 
        else  {
            console.log(userName + " är inte " + allUsers[i].User);
            printUnknown()
        };//Du finns inte i registret  
    };
};

function printName(a,b) { 
    console.log(a);         // = //du finns i registret! 
                        //sparar uppgifter i LS, hämta namnet från ls och printa på sidan
    console.log("printName");
    //let userName1 = userInput.value; 
    let userName1 = a; 
    let passwordInput = b;
    console.log("namnet var " +userName1);
    localStorage.setItem("userName1", userName1);//Sparar userinput i local storage
    localStorage.setItem("passwordInput", passwordInput);
    userName1 = localStorage.getItem("userName1");
    passwordInput = localStorage.getItem("passwordInput");
    elHeadline.innerHTML = "Välkommen " + userName1 + "!" +" Du är nu inloggad."; //Printar välkomstmedd med username
    elLogIn.innerHTML = ""; //Gömmer loginfälten
    skapaForgetMeBtn();
};

function skapaForgetMeBtn () {
    let forgetButton = document.createElement("button"); //skapa en glömknapp
    elForgetMe.appendChild(forgetButton);
    forgetButton.innerText = "Log out";
    forgetButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("passwordInput");
        elHeadline.innerHTML = "Välkommen till Jannes fräsiga verkstad";
        elForgetMe.innerHTML = "";
        skapaLogIn();
    });
};

// function printLogOut () { //Kollar om LS är tomt eller ej och alertar accordingly
//     if (localStorage.getItem("userName")) {
//         alert("LS har innehåll");
//     } else {
//             alert("LS är tomt");
            
//         };
// }; //Skriv ut att vi inte har något namn i LS


function printUnknown() {   //Du finns inte i registret!
    console.log("printUnknown");
    elHeadline.innerHTML = "Felaktiga uppgifter, försök igen";
    skapaLogIn();
};







//Inkopierad före ändringar // function userChecker (){ //funktion som loopar arrayen och kollar om inputnamnet finns i arrayen
// function skapaSendBtnEventListener (){
// sendBtn.addEventListener("click", () => { 
//     //let userName = userInput.value; 
//     userChecker();
// })};


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