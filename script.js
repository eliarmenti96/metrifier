
document.addEventListener("DOMContentLoaded", () => {
    
    let valueInput = document.getElementById("value");
    let fromUnitSelect = document.getElementById("fromUnit");
    let toUnitSelect = document.getElementById("toUnit");
    let resultElement = document.getElementById("result");
    let convertButton = document.getElementById("convertButton");
    let loadingElement = document.getElementById("loading");
    let categorySelectElement = document.getElementById("categorySelect");
    
    function convertLength(value, fromUnit, toUnit) {
        let meters;
        
        // Conversione di valore in metri
        
        if (fromUnit === "m") {
            meters = value;
        } else if (fromUnit === "dam") { // Decametri //? Sapere a quanti Metri equivalgono n Decametri
            meters = value * 10;
        } else if (fromUnit === "hm") { // Ettometri //? Sapere a quanti Metri equivalgono n Hettometri
            meters = value * 100;
        } else if (fromUnit === "km") { // Kilometri //? Sapere a quanti Metri equivalgono n Kilometri
            meters = value * 1000;
        } else if (fromUnit === "Mm") { // Megametri //? Sapere a quanti Metri equivalgono n Megametri
            meters = value * 1000000;
        } else if (fromUnit === "Gm") { // Gigametri //? Sapere a quanti Metri equivalgono n Gigametri
            meters = value * 1000000000;
        } else if (fromUnit === "Tm") { // Terametri //? Sapere a quanti Metri equivalgono n Terametri
            meters = value * 1000000000000;
        } else if (fromUnit === "dm") { // Decimetri //? Sapere a quanti Metri equivalgono n Decimetri
            meters = value / 10;
        } else if (fromUnit === "cm") { // Centimetri //? Sapere a quanti Metri equivalgono n Centimetri
            meters = value / 100;
        } else if (fromUnit === "mm") { // Millimetri //? Sapere a quanti Metri equivalgono n Millimetri
            meters = value / 1000;
        } else if (fromUnit === "µm") { // Micrometri //? Sapere a quanti Metri equivalgono n Micrometri
            meters = value / 1000000;
        } else if (fromUnit === "nm") { // Nanometri //? Sapere a quanti Metri equivalgono n Nanometri
            meters = value / 1000000000;
        } else if (fromUnit === "pm") { // Picometro //? Sapere a quanti Metri equivalgono n Picometri
            meters = value / 1000000000000;
        } else if (fromUnit === "in") { // Pollici //? Sapere a quanti Metri equivalgono n Pollici
            meters = value * 0.0255;
        } else if (fromUnit === "ft") { // Piedi //? Sapere a quanti Metri equivalgono n Piedi
            meters = value * 0.3048;
        } else if (fromUnit === "yd") { // Iarde //? Sapere a quanti Metri equivalgono n Iarde
            meters = value * 0.9144;
        } else if (fromUnit === "mi") { // Miglia //? Sapere a quanti Metri equivalgono n Miglia
            meters = value * 1609.34;
        } else if (toUnit === "nmi") { // Miglia Nautiche //? Sapere a quanti Metri equivalgono n Miglia Nautiche
            meters = value * 1852;
        }  else {
            return "Unità di partenza non valida";
        }
        
        // Conversione da metri ad un'altra unità di misura
        
        if (toUnit === "m") {
            return parseFloat(meters.toFixed(5));
        } else if (toUnit === "dam") { 
            return parseFloat((meters / 10).toFixed(5)); //? Sapere a quanti Decametri equivalgono n Metri
        } else if (toUnit === "hm") { 
            return parseFloat((meters / 100).toFixed(5)); //? Sapere a quanti Ettometri equivalgono n Metri
        } else if (toUnit === "km") { 
            return parseFloat((meters / 1000).toFixed(5)); //? Sapere a quanti Kilometri equivalgono n Metri
        } else if (toUnit === "Mm") { 
            return parseFloat((meters / 1000000).toFixed(5)); //? Sapere a quanti Megametri equivalgono n Metri
        } else if (toUnit === "Gm") { 
            return parseFloat((meters / 1000000000).toFixed(5)); //? Sapere a quanti Gigametri equivalgono n Metri
        } else if (toUnit === "Tm") { 
            return parseFloat((meters / 1000000000000).toFixed(5)); //? Sapere a quanti Terametri equivalgono n Metri
        } else if (toUnit === "dm") { 
            return parseFloat((meters * 10).toFixed(5)); //? Sapere a quanti Decimetri equivalgono n Metri
        } else if (toUnit === "cm") { 
            return parseFloat((meters * 100).toFixed(5)); //? Sapere a quanti Centimetri equivalgono n Metri
        } else if (toUnit === "mm") { 
            return parseFloat((meters * 1000).toFixed(5)); //? Sapere a quanti Millimetri equivalgono n Metri
        } else if (toUnit === "µm") { 
            return parseFloat((meters * 1000000).toFixed(5)); //? Sapere a quanti Micrometri equivalgono n Metri
        } else if (toUnit === "nm") { 
            return parseFloat((meters * 1000000000).toFixed(5)); //? Sapere a quanti Nanometri equivalgono n Metri
        } else if (toUnit === "pm") { 
            return parseFloat((meters * 1000000000000).toFixed(5)); //? Sapere a quanti Picometri equivalgono n Metri
        } else if (toUnit === "in") { 
            return parseFloat((meters * 39.3701).toFixed(5)); //? Sapere a quanti Pollici equivalgono n Metri
        } else if (toUnit === "ft") { 
            return parseFloat((meters * 3.28084).toFixed(5)); //? Sapere a quanti Piedi equivalgono n Metri
        } else if (toUnit === "yd") { 
            return parseFloat((meters * 1.09361).toFixed(5)); //? Sapere a quante Iarde equivalgono n Metri
        } else if (toUnit === "mi") { 
            return parseFloat((meters * 0.000621371).toFixed(5)); //? Sapere a quante Miglia equivalgono n Metri
        } else if (toUnit === "nmi") { 
            return parseFloat((meters / 1852).toFixed(5)); //? Sapere a quante Miglia Nautiche equivalgono n Metri
        } else {
            return "Unità di destinazione non valida";
        }
        
    }

    function convertCapacity(value, fromUnit, toUnit) {
        let liters;
        
        // Conversione in litri
        
        switch (fromUnit) {
            case "l":   // Litri
            liters = value;
            break;
            case "daL":  // Decalitri
            liters = value * 10;
            break;
            case "hl":  // Ettolitri
            liters = value * 100;
            break;
            case "kL":  // Kilolitri
            liters = value * 1000;
            break;
            case "ML":  // Megalitri
            liters = value * 1000000;
            break;
            case "GL":  // Gigalitri
            liters = value * 1000000000;
            break;
            case "TL":  // Teralitri
            liters = value * 1000000000000;
            break;
            case "dL":  // Decilitri
            liters = value / 10;
            break;
            case "cL":  // Centilitri
            liters = value / 100;
            break;
            case "mL":  // Millilitri
            liters = value / 1000;
            break;
            case "µL":  // Microlitri
            liters = value / 1000000;
            break;
            case "nL":  // Nanolitri
            liters = value / 1000000000;
            break;
            case "pL":  // Picolitri
            liters = value / 1000000000000;
            break;
            case "t":   // Cucchiaino
            liters = value * 0.00492892;
            break;
            case "T":   // Cucchiaio
            liters = value * 0.0147868;
            break;
            case "oz fl": // Oncia fluida
            liters = value * 0.0295735;
            break;
            case "cup":  // Tazza
            liters = value * 0.236588;
            break;
            case "pt":   // Pinta
            liters = value * 0.473176;
            break;
            case "qt":   // Quarto
            liters = value * 0.946353;
            break;
            case "gal":  // Galloni (US)
            liters = value * 3.78541;
            break;
            case "bbl":  // Barile (US)
            liters = value * 158.987;
            break;
            default:
            return "Unità di partenza non valida";
        }
        
        // Conversione da litri all'unità di destinazione
        
        switch (toUnit) {
            case "l":
            return parseFloat(liters.toFixed(5));
            case "daL":
            return parseFloat((liters / 10).toFixed(5));
            case "hl":
            return parseFloat((liters / 100).toFixed(5));
            case "kL":
            return parseFloat((liters / 1000).toFixed(5));
            case "ML":
            return parseFloat((liters / 1000000).toFixed(5));
            case "GL":
            return parseFloat((liters / 1000000000).toFixed(5));
            case "TL":
            return parseFloat((liters / 1000000000000).toFixed(5));
            case "dL":
            return parseFloat((liters * 10).toFixed(5));
            case "cL":
            return parseFloat((liters * 100).toFixed(5));
            case "mL":
            return parseFloat((liters * 1000).toFixed(5));
            case "µL":
            return parseFloat((liters * 1000000).toFixed(5));
            case "nL":
            return parseFloat((liters * 1000000000).toFixed(5));
            case "pL":
            return parseFloat((liters * 1000000000000).toFixed(5));
            case "t":
            return parseFloat((liters / 0.00492892).toFixed(5));
            case "T":
            return parseFloat((liters / 0.0147868).toFixed(5));
            case "oz fl":
            return parseFloat((liters / 0.0295735).toFixed(5));
            case "cup":
            return parseFloat((liters / 0.236588).toFixed(5));
            case "pt":
            return parseFloat((liters / 0.473176).toFixed(5));
            case "qt":
            return parseFloat((liters / 0.946353).toFixed(5));
            case "gal":
            return parseFloat((liters / 3.78541).toFixed(5));
            case "bbl":
            return parseFloat((liters / 158.987).toFixed(5));
            default:
            return "Unità di destinazione non valida";
        }
    }
    
    // conversione in kg
    
    function convertMass(value, fromUnit, toUnit) {
        let kilograms;
        
        switch (fromUnit) {
            case "kg":
            kilograms = value;
            break;
            case "ton":
            kilograms = value * 1000;
            break;
            case "Gg":
            kilograms = value * 1e6;
            break;
            case "Tg":
            kilograms = value * 1e9;
            break; 
            case "Pg":
            kilograms = value * 1e12;
            break;
            case "dag":
            kilograms = value / 10;
            break;
            case "hg":
            kilograms = value / 100;
            break;
            case "g":
            kilograms = value / 1000;
            break;
            case "dg":
            kilograms = value / 1e4;
            break;
            case "cg":
            kilograms = value / 1e5;
            break;
            case "mg":
            kilograms = value / 1e6;
            break;
            case "µg":
            kilograms = value / 1e9;
            break;
            case "ng":
            kilograms = value / 1e12;
            break;
            case "pg":
            kilograms = value / 1e15;
            break;
            case "oz":
            kilograms = value * 35.274;
            break;
            case "l":
            kilograms = value * 2.20462; 
            default:
            break;
        }
        
        // Conversione da chilogrammi all'unità di destinazione
        switch (toUnit) {
            case "Pg":
            return parseFloat((kilograms / 1e15).toFixed(5));
            case "Tg":
            return parseFloat((kilograms / 1e12).toFixed(5));
            case "Gg":
            return parseFloat((kilograms / 1e9).toFixed(5));
            case "ton":
            return parseFloat((kilograms / 1e6).toFixed(5));
            case "kg":
            return parseFloat((kilograms / 1000).toFixed(5));
            case "hg":
            return parseFloat((kilograms / 100).toFixed(5));
            case "dag":
            return parseFloat((kilograms / 10).toFixed(5));
            case "g":
            return parseFloat(kilograms.toFixed(5));
            case "dg":
            return parseFloat((kilograms * 10).toFixed(5));
            case "cg":
            return parseFloat((kilograms * 100).toFixed(5));
            case "mg":
            return parseFloat((kilograms * 1000).toFixed(5));
            case "µg":
            return parseFloat((kilograms * 1e6).toFixed(5));
            case "ng":
            return parseFloat((kilograms * 1e9).toFixed(5));
            case "pg":
            return parseFloat((kilograms * 1e12).toFixed(5));
            case "oz":
            return parseFloat((kilograms / 0.0283495).toFixed(5));
            case "lb":
            return parseFloat((kilograms / 0.453592).toFixed(5));
            default:
            return "Unità di destinazione non valida";
        }
    }
    
    function convertTemperature(value, fromUnit, toUnit) {
        let celsius;
        
        // Conversione del valore in Celsius
        switch (fromUnit) {
            case "°C":  // Celsius
            celsius = value;
            break;
            case "°F":  // Fahrenheit
            celsius = (value - 32) * 5 / 9;
            break;
            case "K":  // Kelvin
            celsius = value - 273.15;
            break;
            default:
            return "Unità di partenza non valida";
        }
        
        // Conversione da Celsius all'unità di destinazione
        switch (toUnit) {
            case "°C":  // Celsius
            return parseFloat(celsius.toFixed(2));
            case "°F":  // Fahrenheit
            return parseFloat((celsius * 9 / 5 + 32).toFixed(2));
            case "K":  // Kelvin
            return parseFloat((celsius + 273.15).toFixed(2));
            default:
            return "Unità di destinazione non valida";
        }
    }
    
    
    /* // Gestione dell'evento quando l'utente clicca il bottone
    convertButton.addEventListener("click", function() {
        let value = parseFloat(valueInput.value);  // Ottieni il valore da convertire
        let fromUnit = fromUnitSelect.value;       // Unità di partenza
        let toUnit = toUnitSelect.value;           // Unità di destinazione
        
        if (isNaN(value)) {
            resultElement.innerText = "Inserisci un valore valido.";
        } else {
            
            // Nasconde il risultato e mostra il caricamento
            resultElement.style.display = 'none';
            loadingElement.style.display = 'block';
            
            setTimeout(() => {
                // Calcola il risultato
                let result = convertLength(value, fromUnit, toUnit);
                
                // Nasconde il caricamento e mostra il risultato
                loadingElement.style.display = 'none';
                resultElement.style.display = 'block';
                resultElement.innerText = `Il risultato è: ${result} ${toUnit}`;
            }, 2000);
        }
    }); */


    convertButton.addEventListener("click", function() {
        let value = parseFloat(valueInput.value);    // Valore da convertire
        let fromUnit = fromUnitSelect.value;         // Unità di partenza
        let toUnit = toUnitSelect.value;             // Unità di destinazione
    
        // Validazione dell'input
        if (isNaN(value)) {
            resultElement.innerText = "Inserisci un valore valido.";
            return;
        }
        
        // Nasconde il risultato e mostra il caricamento
        resultElement.style.display = 'none';
        loadingElement.style.display = 'block';
    
        setTimeout(() => {
            let result;
    
            // Determina automaticamente la funzione di conversione in base alle unità
            if (["Tm", "m", "km", "cm", "mm"].includes(fromUnit)) {  // Lunghezza
                result = convertLength(value, fromUnit, toUnit);
            } else if (["kg", "g", "lb", "oz"].includes(fromUnit)) {  // Massa
                result = convertMass(value, fromUnit, toUnit);
            } else if (["l", "ml", "gal"].includes(fromUnit)) {  // Capacità
                result = convertCapacity(value, fromUnit, toUnit);
            } else if (["°C", "°F", "K"].includes(fromUnit)) {  // Temperatura
                result = convertTemperature(value, fromUnit, toUnit);
            } else {
                resultElement.innerText = "Unità non supportata.";
                loadingElement.style.display = 'none';
                resultElement.style.display = 'block';
                return;
            }
    
            // Nasconde il caricamento e mostra il risultato
            loadingElement.style.display = 'none';
            resultElement.style.display = 'block';
            resultElement.innerText = `Il risultato è: ${result} ${toUnit}`;
        }, 2000);  // Simula un ritardo di 2 secondi per elaborazione
    });
    
    
    
    




























    
    
    /* function showConversionSection() {
    // Ottengo il valore (opzione) derivante dal menù a tendina
    let selectedValue = categorySelectElement.value;
    
    valueInput.style.display = 'block';
    btnSectionDiv.style.display = 'block';
    phrase.style.display = 'block';
    
    // Nascondo sia h3 che menù a tendina
    initialMessageDiv.style.display = 'none';
    categorySelectElement.style.display = 'none';
    
    // Nascondo le sezioni di conversione
    fromUnitLength.style.display = 'none'; 
    toUnitLength.style.display = 'none';
    fromUnitCapacity.style.display = 'none';
    toUnitCapacity.style.display = 'none';
    fromUnitMass.style.display = 'none';
    toUnitMass.style.display = 'none';
    fromUnitTemperature.style.display = 'none';
    toUnitTemperature.style.display = 'none';
    
    
    // Mostro la schermata in base alla grandezza fisica scelta
    switch (selectedValue) {
    case "length":
    fromUnitLength.style.display = 'block';
    toUnitLength.style.display = 'block';
    break;
    case "capacity":
    fromUnitCapacity.style.display = 'block';
    toUnitCapacity.style.display = 'block';
    break;
    case "mass":
    fromUnitMass.style.display = 'block';
    toUnitMass.style.display = 'block';
    break;
    case "temperature":
    fromUnitTemperature.style.display = 'block';
    toUnitTemperature.style.display = 'block';
    break;
    default:
    break;
    }
    } 
    
    physicalQuantitySelect.addEventListener("change", showConversionSection); */
    
});












/* physicalQuantitySelect.addEventListener("change", function() {
const selectedValue = physicalQuantitySelect.value;

// Nasconde il menu a tendina
selectionSection.style.display = "none";

// Mostra la sezione di conversione
conversionSection.style.display = "block";

// Modifica il titolo della conversione in base alla scelta
switch (selectedValue) {
case "length":
conversionTitle.innerText = "Convertitore di Lunghezza";
break;
case "capacity":
conversionTitle.innerText = "Convertitore di Capacità";
break;
case "mass":
conversionTitle.innerText = "Convertitore di Massa";
break;
case "temperature":
conversionTitle.innerText = "Convertitore di Temperatura";
break;
default:
conversionTitle.innerText = "Convertitore";
}
}); */
