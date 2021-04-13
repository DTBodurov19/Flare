let form = document.getElementById('log-in-form');
let Username = document.getElementById('form-username');
let Password = document.getElementById('form-password');
let messageElement = document.getElementById('message');
let accManager = new AccountManager;

function doForm(accmanager, username, password){
    accmanager.login(username.value, password.value);
    console.log(accManager.activeUser);
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    try{
        doForm(accManager, Username, Password);
    }

    catch(error){
        messagerElement.innerHTML = error;
        console.log(error);
    }

    finally{
        messageElement.innerHTML = 'Logged in as a ' + accManager.activeUser;
        console.log("Logged in successfuly!");
    }

})




