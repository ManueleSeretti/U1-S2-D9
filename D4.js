/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  let area = l1 * l2;
  console.log("l' area del rettangolo è: ", area);
}
area(3, 5);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(n1, n2) {
  let somma = 0;
  if (n1 === n2) {
    somma = (n1 + n2) * 3;
  } else {
    let somma = n1 + n2;
  }
  return somma;
}
let sum = crazySum(3, 3);
console.log(sum);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
  diff = num - 19;
  if (diff > 19) {
    diff = diff * 3;
  }
  return diff;
}
let differenza = crazyDiff(25);
console.log(differenza);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  let bool = null;
  if ((n > 20 && n <= 100) || n === 400) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}
let ris = boundary(200);
console.log(ris);
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(str) {
  let arry = str.split(" ");
  if (arry[0] !== "EPICODE") {
    return "EPICODE " + str;
  }
  return str;
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(val) {
  if (val % 3 === 0 || val % 7 === 0) {
    console.log("il valore è divisibile per 3 o per 7");
  } else {
    console.log("il valore  non  è divisibile per 3 o per 7");
  }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
  let string = str.split("");
  string = string.reverse();
  string = string.join("");
  console.log(string);
}
let parola = "epicode";
reverseString(parola);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) {
  let newString = str.split(" ");

  for (let i = 0; i < newString.length; i++) {
    newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
  }
  newString = newString.join(" ");
  console.log(newString);
}
upperFirst("ciao mi chiamo manuele");
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(str) {
  let i = str.length - 1;
  let newString = str.substring(1, i);
  console.log(newString);
}
cutString("ciao mi chiamo manuele");
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/ function giveMeRandom(n) {
  let arr = [];
  for (i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 11);
  }
  return arr;
}
let lista = giveMeRandom(12);
console.log(lista);

/* SCRIVI QUI LA TUA RISPOSTA */
