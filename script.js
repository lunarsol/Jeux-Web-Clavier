const mots = ["tekno", "musique", "pomme"]
const phrase = ["La tekno c'est vraiment cool", "J'adore la vie", "La musique est poetique"]
let points = 0

function score(){
    return`Votre Score est de ${points} points`
}
function scoreMax(chiffre) {
    alert(`Vous voulez atteindre ${chiffre} points`);
    let limite = prompt("Voulez-vous un nombre maximal de tours ? y/n");

    while (limite !== "y" && limite !== "n") {
        alert("Vous devez entrer 'y' ou 'n'");
        limite = prompt("Voulez-vous un nombre maximal de tours ? y/n");
    }

    if(limite === "y"){
        return parseInt(prompt("Entre un nombre pour definir la limite "))
    }else if (limite === "n"){
        alert("Tres bien vous n'aurez pas de limite !")
        return Infinity
    } else {
        alert("Vous devez rentrer 'y' ou 'n'")
    }
}
let scoreStop = scoreMax()

function modeDeJeu(choix) {
    while (choix !== 1 && choix !== 2) {
        if (choix === 1) {
            alert("Vous avez choisi le mode mot")
        } else if (choix === 2) {
            alert("Vous avez choisis le mode phrase")
        } else {
            alert("Le choix n'est pas bon")
        }
    }
    return choix
}
let choixMode = modeDeJeu()

if (choixMode === 1 || choixMode === 2) {
    if (scoreStop === Infinity || typeof scoreStop === 'number') {
        while (points < scoreStop) {
            let question, reponse;

            if (choixMode === 1) {
                question = `Le mot à réécrire est ${mots[points]}`;
                reponse = prompt(question);
            } else if (choixMode === 2) {
                question = `La phrase à réécrire est ${phrase[points]}`;
                reponse = prompt(question);
            }

            if (reponse === (choixMode === 1 ? mots[points] : phrase[points])) {
                points += 1;
            }

            alert(`Votre score est de ${score()}`);
        }
    } else {
        alert("scoreStop invalide");
    }
} else {
    alert("choixMode invalide");
}



while (points<3){
    let reponse=prompt(`Le mot a ecrire est ${mots[points]}`)
    if (reponse === mots[points]){
        points+=1
    }
}