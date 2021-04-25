let reportFormData;
const fireEventManager = new FireEventsManager(localStorage);
const fireSizeButtons = document.getElementsByName('fire');
    

function getActiveFireButton(){
    let checkedButton;
    fireSizeButtons.forEach(radio =>{
        if(radio.checked)
        {
            checkedButton = +radio.value;
        }
    });

    return checkedButton;
}

function fillData(){
    reportFormData = {
        name: `${document.querySelector('#report-fname').value} ` + `${document.querySelector('#report-sname').value} ` + `${document.querySelector('#report-lname').value}`,
        phoneNumber: `${document.querySelector('#phone-number').value}`,
        location: document.querySelector('#location').value,
        long: `${lng}`,
        lat: `${lat}`,
        info: document.querySelector('#info').value,
        type: getActiveFireButton()
    };
}

function checkEmpty() {
    if (reportFormData.name === "  ") {
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
    fireEventManager.addNewFireEvent(
        getActiveFireButton(),
        new Date(),
        [reportFormData.lat, reportFormData.long],
        reportFormData.info,
        reportFormData.phoneNumber,
        reportFormData.name);
    console.log(fireEventManager.fireEvents);
});