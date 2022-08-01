'use strict'
 
var gElLogin = document.querySelector(".login-box")
var gElSecretContent = document.querySelector(".secret-content")
var gElAdminBtn = document.querySelector(".admin-btn")
console.log(gElAdminBtn.classList);

function onInit(){
    gElLogin.classList.remove("hidden")
    gElSecretContent.classList.add("hidden")
}

function onLogin(ev){
    ev.preventDefault()
    const elUsername = document.querySelector('[name=username]')
    const elPassword = document.querySelector('[name=password]')
    var isCorrectPass = doLogin(elUsername.value, elPassword.value)
    if(isCorrectPass){
        var elgreeting = document.querySelector('.greeting')
        elgreeting.innerText = `Welcome back, ${elUsername.value} ! `
        gElLogin.classList.add("hidden")
        gElSecretContent.classList.remove("hidden")
        
        if(currUserIsAdmin()) gElAdminBtn.classList.remove("hidden")
        else gElAdminBtn.classList.add("hidden")
        // console.log(gElAdminBtn.classList);
    }
    else alert('Wrong username or password!')
}

function onLogout(){ 
    onInit()

}