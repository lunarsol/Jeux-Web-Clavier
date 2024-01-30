import {getWords, generateRandomWord} from "./config.js";

const words = await getWords()

let mots
let phrase
let points = 0;

function score() {
    return `Votre Score est de ${points} points`;
}

function limiteBoucleMax() {
    while (true) {
        if (document.querySelector("#boucleStop").checked === true) {
            let limite = Number(document.getElementById("limite").value);
            if (!isNaN(limite) && limite > 0) {
                return limite;
            } else {
                alert("Vous devez entrer un nombre positif.");
                // Demander à nouveau la saisie après l'alerte
            }
        } else if (document.querySelector("#boucleStop").checked === false) {
            alert("Très bien, vous n'aurez pas de limite !");
            return Infinity;
        } else {
            alert("Vous devez rentrer 'on' ou 'off'");
            // Demander à nouveau la saisie après l'alerte
        }
    }
}


function modeDeJeu() {
    if (document.getElementById("choixPhrase").value === "on") {
        return "phrase";
    } else if (document.getElementById("choixMot").value === "on") {
        return "mot";
    } else {
        alert("Vous devez choisir au moins une checkbox");
    }
}

limiteBoucleMax();
let choixMode = modeDeJeu()

if (choixMode === "mot" || choixMode === "phrase") {
    let toursEffectues = 0;

    while (toursEffectues < limiteBoucleMax()) {
        let question, reponse;

        if (choixMode === "mot") {
            mots = await generateRandomWord(words);
            question = `Le mot à réécrire est ${mots}`;
            reponse = prompt(question);

            if (reponse.toLowerCase() === mots.toLowerCase()) {
                points += 1;
            }

        } else if (choixMode === "phrase") {
            phrase = await generateRandomWord(words); // Générer une nouvelle phrase
            question = `La phrase à réécrire est TEST`;
            reponse = prompt(question);

            if (reponse.toLowerCase() === phrase.toLowerCase()) {
                points += 1;
            }

        }

        toursEffectues += 1; // Incrémentation du nombre de tours effectués
        alert(`Votre score est de ${score()}`);
    }

    // Si vous atteignez ce point, cela signifie que la boucle s'est terminée car le nombre de tours est atteint.
} else {
    alert("choixMode invalide");
}