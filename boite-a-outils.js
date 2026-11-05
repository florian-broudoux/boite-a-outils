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


/* Calculateur de pourcentage */

const montantTotal = 250;
const pourcentage = 20;
const montantPourcentage = montantTotal * pourcentage / 100;
console.log("=== Calculateur de pourcentage ===");
console.log(`${pourcentage}% de ${montantTotal} = ${montantPourcentage}`);


/* Calculateur d'IMC */

const poids = 70;
const taille = 1.75;
const imc = poids / (taille * taille);
const imcPlageNormale = imc >= 18.5 && imc <= 25;

console.log("=== Calculateur d'IMC ===");
console.log(`    Poids : ${poids} - Taille : ${taille}
    IMC : ${imc}
    Dans la plage normale (18.5 - 25) : ${imcPlageNormale}`);


/* Mise à jour du compteur de fonction */

nombreFonctions = nombreFonctions + 3;
console.log(`Il y a ${nombreFonctions} outils disponibles dans la boîte à outils.`);
