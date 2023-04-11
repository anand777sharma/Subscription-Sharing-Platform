var togglelogin = document.getElementById("login");
var togglesignup = document.getElementById("signup");

function pagechange(){
    if(togglesignup.style.display === "block")
    {
        togglelogin.style.display ="block"
        togglesignup.style.display = "none"
    }
    else{
        togglelogin.style.display ="none"
        togglesignup.style.display = "block"
    }
}