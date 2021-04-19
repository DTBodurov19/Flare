let reportFormData;

function fillData(){
    reportFormData = {
        name: {
            fName: document.querySelector('#report-fname').value,
            sName: document.querySelector('#report-sname').value,
            lName: document.querySelector('#report-lname').value
        },
        phoneNumber: document.querySelector('#phone-number').value,
        location: document.querySelector('#location').value,
        info: document.querySelector('#info').value,
        type: document.querySelector('.fire-button').value
    };
}

function checkEmpty() {
    if (reportFormData.name.fName == "") {
        alert("Enter your first name");
        
    }
    else if (reportFormData.name.sName == "") {
        alert("Enter your surname");
    }
    else if (reportFormData.name.lName == "") {
        alert("Enter your last name");
    }
    else if (reportFormData.phoneNumber == "") {
        alert("Enter your phone number");
    }
    else if (reportFormData.location == "") {
        alert("Enter your location");
    }
    else {
        alert("You are all set");
        console.log (reportFormData);
    }
}


reportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fillData();
    checkEmpty();
});