async function readWordsFromFile(filePath) {
    try {
        const response = await fetch(filePath)
        const content = await response.text()
        return content.split('\n').filter(word => word.trim() !== '');
    } catch (error) {
        console.error('Erreur de lecture du fichier :', error.message);
        return [];
    }
}

export async function generateRandomWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

const filePath = './wordlist.txt';

export async function getWords() {
    try {
        return await readWordsFromFile(filePath);
    } catch (error) {
        console.error('Erreur lors du chargement des mots depuis le fichier :', error.message);
        return [];  // En cas d'erreur, initialisez la liste à une valeur par défaut
    }
}

