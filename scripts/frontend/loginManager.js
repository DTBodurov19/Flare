const loginForm = document.getElementById('log-in-form');
const usernameField = document.getElementById('form-username');
const passwordField = document.getElementById('form-password');
const messageElement = document.getElementById('message');
const dispatcherButton = document.querySelector('.dispatcher');
const driverButton = document.querySelector('.driver');
const submitButton = document.querySelector('.login-button');
const accManager = new AccountManager;

function validateForm(accmanager, username, password){
    accmanager.login(username.value, password.value);
}

function grantAccess(activeUser){
    if (activeUser === 'Dispatcher') {
        dispatcherButton.style.display = 'flex';
        submitButton.style.display = 'none';
    }
    else if (activeUser === 'Driver') {
        driverButton.style.display = 'flex';
        submitButton.style.display = 'none';
    }
}

loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    try{
        validateForm(accManager, usernameField, passwordField);
        messageElement.classList.remove('error');
        messageElement.innerHTML = `Logged in as a ${accManager.activeUser.username}`;
        grantAccess(accManager.activeUser.permissions);
        messageElement.style.color = 'white';
    }
    catch (error){
        messageElement.innerHTML = error.message;
        messageElement.style.color = 'red';
    }
    finally {
        usernameField.value = '';
        passwordField.value = ''; 
    }
});