// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"
const notes = [12, 8, 15, 10, 9];
function averageNote(notes) {
// Fonction qui calcule la moyenne et retourne un message selon le résultat
    if (!notes || notes.length === 0) {
        return "Échoué";
    }

    // Somme de toutes les notes
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }

    // Calcul de la moyenne
    const moyenne = somme / notes.length;

    // Affiche la moyenne et le résultat dans la console
    console.log("Moyenne :", moyenne);

    // Retourne "Réussi" ou "Échoué"
    if (moyenne >= 10) {
        return "Réussi";
    } else {
        return "Échoué";
    }
}

// Test d’affichage
console.log(averageNote(notes));

module.exports = {
	averageNote,
};



