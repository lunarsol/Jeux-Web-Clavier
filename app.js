import {getWords, generateRandomWord} from "./config.js";

const words = await getWords()

let mots
let phrase
let points = 0;

function score() {
    return `Votre Score est de ${points} points`;
}
function limiteBoucleMax(scoreLimite) {
    if (scoreLimite === "y") {
        let limite = parseInt(prompt("Combien de manches voulez-vous ?"));
        if (!isNaN(limite) && limite > 0) {
            return limite;
        } else {
            alert("Vous devez entrer un nombre positif.");
        }
    } else if (scoreLimite === "n") {
        alert("Très bien, vous n'aurez pas de limite !");
        return Infinity;
    } else {
        alert("Vous devez rentrer 'y' ou 'n'");
        // Vous pouvez ajouter une logique pour gérer une nouvelle tentative de saisie si nécessaire.
    }
}
function modeDeJeu() {
    if (document.getElementById("choixMot").value === "on"){
        return "mot"
    }else if (document.getElementById("choixPhrase").value === "on"){
        return "phrase"
    } else if (document.getElementById("choixPhrase").value !== "on" && document.getElementById("choixMot").value !== "on") {
        alert("Vous devez choisir au moins une checkbox");
    }
}

let boucleStop = limiteBoucleMax(prompt("Voulez-vous une limite de round ? y/n"));
let choixMode = modeDeJeu()

if (choixMode === "mot" || choixMode === "phrase") {
    let toursEffectues = 0;

    while (toursEffectues < boucleStop) {
        let question, reponse;

        if (choixMode === "mot") {
            mots = await generateRandomWord(words);
            question = `Le mot à réécrire est ${mots}`;
            reponse = prompt(question);

            if (reponse === mots) {
                points += 1;
            }
        } else if (choixMode === "phrase") {
            phrase = await generateRandomWord(words); // Générer une nouvelle phrase
            question = `La phrase à réécrire est TEST`;
            reponse = prompt(question);

            if (reponse === phrase) {
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