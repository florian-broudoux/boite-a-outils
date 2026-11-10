/* CONFIGURATION */

const NOM_OUTIL = "Ma boite à Outils Javascript";
const VERSION = "1.0";
const AUTEUR = "Florian";
const ANNEE = "2026";

/* Compteur de fonctions */

let nombreFonctions = 10;

// FONCTIONS

function convertirCelsiusEnFahreheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function convertirFahrenheitEnCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function verifierParite(nombre) {
    if (nombre % 2 === 0) {
        return "pair";
    } else {
        return "impair";
    }
}

function genererTableMultiplication(nombre) {
    console.log(`=== Table de ${nombre} ===`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${nombre} x ${i} = ${nombre * i}`);
    }
}

function jouerFizzBuzz(limite) {
    for (let i = 1; i <= limite; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

function calculerMoyenne(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme = somme + notes[i];
    }
    return somme / notes.length;
}

function trouverMaximum(nombres) {
    let max = nombres[0];
    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] > max) {
            max = nombres[i];
        }
    }
    return max;
}

function trouverMinimum(nombres) {
  let min = nombres[0];
  for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] < min) {
      min = nombres[i];
    }
  }
  return min;
}

function filtrerNombresPairs(nombres) {
  const pairs = [];  // Nouveau tableau vide
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 === 0) {  // Si le nombre est pair
      pairs.push(nombres[i]);    // On l'ajoute au tableau des pairs
    }
  }
  return pairs;
}

function creerContact(nom, email, telephone) {
    const contact = {
        nom: nom,
        email: email,
        telephone: telephone,
        dateCreation: "2026"
    };
    return contact;
}

function afficherContact(contact) {
    for (let cle in contact) {
        console.log(`${cle} : ${contact[cle]}`);
    }
}

function fusionnerObjets(obj1, obj2) {
    const resultat = {};

    for (let cle in obj1) {
        resultat[cle] = obj1[cle];
    }

    for (let cle in obj2) {
        resultat[cle] = obj2[cle];
    }
    return resultat;
}

function aide() {
    console.log(`=== ${NOM_OUTIL} v${VERSION} — ${nombreFonctions} fonctions ===`);
    console.log("convertirCelsiusEnFahrenheit(celsius) → Convertit °C en °F");
    console.log("convertirFahrenheitEnCelsius(fahrenheit) → Convertit °F en °C");
    console.log("verifierParite(nombre) → Retourne 'pair' ou 'impair'");
    console.log("genererTableMultiplication(nombre) → Affiche la table (1 à 10)");
    console.log("jouerFizzBuzz(limite) → Joue à FizzBuzz de 1 à limite");
    console.log("aide() → Affiche ce menu d'aide");
    console.log("calculerMoyenne(notes) → Calcule la moyenne d'un tableau de notes");
    console.log("trouverMaximum(nombres) → Trouve le plus grand nombre d'un tableau");
    console.log("trouverMinimum(nombres) → Trouve le plus petit nombre d'un tableau");
    console.log("filtrerNombresPairs(nombres) → Filtre un tableau pour ne garder que les nombres pairs");
}


/* Message de bienvenue */

console.log(`
    |--------------------------------------------|
    |    ${NOM_OUTIL} ${VERSION}
    |   Par ${AUTEUR} - ${ANNEE}  
    |--------------------------------------------|
    |   Tapez aide() pour voir les fonctions
    |   ${nombreFonctions} fonctions disponibles
    |--------------------------------------------|
    `);

/* Fiche 7 exo 4

function calculerMoyenne (a, b, c) {
return (a + b + c) / 3;
}

function genererSalutation(prenom, heure) {
    if (heure >= 6 && heure < 12) { return `Bonjour ${prenom} !`; }
    else if (heure >= 12 && heure < 18) { return `Bon après-midi ${prenom} !`; }
    else if (heure >= 18 && heure < 22) { return `Bonsoir ${prenom} !`; }
    return `Bonne nuit ${prenom} !`;
}



ANCIEN CODE MASQUE FICHE 3 A 6


Convertisseur de température (°C -> °F)

const temperatureCelsius = 25;
const temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
console.log("=== Convertisseur de température ===");
console.log(`${temperatureCelsius}°C = ${temperatureFahrenheit}°F`);

Calculateur de pourcentage 

const montantTotal = 250;
const pourcentage = 20;
const montantPourcentage = (montantTotal * pourcentage) / 100;
console.log("=== Calculateur de pourcentage ===");
console.log(`${pourcentage}% de ${montantTotal} = ${montantPourcentage}`);

 Calculateur d'IMC 
const poids = 70;
const taille = 1.75;
const imc = poids / (taille * taille);
const imcPlageNormale = imc >= 18.5 && imc <= 25;

console.log("=== Calculateur d'IMC ===");
console.log(`    Poids : ${poids} - Taille : ${taille}
    IMC : ${imc}
    Dans la plage normale (18.5 - 25) : ${imcPlageNormale}`);

Mise à jour du compteur de fonction 

nombreFonctions = nombreFonctions + 3;
console.log(
    `Il y a ${nombreFonctions} outils disponibles dans la boîte à outils.`,
);

Vérifier si un nombre est pair ou impair

const nombreAVerifier = 84;
if (nombreAVerifier % 2 === 0) {
    console.log(`${nombreAVerifier} est un nombre pair`);
} else {
    console.log(`${nombreAVerifier} est un nombre impair`);
}

Catégoriser un age 

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

Vérifier la force d'un mot de passe 

const motDePasse = "JeSuisUnMDP";
let forceMotDePasse = "";

if (motDePasse.length < 6) {
    forceMotDePasse = "Faible";
} else if (motDePasse.length < 10) {
    forceMotDePasse = "Moyen";
} else {
    forceMotDePasse = "Fort";
}

console.log(
    `Mot de passe : "${"*".repeat(motDePasse.length)}" (${motDePasse.length} caractères)`,
);
console.log(`Force du mot de passe : ${forceMotDePasse}`);

 Table de multiplication 

const nombreTable = 9;
console.log(`=== TABLE DE MULTIPLICATION DE ${nombreTable} ===`);
for (let i = 1; i <= 10; i++) {
    console.log(`${nombreTable} x ${i} = ${nombreTable * i}`);
}
console.log("=====================================");

 Compter les voyelles 

const mot = "javascript";
let voyelles = 0;
for (let i = 0; i < mot.length; i++) {
    const lettre = mot[i];
    if (
        lettre === "a" ||
        lettre === "e" ||
        lettre === "i" ||
        lettre === "o" ||
        lettre === "u"
    ) {
        voyelles++;
    }
}
console.log("=== COMPTEUR DE VOYELLES ===");
console.log(`Mot : "${mot}"`);
console.log(`Nombre de voyelles : ${voyelles}`);
console.log("=============================");

 Motif d'étoiles 

console.log("=== MOTIF D'ÉTOILES ===");
const hauteur = 5;
for (let i = 1; i <= hauteur; i++) {
    let ligne = "";
    for (let j = 1; j <= i; j++) {
        ligne = ligne + "*";
    }
    console.log(ligne);
}
console.log("========================");

FizzBuzz (1 à 30) 

let n = 1;
while (n <= 30) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
    } else if (n % 3 === 0) {
        console.log("Fizz");
    } else if (n % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(n);
    }
    n++;
}

 Deviner un nombre 

let nombreSecret = Math.floor(Math.random() * 50) + 1; // Numero au hasard entre 1 et 50
let tentative = 0;
let essais = 0;

while (tentative !== nombreSecret) {
    tentative = Number(prompt("Devinez le nombre (entre 1 et 50) :"));
    essais++;

    if (tentative < nombreSecret) {
        console.log(`${tentative} → Trop bas !`);
    } else if (tentative > nombreSecret) {
        console.log(`${tentative} → Trop haut !`);
    } else {
        console.log(`${tentative} → Bravo ! Trouvé en ${essais} essai(s) !`);
    }
}

Calculer une puissance sans ** 

// 2 puissance 10
let base = 2;
let exposant = 10;
let resultat = 1;
let compteur = 0;

while (compteur < exposant) {
    resultat = resultat * base;
    compteur++;
    console.log(`Etape ${compteur} : ${base}^${compteur} = ${resultat}`);
}
console.log(`Résultat final : ${base}^${exposant} = ${resultat}`);

// 3 puissance 5
let base2 = 3;
let exposant2 = 5;
let resultat2 = 1;
let compteur2 = 0;

while (compteur2 < exposant2) {
    resultat2 = resultat2 * base2;
    compteur2++;
    console.log(`Etape ${compteur2} : ${base2}^${compteur2} = ${resultat2}`);
}
console.log(`Résultat final : ${base2}^${exposant2} = ${resultat2}`);

FIN DU CODE MASQUE */
