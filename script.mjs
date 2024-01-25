import { promises as fsPromises } from 'fs';

async function readWordsFromFile(filePath) {
    try {
        const content = await fsPromises.readFile(filePath, 'utf-8');
        return content.split('\n').filter(word => word.trim() !== '');
    } catch (error) {
        console.error('Erreur de lecture du fichier :', error.message);
        return [];
    }
}
