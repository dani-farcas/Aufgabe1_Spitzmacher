document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // Asigură-te că elementele sunt disponibile
    const alterInput = document.getElementById("alter");
    const resultDiv = document.getElementById("result");

    // Verifică dacă input-ul este găsit
    if (alterInput) {
        alterInput.addEventListener("keydown", function(event) {
            console.log("Tasta apăsată: " + event.key); // Afișează cheia apăsată
            if (event.key === "Enter") {
                console.log("Enter a fost apăsat");
                berechneEintrittspreis(); // Apelează funcția
            }
        });
    } else {
        console.log("Elementul 'alter' nu a fost găsit.");
    }
});     


function berechneEintrittspreis() {
    const alter = parseInt(document.getElementById("alter").value);
    const mitBehinderung = document.getElementById("mitBehinderung").checked;
    
    const preise = {
        'mitBehinderung': 8, 
        'unter6': 0, 
        '6bis17': 10, 
        '18bis64': 20, 
        'ab65': 15,
        'unter1': "Try again"
    };
/*
    let preis;
    if (alter < 6) {
        preis = 0;
    } else if (mitBehinderung) {
        preis = preise['mitBehinderung'];
    } else if (alter <= 17) {
        preis = preise['6bis17'];
    } else if (alter <= 64) {
        preis = preise['18bis64'];
    } else {
        preis = preise['ab65'];
    } */

    if (isNaN(alter) || alter <=0) {
        alter("Bitte ein gültiges Alter eingeben.")
    }

        const preis = alter < 6 ? 0 : 
                      mitBehinderung ? preise['mitBehinderung']:
                      alter <= 17 ? preise ['6bis17']:
                      alter <= 64 ? preise ['18bis64']:
                      alter < 1 ? preise ['unter1']: 
                      preise['ab65'];

    document.getElementById("result").innerHTML = `Der Eintrittspreis beträgt ${preis}€`;

}