//alert('Takie a`la coockiesy ;)');

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

//function createContent(querySelectorContent, content) {
// const element = document.querySelector(querySelectorContent);
// element.innerHTML = content;
//}
//createContent('.week-summary__description--js', 'Witajcie');


//const greet = (age, name) => {
//  console.log(`Witaj użytkowniku, nazywam się ${name} i mam ${age} lat.`);
//}

//if ('Java' != 'JavaScript') {
// console.log('Java to nie Javascript')
//}

//opartory:
//== - operator porównania z uwazgledniem konwersji 

//=== - z uwzględnienim rozróżniania typów

//typeoff-zmienna

//main__heading--js

//element.addEventListener(type,listener[,options])


//na podstawie kliknięcia w przycisk zmieniamy tresć nagłówka h1, który ma przypisaną klase --js
//const button = document.querySelector('.main__heading--button');
//console.log(button)
//const myClick = () => {
//  const heading = document.querySelector('.main__heading--js');
//heading.innerHTML = 'Co to za dziwny button?';
//heading.classList.add('klasa-z-js');
//}
//button.addEventListener('click', myClick);

//przepis na hamburger menu:
//1. Nawigacja
//2. Style do nawigacji na mobile 
//3. Style do nawigacji na desktop
//4. Przycisk do pokazywania/ukrywania (zmiana klasy)
//5. Kod JS do podpięcia się pod przycisk
//6. Kod JS do zmiany klasy

//element.classList (add, remove, toggle, contains)

//const menu = document.querySelector('.menu--js');
//menu.addEventListener('click', () => {
//  const nav = document.querySelector('.navigation--js')
// nav.classList.toggle('navigation--open');
//})

const name = 'Mariola';
console.log(`${name}`);