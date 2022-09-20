
let error = [] //array om errors op te slaan


errorArray = () => {

    if (error.length > 0) {document.getElementById("myForm").reset()};

//regex om email validiatie te testen
let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'); //bron: https://stackabuse.com/validate-email-addresses-with-regular-expressions-in-javascript/



//iteratie over radio buttons om te testen of ze geslecteerd zijn 
const payment = document.querySelector('.alert-info');
let radio = document.getElementsByName('Betaling');
for (let i = 0; i < radio.length; i++ ) {
  
        if (radio[i].checked) { //indien 'true' voeg de 'value' toe aan het 'p' element.
        payment.classList.remove('visually-hidden')
        let betalingsElement = document.createElement("p");
        let textToAdd = document.createTextNode(`Je betalingswijze is ${radio[i].value}.`);
        betalingsElement.appendChild(textToAdd); 
        let element = document.querySelector(".alert-info")
        element.appendChild(betalingsElement);
}}


//ophalen van de gebruikersinput uit het formulier
let voornaam = document.querySelector('#inputVoornaam').value;
let naam = document.querySelector('#inputNaam').value;
let gebruiker = document.querySelector('#gebruikersnaam').value;
let email = document.querySelector('#inputEmail').value;
let adres = document.querySelector('#inputadres').value;
let inputLand = document.querySelector('#inputLand').value;
let wachtwoord = document.querySelector('#inputpassword').value;
let check = document.querySelector('#inputCheck').value;
let inputprovincie = document.querySelector('#inputProvincie').value;
let voorwaarden = document.querySelector('#voorwaardenCheck').checked
let postcode = document.querySelector('#inputPostcode').value















//testen van de voorwaarden
if (voornaam.length < 1) {error.push('Het veld voornaam is vereist.')}
if (naam.length < 1) {error.push('Het veld naam is vereist.')}
if (gebruiker.length < 1){error.push('Het veld gebruikersnaam is vereist.')}
if (email.length < 1){error.push('Het veld email is vereist.')}
if (regex.test(email) == false){error.push('Je email is niet correct!')}  // regex.test() bron: https://stackabuse.com/validate-email-addresses-with-regular-expressions-in-javascript/
if ((wachtwoord.length < 8)) {error.push('Het veld wachtwoord is vereist.')}
if ((wachtwoord =! check)) {error.push('Je wachtwoorden komen niet overeen.')}
if (adres.length <= 0){error.push('Adres is vereist.')}
if (inputLand == 'Kies een land'){error.push('Land is vereist.')}
if (inputprovincie == 'Kies een provincie'){error.push('Provincie is vereist.')}
if (postcode < 1000 || postcode > 9999){error.push('De waarde van postcode moet tussen 1000 en 9999 liggen.')}
if (voorwaarden == false){error.push('Je moet de algemene voorwaarden accepteren.')}





}



function errorChecks () {

    const success = document.querySelector('.alert-success');
    const fail = document.querySelector('.alert-danger');
    if (error.length < 1) {success.classList.remove('visually-hidden')}
    
    function betterErrorChecks (a,b) {
        if (a.includes(b)) return fail.classList.remove('visually-hidden')
    
    }
    
    //Vergelijk de array met de voorwaarden.
    betterErrorChecks(error,'Het veld wachtwoord is vereist.')
    betterErrorChecks(error, 'Je wachtwoorden komen niet overeen.')
    betterErrorChecks(error,'Land is vereist.')
    betterErrorChecks(error,'Provincie is vereist.')
    betterErrorChecks(error,'Het veld voornaam is vereist.')
    betterErrorChecks(error,'Het veld naam is vereist.')
    betterErrorChecks(error,'Het veld gebruikersnaam is vereist.')
    betterErrorChecks(error,'Het veld email is vereist.')
    betterErrorChecks(error,'Je email is niet correct!')
    betterErrorChecks(error,'Adres is vereist.')
    betterErrorChecks(error,'Je moet de algemene voorwaarden accepteren.')
    betterErrorChecks(error,'De waarde van postcode moet tussen 1000 en 9999 liggen.')
    }





function appendErrors() {
    //voeg de errors die in de error-array zitten toe aan het 'p' element van de error-alerts
    for (i=0; i<error.length; i++){ 
    let errorElement = document.createElement("p");
    let textToAdd = document.createTextNode(error[i]);
    errorElement.appendChild(textToAdd); 
    let element = document.querySelector(".alert-danger")
    element.appendChild(errorElement);
    //console.log(error[i]) ter controle
    
}}



function SignIn () {
errorArray()
errorChecks()
appendErrors()
}   







//uitvoeren van de SignIn functie als de gebruiker op de knop drukt
document.querySelector('#btn').addEventListener("click", SignIn)
    