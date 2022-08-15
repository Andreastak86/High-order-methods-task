//Oppgave 1//
console.log('Oppgave 1');
const numbers = [5, 3, 2, 4, 1, 8, 7, 9, 6];
numbers.sort();
console.log(numbers);

//Oppgave 2//
console.log('Oppgave 2');
const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubleNumbers = newNumbers.map((n) => n * 2);
console.log(doubleNumbers);

//Oppgave 3//
console.log('Oppgave 3');
const findEvenNumbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const evenNumbers = findEvenNumbers.filter((n) => n % 2 === 0);
console.log(evenNumbers);
