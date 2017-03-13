/*
    Ecrire une fonction "boostedEvenAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombres PAIRS du tableau

*/

/*      Test 1
    Appel à la fonction "boostedEvenAddition",
    prenant en paramètre le tableau [4, 5, 6],
    et nous attendons comme résultat 10;
*/

boostedEvenAddition([4, 5, 6]);

/*      Test 2
    Appel à la fonction "boostedEvenAddition",
    prenant en paramètre le tableau [1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12],
    et nous attendons comme résultat 44;
*/

boostedEvenAddition([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12]);

//  écrire votre code sous ce commentaire


function isEven(nb){
    var result = nb%2;
    if (result == 0){
        return 1;
    } else {
        return 0;
    }
}


function boostedEvenAddition (array){
    var evenSum = 0;
    for (var i=0; i<array.length ; i++){
        var checkNum = isEven(array[i]);
        if (checkNum == 1){
            evenSum += array[i];
        }
    }
    console.log(evenSum);
    return evenSum;
}
