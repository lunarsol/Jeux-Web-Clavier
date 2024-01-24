import { faker } from './node_modules/@faker-js/faker';

function genWords(){
    return faker.word
}
function genSentences(){
    return faker.lorem.sentence
}

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

let boucleStop = limiteBoucleMax(prompt("Voulez-vous une limite de score ? y/n"));

function modeDeJeu(choix) {
    while (choix !== 1 && choix !== 2) {
        if (choix === 1) {
            alert("Vous avez choisi le mode mot");
        } else if (choix === 2) {
            alert("Vous avez choisi le mode phrase");
        } else {
            alert("Le choix n'est pas bon");
        }
    }
}

let choixMode = prompt("Voulez-vous jouer avec des phrases (tapez 2) ou avec des mots (tapez 1)");
choixMode = Number(choixMode);
modeDeJeu(choixMode);

if (Number(choixMode) === 1 || Number(choixMode) === 2) {
    let toursEffectues = 0; // Ajout de cette variable pour compter les tours

    while (toursEffectues < boucleStop) {
        let question, reponse;

        if (Number(choixMode) === 1) {
            mots = genWords()
            question = `Le mot à réécrire est ${mots}`;
            reponse = prompt(question);
        } else if (Number(choixMode) === 2) {
            phrase = genSentences()
            question = `La phrase à réécrire est ${phrase[points]}`;
            reponse = prompt(question);
        }

        if (reponse === (Number(choixMode) === 1 ? mots : phrase[points])) {
            points += 1;
        }

        toursEffectues += 1; // Incrémentation du nombre de tours effectués

        alert(`Votre score est de ${score()}`);
    }

    // Si vous atteignez ce point, cela signifie que la boucle s'est terminée car le nombre de tours est atteint.
} else {
    alert("choixMode invalide");
}