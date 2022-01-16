// task 6
// function Storage(items) {
//     this.items = items;

// };

// Storage.prototype.getItems = function () {
//     return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//     this.items.push(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//     this.items.splice(this.items.indexOf(item), 1);
// }

// // Пиши код выше этой строки 
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"] 
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"] 
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// task 7
// function StringBuilder(baseValue) {
//     this.value = baseValue;
// }
// StringBuilder.prototype.getValue = function () {
//     return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//     this.value += str;
// };

// StringBuilder.prototype.padStart = function (str) {
//     this.value = str += this.value;
// };
// StringBuilder.prototype.padBoth = function (str) {
//     this.value = str + this.value + str;
// };




// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


