var jeuMots = ["jouer", "ordinateur", "batterie", "défenestrer", "coucou"];
var randomMots = jeuMots[Math.floor(Math.random() * jeuMots.length)];
var tentatives = 15;
var compteurBon = 0;



for (var i = 0; i < randomMots.length; i ++) { // attribue chaque span pour chaque lettre du mot généré
    var tirets = document.createElement("span");
    tirets.innerHTML = "_";
    tirets.id = i; // attribue un numero d'id a chaque span
    document.body.appendChild(tirets);
}


function afficherlalettre (recupLettre, index) {

    var recupSpan = document.getElementsByTagName("span");

    for (var j = 0; j < recupSpan.length; j++) { // regarde dans toutes mes spans si une lettre lui est attribuée

        if (j == index) {

            recupSpan[j].innerHTML = recupLettre;
        }
    }

    console.log(recupLettre);
    console.log(index);
}



function win (touteSpan, recuplettre) {


        if (compteurBon == randomMots.length) {

            document.getElementById("gagne").innerHTML = "Bravo, vous avez deviné toutes les lettres !" +
                " Un nouveau mot va être généré en cliquant sur le bouton " +
                " suivant ";
            document.getElementById("nextButton").innerHTML = "<button onclick = nextBtn()>Suivant</button>";
        }
    }



function perdu () {

        tentatives = tentatives - 1;
        var nbtentatives = document.createElement("span");
        nbtentatives.innerHTML = "Il vous reste " + tentatives + " tentatives" + "<br>";
        document.body.appendChild(nbtentatives);

            if (tentatives == 0) {
                document.getElementById("perdu").innerHTML = "Vous avez perdu, vous avez épuisé vos tentatives. Le mot a trouver était "
                    + randomMots ;
            }
        }


function nextBtn () {

            window.location.reload(); // refresh la page pour recommencer le jeu.

        }


function verifPendu () {

    var recupLettre = document.getElementById("utilisateur").value;
    var touteSpan = document.getElementsByTagName("span");

    for (var i = 0; i < randomMots.length; i++) { // regarde chaque lettre dans le mot généré.


        if (randomMots[i] == recupLettre) { // demande si une lettre tapée par l'utilisateur se trouve dans le mot.

            document.getElementById("trouve").innerHTML = "Bravo, vous avez trouvé la lettre " + recupLettre + " a la position " + i;
            compteurBon++;

           afficherlalettre(recupLettre, i);

           win(touteSpan, recupLettre);

        }

         if (randomMots.indexOf(recupLettre) == -1 ) {
             document.getElementById("trouve").innerHTML = "non";
        }

        }  perdu();
}

