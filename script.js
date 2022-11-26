//-------------------------------------//
//----------GLOBALA VARIABLER----------//
//-------------------------------------//

let elHeadline= document.getElementById("elHeadline");
let elLogIn = document.getElementById("elLogIn");
let elForgetMe = document.getElementById("elForgetMe");

let allUsers = [
    {User: "janne", Password: "test"},
    {User: "Calle", Password: "gone_fishing"},
    {User: "Sam", Password: "fraud"},
    {User: "Bulen", Password: "fåglar"}
]


//-------------------------------------//
//-----------------RUN-----------------//
//-------------------------------------//

console.log("running");
checkLocalStorage();



//-------------------------------------//
//--------------FUNKTIONER-------------//
//-------------------------------------//


function checkLocalStorage() {                          //Kollar om någon är inloggad, dvs sparad i LS
    if (localStorage.userName) {
        displayUserInLS ();
    }else{
        skapaLogIn();
    };
}



function skapaLogIn() {                                 //Skapar inputrutor och button för att kunna logga in
    elLogIn.innerHTML = '<input id="userInput" type="text" placeholder="Username"> </input><input id="password" type="text" placeholder="Password"> </input>';
    let sendBtn = document.createElement('button');
    sendBtn.innerText = "Log in";
    elLogIn.appendChild(sendBtn);
    sendBtn.addEventListener("click", () => { 
        userChecker();
    });
}


function displayUserInLS () {                           //Visar vem som är inloggad, dvs sparad i LS
    elHeadline.innerHTML = "Välkommen " + localStorage.getItem("userName") + "!" +" Du är nu inloggad.";
    elLogIn.innerHTML = "";                             //Gömmer loginfälten
    skapaForgetMeBtn();                                 //Skapar logoutbutton
}


function userChecker () {                                //Kollar om användaren redan finns i registret
    let userName = userInput.value;                     //Hämtar de värden som skrivits in
    let passwordInput = password.value;

    for (i=0; i<allUsers.length; i++) {                 //Loopar genom arrayen av registrerade användare
        
        if ((userName == allUsers[i].User) && (passwordInput == allUsers[i].Password)) 
        {printName(userName, passwordInput);            //du finns i registret, skicka med inputvärdena ut ur funktionen
            return;
        } else {                                        //Du finns inte i registret      
            printUnknown()
        };
    };
};

function printName(a,b) {                           //Detta händer om du finns i registret (sparar uppgifter i LS, hämta namnet från ls och printa på sidan )
    let userName = a;                               //Sätter värdet till det som skrivit in vid inlogg
    let passwordInput = b;
    localStorage.setItem("userName", userName);     //Sparar userinput i local storage
    localStorage.setItem("passwordInput", passwordInput); 
    userName = localStorage.getItem("userName");
    passwordInput = localStorage.getItem("passwordInput");
    elHeadline.innerHTML = "Välkommen " + userName + "!" +" Du är nu inloggad."; //Printar välkomstmedd med username
    elLogIn.innerHTML = "";                         //Tar bort loginfälten
    skapaForgetMeBtn();                             //Skapar logoutbutton
};



function skapaForgetMeBtn () {                       //Skapar logout button
    let forgetButton = document.createElement("button"); 
    elForgetMe.appendChild(forgetButton);
    forgetButton.innerText = "Log out";

    forgetButton.addEventListener("click", () => { //Skapar eventlistener
        localStorage.removeItem("userName");        //Tömmer LS
        localStorage.removeItem("passwordInput");
        elHeadline.innerHTML = "Välkommen till Jannes fräsiga verkstad";
        elForgetMe.innerHTML = "";                  //Tar bort logoutbutton
        skapaLogIn();                               //Skapar loginfältet
    });
};



function printUnknown() {   //Detta händer om du inte finns i arrayen
    elHeadline.innerHTML = "Felaktiga uppgifter, försök igen";
    skapaLogIn();
};







