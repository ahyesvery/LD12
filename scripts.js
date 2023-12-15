function saugotiDuomenis() {
    var vardas = document.getElementById('firstName').value;
    var pavardė = document.getElementById('lastName').value;
    var gimimoData = document.getElementById('birthdate').value;

    var vartotojoInformacija = {
        vardas: vardas,
        pavardė: pavardė,
        gimimoData: gimimoData
    };

    var birthDate = new Date(gimimoData);
    var currentDate = new Date();
    var timePassed = currentDate - birthDate;
    var daysLived = Math.floor(timePassed / (1000 * 60 * 60 * 24));
    var ending;
    var fontSize;
    
    var availableSymbols = /^[a-zA-ZĄąČčĘęĖėĮįŠšŲųŪūŽž]+$/;

    var birthYear = new Date(gimimoData).getFullYear();
    var currentYear = new Date().getFullYear();
    var yearCheck = currentYear - 100;

    if (!availableSymbols.test(vardas)) {
        alert ('Klaida: neleistinas vardo simbolis');
        return;
    }

    if (!availableSymbols.test(pavardė)) {
        alert ('Klaida: neleistinas pavardės simbolis');
        return;
    }

    if (birthYear < yearCheck || birthYear > currentYear) {
        alert ('Klaida: neleistini metai');
        return;
    }

    if (daysLived % 10 == 0) {
        ending = 'dienų';
    } else if (daysLived % 10 == 1) {
        ending = "dieną";
    } else {
        ending = "dienas";
    }

    if (daysLived <= 1000) {
        fontSize = '10px';
    } else if (daysLived > 1000 && daysLived <= 7000) {
        fontSize = '16px';
    } else {
        fontSize = '20px';
    }

    var outputContainer = document.getElementById('output-container');
    outputContainer.innerHTML = `
        <p>${vardas}</p>
        <p>${pavardė}</p>
        <p>${gimimoData}</p>
        <p>${vardas} ${pavardė} nugyveno <span style="font-size: ${fontSize}" id="days-lived">${daysLived}</span> ${ending}</p>
    `;
    outputContainer.style.display = 'block';

    console.log(vartotojoInformacija);
}