// const x = {
//   value: 0,
//   y(v) {
//     console.log('arguments', arguments);
//     console.log('this', this);
//   }

// }

// const update = function (a, b) {
//   console.log('arguments', arguments);
//   console.log('this', this);
//   b(a);
// }

// // console.log('arguments', arguments);
// console.log('this', this);
// update(10, x.y)



// function includes(array, value) {
//     // Change code below this line
//     for (const check of array) {
//         if (check === value) {
//             return true;
//         }



//     }
//     return false;

//     // Change code above this line
// }


// includes([1, 2, 3, 4, 5], 3)
// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
// includes(['apple', 'plum', 'pear', 'orange'], 'plum')




// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// hotel.address = '1, Beach ave.';
// hotel['manager'] = 'Chuck Norris';

// console.log(hotel.address); // 1, Beach ave.
// console.log(hotel.manager); // Chuck Norris
// console.log(hotel);


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // Change code below this line
// apartment.area = "60";
// apartment.rooms = "3";
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {

//     values.push(apartment[key])
// }


// const houseA = {
//     hight: 12,
//     flats: 70,

//     cost: 100,
// }

// const houseB = {
//     hight: 15,
//     flats: 50,

//     cost: 200,
// }
// const c = {
//     ...houseA, ...houseB,
// };
// console.log(c);


// task 3.18
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line
//     for (let product of products) {

//         if (productName === product.name)
//             return product.price;
//     }
//     return null;

//     // Change code above this line
// }


// task 3.19
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const resalt = [];
//   for (let product of products){ 

//  if(Object.getOwnPropertyNames(product).includes(propName))
//     resalt.push(product[propName]);
//   }
//   return resalt;


//   // Change code above this line
// }
// task 3.25
// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line
// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" },
//     tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
// } = forecast;




// task 3.31
// // Change code below this line
// function add(...args) {
//     // Change code above this line

//     let sum = 0;

//     for (let i = 0, length = args.length; i < length; i++) {
//         if (typeof arguments[i] === 'number') {
//             sum += args[i];
//         }
//     }
//     return sum;
// };

// or
// // Change code below this line
// function add(...args) {
//     // Change code above this line

//     let sum = 0;

//     for (let i = 0, length = args.length; i < length; i++) {
//         {
//             sum += args[i];
//         }
//     }
//     return sum;
// };



// task 3.41
// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     indexOf(newPotionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === newPotionName) {
//                 return i;
//             }
//         }
//         return -1;
//     },
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         if (this.potions.includes(newPotion)) {
//             return `Error! Potion ${newPotion} is already in your inventory!`;
//         }

//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         const potionIndex = this.indexOf(potionName);

//         if (potionIndex === -1) {
//             return `Potion ${potionName} is not in inventory!`;
//         }

//         this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//         const potionIndex = this.indexOf(oldName);

//         if (potionIndex === -1) {
//             return `Potion ${oldName} is not in inventory!`;
//         }

//         this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
// };




// Порахувати суму у масивах.addPotion
// const arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
// console.log(sum);



// TASK 4
/*
 * Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
 * Гласными являются «a», «e», «i», «o», «u».
 */



// const calcTotalPrice = (stones, stoneName) => {
//     const stone = stones[stoneName];
//     if (stone) {
//         return stone.price * stone.quantity;
//     }
//     // if (stones.hasOwnProperty(stoneName)) {
//     //   return stones[stoneName].price * stones[stoneName].quantity;
//     // }
//     // if (stoneName in stones) {
//     //     return stones[stoneName].price * stones[stoneName].quantity;
//     // }
//     // return 'No such stone!';
// };

// const stonesObject = {
//     emerald: { price: 1300, quantity: 4 },
//     diamond: { price: 2700, quantity: 3 },
//     sapphire: { price: 400, quantity: 7 },
//     crushedStone: { price: 200, quantity: 2 },
// };

// console.log(calcTotalPrice(stonesObject, 'emerald')); // 5200
// console.log(calcTotalPrice(stonesObject, 'crushedStone')); // 'No such stone!'


// calcTotalPrice({ a: 1, b: 2 }, 'a')

// stack = { a: 1, b: 2 }, 'a'
// stones, stoneName = stack
// stones, stoneName = { a: 1, b: 2 }, 'a'

// let stones = { a: 1, b: 2 };
// let stoneName = 'a';
// stones[stoneName]

// calcTotalPrice({ a: { price: 1, quantity: 2 }, b: 2 }, 'a') == 2



// /**
//  * Create team
//  */

// const ROLES = {
//   FRONTEND: 'front-end',
//   BACKEND: 'back-end',
//   PM: 'project manager',
// };

// const members = {}; // each member has 'name', 'salary', 'role'

// const createMember = (salary, role) => {
//   if (!Object.values(ROLES).includes(role)) {
//     console.log('invalid role');
//     return;
//   }

//   if (!(salary > 0)) {
//     console.log('invalid salary');
//     return;
//   }

//   return {
//     salary,
//     role,
//   };
// }; //factory

// const addMemberByName = (name, currentMember) => {
//   if (members.hasOwnProperty(name)) {
//     console.log(`${name} exists`);
//     return;
//   }

//   members[name] = currentMember;
// };

// const addMembers = (...freshmens) => {
//   for (let freshmen of freshmens) {
//     const [name, currentMember] = freshmen;
//     addMemberByName(name, currentMember);
//   }
// };

// const removeMemberByName = name => {
//   delete members[name];
// };

// const getMembersCount = () => {
//   return Object.keys(members).length;
// };

// const getTeamCost = () => {
//   const keys = Object.keys(members);
//   let total = 0;
//   for (let key of keys) {
//     total += members[key].salary;
//   }
//   return total;
// }; // all members salaries

// const getAvarageSalary = () => {
//   return getTeamCost() / getMembersCount();
// };

// const removeMembersByRole = role => {
//   const keys = Object.keys(members);
//   for (const key of keys) {
//     if (role === members[key].role) {
//       delete members[key];
//     }
//   }
// };

// //addMembers(['name', createMember(1000, ROLES.BACKEND)], )

// addMemberByName('alex', createMember(1500, ROLES.BACKEND));
// addMembers(
//   ['kriss', createMember(2000, ROLES.FRONTEND)],
//   ['anna', createMember(1800, ROLES.PM)],
//   ['nadia', createMember(2300, ROLES.BACKEND)],
// );

// removeMemberByName('kriss');

// console.log(members);
// console.log(getTeamCost());
// console.log(Math.floor(getAvarageSalary()));
// removeMembersByRole(ROLES.BACKEND);
// console.log(members);
/*
  Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/

// const x = 10;
// /*
//   Global env
//     Record: {x: 10}
//     Parent: null
// */

// const y = 20;
// /*
//   Global env
//     Record: {x: 10, y: 20}
//     Parent: null
// */

// /*
//   Записывается в момент объявления функции
//   [[Environment]] = Global env
// */
// const foo = function (z) {
//     /*
//       Foo env - создается в момент вызова функции
//         Record: {z: 30}
//         Parent: Global env
//     */

//     const x = 100;
//     /*
//       Foo env - создается в момент вызова функции
//         Record: {z: 30, x: 100}
//         Parent: Global env
//     */

//     return x + y + z;
// };

// /*
//   Global env
//     Record: {x: 10, y: 20, foo: <function>}
//     Parent: null
// */

// foo(30); // 150


// function createCounter() {
//   let counter = 0
//   const myFunction = function () {
//     counter = counter + 1
//     return counter

//   }
//   return myFunction

// }
// const increment = createCounter()
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);


// let c = 4
// function addX(x) {
//   return function (n) {
//     return n + x
//   }
// }
// // const addThree = addX(3)
// const addFour = addX(4)
// let d = addFour(c)
// console.log('example partial application', d)

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });


