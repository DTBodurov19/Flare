let reportFormData;
const FEM = new FireEventsManager;

function fillData(){
    reportFormData = {
        name: `${document.querySelector('#report-fname').value} ` + `${document.querySelector('#report-sname').value} ` + `${document.querySelector('#report-lname').value}`,
        phoneNumber: `${document.querySelector('#phone-number').value}`,
        location: document.querySelector('#location').value,
        long: `${lng}`,
        lat: `${lat}`,
        info: document.querySelector('#info').value,
        type: document.querySelector('.fire-button').value
    };
}

function checkEmpty() {
    if (reportFormData.name == "") {
        alert("Enter your name");
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
    FEM.addNewFireEvent(
        1,
        new Date(),
        [reportFormData.lat, reportFormData.long],
        reportFormData.info,
        reportFormData.phoneNumber,
        reportFormData.name);
    console.log(FEM.fireEvents);
});