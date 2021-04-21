const loginForm = document.getElementById('log-in-form');
const usernameField = document.getElementById('form-username');
const passwordField = document.getElementById('form-password');
const messageElement = document.getElementById('message');
const workersButton = document.querySelector('.dashboard');
const accManager = new AccountManager;

function validateForm(accmanager, username, password){
    accmanager.login(username.value, password.value);
}

function grantAccess(activeUser){
    if(activeUser === 'Dispatcher');
    workersButton.style.display = 'block';
}

loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    try{
        validateForm(accManager, usernameField, passwordField);
        messageElement.classList.remove('error');
        messageElement.innerHTML = `Logged in as a ${accManager.activeUser.username}`;
        grantAccess(accManager.activeUser.permissions);
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