// 4.10
// Задание
// Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики.Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service.Сбор статистики симулируется логированием строки.Разберись и дополни код так, чтобы он работал верно.

//   Тесты
// Объявлена переменная service.
// Значение переменной service это оригинальный объект.
// Объявлена функция logAndInvokeAction(email, action).
// Переменной firstInvoke присвоена строка 'Почта kiwi@mail.uk добавлена в рассылку.'.
// Первый вызов logAndInvokeAction с почтой kiwi@mail.uk и методом service.subscribe привязан к объекту service.
// Переменной secondInvoke присвоена строка 'Почта poly@hotmail.de удалена из рассылки.'.
// Второй вызов logAndInvokeAction с почтой poly@hotmail.de и методом service.unsubscribe привязан к объекту service.


// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']



// task5.16
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if (Car.#MAX_PRICE < price) {
//       return 'Внимание! Цена превышает допустимую.';
//     }
//     return 'Всё хорошо, цена в порядке.';
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//   accessLevel;
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel
//   }
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser


// task 5 / 19
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//   blacklistedEmails = [];
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.indexOf(email) !== -1;
//   }
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 


// const numbers = [3, 6, 10, 56, 22, 0, 13];

// numbers.forEach(function (number, index, array) {
//   console.log('number', number)
//   array[index] = array[index] * 2;
// });
// console.log(numbers);

// numbers[3] = 2

// const numbers = [1, 2, 3, 4, 5];

// const sum_1 = numbers.reduce((acc, n) => acc + n, 0);

// let sum_2 = 0;
// for (const n of numbers) {
//   sum_2 = sum_2 + n;
// }

// console.log(sum_1);
// console.log(sum_2);

// ////

// const twits = [
//   { 'name': 'a', 'tags': ['a', 'b'] },
//   { 'name': 'b', 'tags': ['c', 'b'] },
// ];

// const tagsGetter = array_of_objects_with_tags_property => array_of_objects_with_tags_property.reduce(
//   (tags_accumulator, object_with_tags) => {
//     tags_accumulator.push(...object_with_tags.tags);
//     return tags_accumulator;
//   },
//   []
// )

// const result = tagsGetter(twits);

// // the same logic but simple implementation
// tags_accumulator = []
// for (const object_with_tags of twits) {
//   tags_accumulator.push(...object_with_tags.tags);
// }


// /////
// console.log(tags_accumulator);
// console.log(result);
// 6.9

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newArray = [];
  numbers.forEach(number => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    }
    else (newArray.push(number))
  })


  return newArray;
  // Пиши код выше этой строки
}


const users = [
  { id: 12, tags: [1, 2, 3] },
  { id: 19, tags: [1, 5, 3] },
  { id: 22, tags: [44, 2, 34] }
];
const allTags = users.reduce((acc, user) => [...acc, ...user.tags], []);
const TagsStsts = allTags.reduce((acc, tag) => {
  console.log(acc[tag]);
  return {};
}, {});