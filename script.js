//Selectionner tous les elements 
let citation = document.querySelector('#citation');
let auteur = document.querySelector('#auteur');
let btn = document.querySelector('#nouveau');

//Déclaration de variables 
let dernier = 0;
let nombreAleatoire = 0;


btn.addEventListener('click', () => {
    do {
        nombreAleatoire = genererNombreEntier(citations.length);
    } while (nombreAleatoire === dernier);

    citation.textContent = citations[nombreAleatoire][0];
    auteur.textContent = citations[nombreAleatoire][1];
    dernier = nombreAleatoire; //S'assurer que aucune citation ne se repeteras 
    
})

//prend en paramètre le nombre d'éléments dans votre tableau de citations
function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
    /*
    Cette fonction utilise la fonction Math.floor() qui renvoie le plus grand entier qui est inférieur ou égal 
    à un nombre. Par exemple, si je fais Math.floor(5.8), elle me renvoie 5.

    Ici, nous générons donc un nombre aléatoire, par exemple 0.7, que nous multiplions par notre nombre 
    d'éléments. Si j'ai 6 éléments, j'ai donc 0.7 * 6, ce qui fait 4.2. Ma fonction Math.floor() me retournera 
    donc 4. Parfait : nous avons bien notre entier.

    */
  }