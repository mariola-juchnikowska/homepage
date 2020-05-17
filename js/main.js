alert('Takie a`la coockiesy ;)');

//const heading = document.querySelector('.page__content--js');
//console.log(heading);

// heading.innerHTML = ''; //zmieniamy to co jest w html i wstawiamy nową wersję.

//const emptyParagraf = document.querySelector('.week-summary__description--js');

///emptyParagraf.innerHTML = "Uzupelniłam JS-em paragraf:)";

//let name = 'Mariola';
//let age = 28;

//function calculate(myNumber) {
//console.log(`Dostałam ${myNumber}`)
//return myNumber * 7
//}
//let myResult = calculate(age);
//console.log(myResult);

//function greet(age, name) {
//  console.log(`Witaj użytkowniku, nazywam się ${name} i mam ${age} lata.`)
//};
//greet('33', 'kondziu');
//greet(age, name);

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}
createContent('.week-summary__description--js', 'Witajcie');


const greet = (age, name) => {
    console.log(`Witaj użytkowniku, nazywam się ${name} i mam ${age} lat.`);
}