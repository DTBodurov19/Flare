const form = document.getElementById('log-in-form');
const Username = document.getElementById('form-username');
const Password = document.getElementById('form-password');
const messageElement = document.getElementById('message');
const accManager = new AccountManager;

function validateForm(accmanager, username, password){
    accmanager.login(username.value, password.value);
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    try{
        validateForm(accManager, Username, Password);
        messageElement.classList.remove('error');
        messageElement.innerHTML = `Logged in as a ${accManager.activeUser}`;
    }
    catch (error){
        messageElement.classList.add('error');
        messageElement.innerHTML = error;
    }
});