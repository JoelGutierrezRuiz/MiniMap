//play

const playContainer = document.getElementById("main");

//sign in
const signInContainer = document.getElementById("sign-in");
const signInInput = document.getElementById("sign-in-input");
const signInButton = document.getElementById("sign-in-button");
const singInSignUp = document.getElementById("sign-in-sign-up");

//Sign up
const signUpContainer = document.getElementById("sign-up");
const singUpSignIn = document.getElementById("sign-up-sign-in")


if(!localStorage.users){
    localStorage.users = "[]";
}

//showElement(signInContainer);



let allUsers =   JSON.parse(localStorage.users);

let user = {
    "name":"joelo",
    "photo":"https://images.ecestaticos.com/pqIAcGCEagnkjdIBVKVbC9i5FH4=/0x0:1920x1278/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe8e%2Fe27%2F2bf%2Fe8ee272bfd36f69679936351209d708c.jpg",
    "europeBest":2,
    "americaBest":4,
    "asiBest":1,
    "africaBest":5,
    "allBest":12
}

signInButton.addEventListener("click",(e)=>{

    let userName = signInInput.value;

    if(!userName) return;

    if(signIn(userName)){
        hideElement(signInContainer);
        playContainer.style.display="flex"
    }
    else alert("Este usuario no existe")
});

function signIn(userName){
    
    if(allUsers.length==0)return;

    let found = false;
    allUsers.forEach(user => {
        if(userName==user.name){
            found=true;
        }
    });
    return found;
}


singInSignUp.addEventListener("click",()=>{
    hideElement(signInContainer);
    showElement(signUpContainer);
})

singUpSignIn.addEventListener("click",()=>{
    hideElement(signUpContainer);
    showElement(signInContainer);
})


function hideElement(element){
    element.classList.remove("d-flex");
    element.classList.add("d-none");
}

function showElement(element){
    element.classList.remove("d-none");
    element.classList.add("d-flex");
}
