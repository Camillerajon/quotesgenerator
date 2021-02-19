var data = [
    "la vie",
    "pour réussir il ne suffit pas de prévoir",
    "si vous pensez que l'aventure est dangereuse",
    "je me disais que pour la séduire",
    "parfois tu as seulement besoin de respirer",
    "accepte ce qui est",
    "c'est comme une bicyclette",
    "il ne suffit pas de prévoir",
    "essayez la routine",
    "je devais la faire rire",
    "de faire confiance à la vie",
    "laisse aller ce qui était",
    "il faut avancer pour ne pas perdre l'équilibre",
    "il faut aussi savoir improviser",
    "elle est mortelle",
    "mais à chaque fois c'est moi qui tombais amoureux",
    "et de lâcher prise",
    "et aie confiance en ce qui sera"
];

/*Permet de générer un id pour chaque ligne du tableau de façon aléatoire*/

function generateId() {
    var id = Math.floor(Math.random() * count());
    // console.log(">>> ID", id);
    return id;
}

//Permet de savoir combien de phrases existe dans la liste pour former des citations/taille du tableau
function count() {
    return data.length;
}

/**
 * la fonction permet de récupérer x nombre de phrases et de les coller ensemble.
 * @param {number} nbSentences
 */
function getSentences(nbSentences) {
    const sentences = [];
    // on va stocker les bouts de phrases aléatoirement récupérés dans ce tableau

    /* Boucle qui permet de déclarer l'indice i, en l'initialisant à zéro,
     * et la boucle va se réexécuter à chaque fois que i est inférieur au nombre de phrases qui peut être généré.
     * i++ = on va rajouter 1 à i à chaque fois que l'on réitère la boucle*/
    for (var i = 0; i < nbSentences; i++) {
        /* ajoute une nouvelle phrase à la fin du tableau "sentences"
         * en prenant toujours des phrases générées aléatoirement avec un nouvel id
         **/
        sentences.push(data[generateId()]);
    }
    /*permet de mettre une virgule entre chaque bout de phrase et un point à la fin de chaque phrase*/
    return capitalize(sentences.join(', ') + '!');

}

//défini que la première lettre est en maj
function capitalize(str) {
    if (typeof str !== 'string') {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Permet de récupérer x nombre de citation avec y nombre de phrases : permet d'obtenir la phrase finale
 * @param {number} nbCitations
 * @param {number} nbSentences
 */

//appel de la fonction getCitations qui correspond à 3 phrases pour faire 1 citation
function getCitations(nbCitations = 1, nbSentences = 3) {

    /*laboucle permet d'initialiser l'index à 0
     * et que la fonction soit réitérée en ajoutant toujours une citations à chaque fois que la fonction est appelée
     **/
    for (var i = 0; i < nbCitations; i++) {
        console.log(getSentences(nbSentences));
    }
}

//Le document HTML est chargé...
document.addEventListener('DOMContentLoaded', function () {


    //On ajoute l'ecouteur sur le bouton//action au moment du click sur le bouton
    var button = document.getElementById('generer');

    button.addEventListener('click', function () {

        //Generation de la citation et modification du champs
        document.getElementById('sentences_field').innerHTML = getSentences(3);
    });


}, false);