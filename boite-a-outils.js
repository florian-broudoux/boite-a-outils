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
const temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
console.log("=== Convertisseur de température ===");
console.log(`${temperatureCelsius}°C = ${temperatureFahrenheit}°F`);

/* Calculateur de pourcentage */

const montantTotal = 250;
const pourcentage = 20;
const montantPourcentage = (montantTotal * pourcentage) / 100;
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
console.log(
    `Il y a ${nombreFonctions} outils disponibles dans la boîte à outils.`,
);

/* Vérifier si un nombre est pair ou impair */

const nombreAVerifier = 84;
if (nombreAVerifier % 2 === 0) {
    console.log(`${nombreAVerifier} est un nombre pair`);
} else {
    console.log(`${nombreAVerifier} est un nombre impair`);
}

/* Catégoriser un age */

const agePersonne = 30;
let categorieAge = "";
if (agePersonne < 0) {
    categorieAge = "âge invalide";
} else if (agePersonne < 12) {
    categorieAge = "enfant";
} else if (agePersonne < 18) {
    categorieAge = "adolescent";
} else if (agePersonne < 65) {
    categorieAge = "adulte";
} else {
    categorieAge = "senior";
}

console.log(`Âge : ${agePersonne} ans - Catégorie: ${categorieAge}`);


/* Vérifier la force d'un mot de passe */

const motDePasse = "JeSuisUnMDP";
let forceMotDePasse = "";

if (motDePasse.length < 6) {
    forceMotDePasse = "Faible";
} else if (motDePasse.length < 10) {
    forceMotDePasse = "Moyen";
} else {
    forceMotDePasse = "Fort";
}

console.log(`Mot de passe : "${"*".repeat(motDePasse.length)}" (${motDePasse.length} caractères)`);
console.log(`Force du mot de passe : ${forceMotDePasse}`);
