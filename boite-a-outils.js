/* CONFIGURATION */

const NOM_OUTIL = "Ma boite à Outils Javascript";
const VERSION = "1.0";
const AUTEUR = "Florian";
const ANNEE = "2026";

/* Compteur de fonctions */

let nombreFonctions = 0;

/* Message de bienvenue */

console.log(`
    |--------------------------------------------|
    |    ${NOM_OUTIL} ${VERSION}
    |   Par ${AUTEUR} - ${ANNEE}  
    |--------------------------------------------|
    |   Tapez aide pour voir les fonctions
    |   ${nombreFonctions} fonctions disponibles
    |--------------------------------------------|
    `);


/* Convertisseur de température (°C -> °F) */

const temperatureCelsius = 25;
const temperatureFahrenheit = temperatureCelsius * 9 / 5 + 32;
console.log("=== Convertisseur de température ===");
console.log(`${temperatureCelsius}°C = ${temperatureFahrenheit}°F`);
