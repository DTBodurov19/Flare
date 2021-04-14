const loginForm = document.getElementById('log-in-form');
const usernameField = document.getElementById('form-username');
const passwordField = document.getElementById('form-password');
const messageElement = document.getElementById('message');
const accManager = new AccountManager;

function validateForm(accmanager, username, password){
    accmanager.login(username.value, password.value);
}

loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    try{
        validateForm(accManager, usernameField, passwordField);
        messageElement.classList.remove('error');
        messageElement.innerHTML = `Logged in as a ${accManager.activeUser.username}`;
    }
    catch (error){
        messageElement.classList.add('error');
        messageElement.innerHTML = error.message;
    }
    finally {
        usernameField.value = '';
        passwordField.value = ''; 
    }
});