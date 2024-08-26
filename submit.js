
document.querySelector(".contact__form").addEventListener("submit", valider); /* if sumidt call valider function*/

function valider(evt) {
    const error = document.querySelector(".error");
    let fullname = this.fullname.value; /*her this  means er form*/
    if (fullname === "") {   /* === samme værdi, samme data type*/ /* ""   its means tom     empty*/
        evt.preventDefault(); /* stop submit*/
        this.fullname.focus(); /*focus på full name*/
        error.textContent = "Skriv dit fulde navn!";
        error.style.display = "block";
        this.fullname.style.color = "#fff";
        this.fullname.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else {
        error.textContent = "";
        this.fullname.style.color = "#000";
        this.fullname.style.backgroundColor = "#fff";
        error.style.display = "none";
    }

    // email validering, skal udfyldes og skal matche regular expression for en email
    const regxp_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let email = this.email.value;
    if (email == "") {
        evt.preventDefault();
        this.email.focus();
        error.textContent = "Indtast din email!";
        error.style.display = "block";
        this.email.style.color = "#fff";
        this.email.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else if (!regxp_email.test(email)) {
        evt.preventDefault();
        this.email.focus();
        error.textContent = "Din email skal indeholde bogstaver - @ - bogstaver - . - bogstaver (test@mail.dk)";
        error.style.display = "block";
        this.email.style.color = "#fff";
        this.email.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else {
        error.textContent = "";
        this.email.style.color = "#000";
        this.email.style.backgroundColor = "#fff";
        error.style.display = "none";
    }








 }