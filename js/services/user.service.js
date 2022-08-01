'use strict'

var gUsers =[]
_createUsers()



function _createUsers() {
    //populate a users array with user objects (gUsers array with 3 users)
const users = [
    _createUser('puki','123456',Date.now(),true),
    _createUser('muki','123456',Date.now(),false),
    _createUser('buki','123456',Date.now(),false)
]

gUsers= users
_saveUsers()

}

function _createUser(username,password,lastLoginTime,isAdmin) {
    var user = {
        id: makeId(),
        username,
        password,
        lastLoginTime,
        isAdmin
    }
    return user
}

function _saveUsers() {
    //saves the users to localStorage
    saveToStorage('usersDB', gUsers)
}

function getUsersToShow() {
    // TODO: returns users by the current sorting
}

function doLogin(username, password) {
    //the function should return the user object if found or null if not
    // If the user successfully log-in, update his lastLoginDate
    // Also save the loggedin User to localStorage
    var user = gUsers.find(user => user.username === username)
    if (!user) return false
    if(user.password === password) {
        user.lastLoginTime = Date.now()
        saveToStorage('loggedInUser', user)
        return true
    }
    return false
}

function currUserIsAdmin(){
    var user = loadFromStorage('loggedInUser')
    return user.isAdmin
}