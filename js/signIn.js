//play

const playContainer = document.getElementById("main");

//sign in
const signInContainer = document.getElementById("sign-in");
const signInInput = document.getElementById("sign-in-input");
const signInButton = document.getElementById("sign-in-button");
const singInSignUp = document.getElementById("sign-in-sign-up");

//Sign up
const signUpContainer = document.getElementById("sign-up");
const signUpSignIn = document.getElementById("sign-up-sign-in")
const signUpButton = document.getElementById("sign-up-button")
const signUpInput = document.getElementById("sign-up-input");



if(!localStorage.users){
    localStorage.users = "[]";
}

//showElement(signInContainer);
ShowPlayContainer()





let allUsers =   JSON.parse(localStorage.users);



signInButton.addEventListener("click",()=>{

    let userName = signInInput.value;

    if(!userName) return;

    if(exist(userName)){
        hideElement(signInContainer);
        ShowPlayContainer();
        return;
    }
    
    alert("Este usuario no existe")
});


signUpButton.addEventListener("click",()=>{

    let userName = signUpInput.value;

    if(exist(userName)){
        alert("this user already exists");
        return
    }

    let user = {
        "name":userName,
        "photo":"https://images.ecestaticos.com/pqIAcGCEagnkjdIBVKVbC9i5FH4=/0x0:1920x1278/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe8e%2Fe27%2F2bf%2Fe8ee272bfd36f69679936351209d708c.jpg",
        "europeBest":0,
        "americaBest":0,
        "asiBest":0,
        "africaBest":0,
        "allBest":0
    }
    allUsers.push(user);
    localStorage.users= JSON.stringify(allUsers);
    hideElement(signUpContainer)
    ShowPlayContainer()

})

function exist(userName){
    
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

signUpSignIn.addEventListener("click",()=>{
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


function ShowPlayContainer(){

    playContainer.style.display = "relative";
    playContainer.style.opacity = "1";

}
