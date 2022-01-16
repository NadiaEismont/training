// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () { // показывает текущую ступеньку
//         alert(this.step);
//     }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.up().up().down().showStep();

/*
 * Сделайте функцию, которая считает и выводит количество своих вызовов.
 */

// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4

// function getCounter() {
//     let counter = 0;

//     return function Counter() {
//         return (counter += 1);
//     };
// }

// let func = getCounter();
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());


/*
 * Создайте функцию myPassword(password) которая будет хранить
 * внутри password и вернет объект с функцией guessPassword(testPassword), которая
 * вернет true если testPassword и password внутри функции совпадут
 * и false если не совпадут
 */
console.log(testMyPassword.guessPassword('gwegwegw'));
console.log(testMyPassword.guessPassword('myPass'));
console.log(testMyPassword.originalPassword);
