function validateReport(){
    let obj = {
        fName: document.querySelector('#report-fname').value,
        sName: document.querySelector('#report-sname').value,
        lName: document.querySelector('#report-lname').value,
        phoneNumber: document.querySelector('#phone-number').value,
        location: document.querySelector('#location').value,
        info: document.querySelector('#info').value
    };

    return obj;
}

reportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(validateReport());
});