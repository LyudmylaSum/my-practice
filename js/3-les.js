// // // // // // "use strict";

// // // // // // /*
// // // // // //  * Функція getUserEmails(users) повертає масив поштових адрес користувачів.
// // // // // //  *   users — масив обʼєктів користувачів.
// // // // // //  * 1. Оголоси getUserEmails як стрілочну функцію.
// // // // // //  * 2. Перебери масив users методом map().
// // // // // //  * 3. У колбеку поверни значення властивості email поточного користувача.
// // // // // //  * 4. Поверни новий масив, який дав map().
// // // // // //  */

// // // // // // const allUsers = [
// // // // // //   {
// // // // // //     name: "Alex",
// // // // // //     email: "alex@indexia.com",
// // // // // //     eyeColor: "blue",
// // // // // //     friends: ["Sam"],
// // // // // //     isActive: false,
// // // // // //     balance: 2811,
// // // // // //     skills: ["html", "css"],
// // // // // //     gender: "male",
// // // // // //     age: 37,
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Nora",
// // // // // //     email: "nora@tubesys.com",
// // // // // //     eyeColor: "blue",
// // // // // //     friends: ["Kim", "Sam"],
// // // // // //     isActive: true,
// // // // // //     balance: 3821,
// // // // // //     skills: ["figma", "html", "css", "testing", "git"],
// // // // // //     gender: "female",
// // // // // //     age: 34,
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Max",
// // // // // //     email: "max@xinware.com",
// // // // // //     eyeColor: "green",
// // // // // //     friends: ["Leo", "Iris", "Kim"],
// // // // // //     isActive: false,
// // // // // //     balance: 3793,
// // // // // //     skills: ["sql", "node", "git", "html", "javascript"],
// // // // // //     gender: "male",
// // // // // //     age: 24,
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Iris",
// // // // // //     email: "iris@omatom.com",
// // // // // //     eyeColor: "green",
// // // // // //     friends: ["Nora", "Leo"],
// // // // // //     isActive: true,
// // // // // //     balance: 2278,
// // // // // //     skills: ["react", "javascript", "css"],
// // // // // //     gender: "female",
// // // // // //     age: 21,
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Sam",
// // // // // //     email: "sam@nurali.com",
// // // // // //     eyeColor: "blue",
// // // // // //     friends: ["Alex", "Max"],
// // // // // //     isActive: true,
// // // // // //     balance: 3951,
// // // // // //     skills: ["git", "node", "sql"],
// // // // // //     gender: "male",
// // // // // //     age: 27,
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Leo",
// // // // // //     email: "leo@furnigeer.com",
// // // // // //     eyeColor: "brown",
// // // // // //     friends: ["Iris", "Kim"],
// // // // // //     isActive: false,
// // // // // //     balance: 1498,
// // // // // //     skills: ["testing", "html", "figma"],
// // // // // //     gender: "male",
// // // // // //     age: 38,
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Kim",
// // // // // //     email: "kim@kog.com",
// // // // // //     eyeColor: "brown",
// // // // // //     friends: ["Nora", "Max"],
// // // // // //     isActive: true,
// // // // // //     balance: 2764,
// // // // // //     skills: ["javascript", "react", "node"],
// // // // // //     gender: "female",
// // // // // //     age: 39,
// // // // // //   },
// // // // // // ];

// // // // // // // Твій код тут
// // // // // // // const getUserEmails = (users) => {
// // // // // // //   return users.map((user) => user.email);
// // // // // // // };
// // // // // // const getUserEmails = (users) => users.map((user) => user.email);

// // // // // // console.log(getUserEmails(allUsers));
// // // // // // // ['alex@indexia.com', 'nora@tubesys.com', 'max@xinware.com',
// // // // // // //  'iris@omatom.com', 'sam@nurali.com', 'leo@furnigeer.com', 'kim@kog.com']
// // // // // "use strict";

// // // // // /*
// // // // //  * Функція getPricesInRange(prices, minPrice, maxPrice) повертає новий масив
// // // // //  * з цін, які входять у діапазон від minPrice до maxPrice включно.
// // // // //  *   prices — масив цін (числа).
// // // // //  *   minPrice, maxPrice — межі діапазону.
// // // // //  * 1. Оголоси getPricesInRange як стрілочну функцію.
// // // // //  * 2. Перебери масив prices методом filter().
// // // // //  * 3. У колбеку поверни true лише для тих цін, які не менші за minPrice
// // // // //  *    і не більші за maxPrice.
// // // // //  * 4. Поверни новий масив, який дав filter().
// // // // //  */

// // // // // const menuPrices = [55, 120, 40, 85, 95, 25, 150];

// // // // // // Твій код тут
// // // // // const getPricesInRange = (prices, minPrice, maxPrice) => {
// // // // //   return prices.filter((price) => price >= minPrice && price <= maxPrice);
// // // // // };

// // // // // console.log(getPricesInRange(menuPrices, 50, 100)); // [55, 85, 95]
// // // // // console.log(getPricesInRange(menuPrices, 25, 45)); // [40, 25]
// // // // // console.log(getPricesInRange(menuPrices, 200, 300)); // []
// // // // "use strict";

// // // // /*
// // // //  * Масив books містить книги з властивостями title, author і rating.
// // // //  * 1. Оголоси змінну topRatedBooks і поклади в неї масив книг,
// // // //  *    рейтинг яких не менший за minRating. Використай метод filter().
// // // //  * 2. Оголоси змінну booksByAuthor і поклади в неї масив книг,
// // // //  *    автор яких збігається зі значенням змінної author.
// // // //  */

// // // // const books = [
// // // //   { title: "Silent Harbor", author: "Alex", rating: 8.38 },
// // // //   { title: "Paper Moons", author: "Nora", rating: 8.51 },
// // // //   { title: "The Glass Garden", author: "Leo", rating: 7.75 },
// // // //   { title: "North of Winter", author: "Kim", rating: 7.94 },
// // // //   { title: "Ashes and Salt", author: "Alex", rating: 8.67 },
// // // // ];

// // // // const minRating = 8;
// // // // const author = "Alex";

// // // // // Твій код тут
// // // // const topRatedBooks = books.filter((book) => book.rating >= minRating);
// // // // const booksByAuthor = books.filter((book) => book.author === author);

// // // // console.log(topRatedBooks);
// // // // // [
// // // // //   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
// // // // //   { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
// // // // //   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 }
// // // // // ]

// // // // console.log(booksByAuthor);
// // // // // [
// // // // //   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
// // // // //   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 }
// // // // // ]
// // // "use strict";

// // // /*
// // //  * Функція getUsersWithEyeColor(users, color) повертає масив користувачів,
// // //  * у яких колір очей збігається зі значенням параметра color.
// // //  *   users — масив обʼєктів користувачів.
// // //  *   color — колір очей (рядок).
// // //  * 1. Оголоси getUsersWithEyeColor як стрілочну функцію.
// // //  * 2. Перебери масив users методом filter().
// // //  * 3. У колбеку поверни true лише для тих користувачів,
// // //  *    у яких властивість eyeColor дорівнює color.
// // //  * 4. Поверни новий масив, який дав filter().
// // //  */

// // // const allUsers = [
// // //   {
// // //     name: "Alex",
// // //     email: "alex@indexia.com",
// // //     eyeColor: "blue",
// // //     friends: ["Sam"],
// // //     isActive: false,
// // //     balance: 2811,
// // //     skills: ["html", "css"],
// // //     gender: "male",
// // //     age: 37,
// // //   },
// // //   {
// // //     name: "Nora",
// // //     email: "nora@tubesys.com",
// // //     eyeColor: "blue",
// // //     friends: ["Kim", "Sam"],
// // //     isActive: true,
// // //     balance: 3821,
// // //     skills: ["figma", "html", "css", "testing", "git"],
// // //     gender: "female",
// // //     age: 34,
// // //   },
// // //   {
// // //     name: "Max",
// // //     email: "max@xinware.com",
// // //     eyeColor: "green",
// // //     friends: ["Leo", "Iris", "Kim"],
// // //     isActive: false,
// // //     balance: 3793,
// // //     skills: ["sql", "node", "git", "html", "javascript"],
// // //     gender: "male",
// // //     age: 24,
// // //   },
// // //   {
// // //     name: "Iris",
// // //     email: "iris@omatom.com",
// // //     eyeColor: "green",
// // //     friends: ["Nora", "Leo"],
// // //     isActive: true,
// // //     balance: 2278,
// // //     skills: ["react", "javascript", "css"],
// // //     gender: "female",
// // //     age: 21,
// // //   },
// // //   {
// // //     name: "Sam",
// // //     email: "sam@nurali.com",
// // //     eyeColor: "blue",
// // //     friends: ["Alex", "Max"],
// // //     isActive: true,
// // //     balance: 3951,
// // //     skills: ["git", "node", "sql"],
// // //     gender: "male",
// // //     age: 27,
// // //   },
// // //   {
// // //     name: "Leo",
// // //     email: "leo@furnigeer.com",
// // //     eyeColor: "brown",
// // //     friends: ["Iris", "Kim"],
// // //     isActive: false,
// // //     balance: 1498,
// // //     skills: ["testing", "html", "figma"],
// // //     gender: "male",
// // //     age: 38,
// // //   },
// // //   {
// // //     name: "Kim",
// // //     email: "kim@kog.com",
// // //     eyeColor: "brown",
// // //     friends: ["Nora", "Max"],
// // //     isActive: true,
// // //     balance: 2764,
// // //     skills: ["javascript", "react", "node"],
// // //     gender: "female",
// // //     age: 39,
// // //   },
// // // ];

// // // // Твій код тут
// // // const getUsersWithEyeColor = (users, color) => {
// // //   return users.filter((user) => user.eyeColor === color);
// // // };

// // // console.log(getUsersWithEyeColor(allUsers, "blue"));
// // // // Масив із трьох користувачів: Alex, Nora, Sam

// // // console.log(getUsersWithEyeColor(allUsers, "green"));
// // // // Масив із двох користувачів: Max, Iris

// // // console.log(getUsersWithEyeColor(allUsers, "red"));
// // // // []
// // "use strict";

// // /*
// //  * Функція getUsersWithAge(users, minAge, maxAge) повертає масив користувачів,
// //  * вік яких потрапляє в діапазон від minAge до maxAge включно.
// //  *   users — масив обʼєктів користувачів.
// //  *   minAge, maxAge — межі діапазону (числа).
// //  * 1. Оголоси getUsersWithAge як стрілочну функцію.
// //  * 2. Перебери масив users методом filter().
// //  * 3. У колбеку поверни true лише для тих користувачів, у яких age
// //  *    не менший за minAge і не більший за maxAge.
// //  * 4. Поверни новий масив, який дав filter().
// //  */

// // const allUsers = [
// //   {
// //     name: "Alex",
// //     email: "alex@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sam"],
// //     isActive: false,
// //     balance: 2811,
// //     skills: ["html", "css"],
// //     gender: "male",
// //     age: 37,
// //   },
// //   {
// //     name: "Nora",
// //     email: "nora@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Kim", "Sam"],
// //     isActive: true,
// //     balance: 3821,
// //     skills: ["figma", "html", "css", "testing", "git"],
// //     gender: "female",
// //     age: 34,
// //   },
// //   {
// //     name: "Max",
// //     email: "max@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Leo", "Iris", "Kim"],
// //     isActive: false,
// //     balance: 3793,
// //     skills: ["sql", "node", "git", "html", "javascript"],
// //     gender: "male",
// //     age: 24,
// //   },
// //   {
// //     name: "Iris",
// //     email: "iris@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Nora", "Leo"],
// //     isActive: true,
// //     balance: 2278,
// //     skills: ["react", "javascript", "css"],
// //     gender: "female",
// //     age: 21,
// //   },
// //   {
// //     name: "Sam",
// //     email: "sam@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Alex", "Max"],
// //     isActive: true,
// //     balance: 3951,
// //     skills: ["git", "node", "sql"],
// //     gender: "male",
// //     age: 27,
// //   },
// //   {
// //     name: "Leo",
// //     email: "leo@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Iris", "Kim"],
// //     isActive: false,
// //     balance: 1498,
// //     skills: ["testing", "html", "figma"],
// //     gender: "male",
// //     age: 38,
// //   },
// //   {
// //     name: "Kim",
// //     email: "kim@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Nora", "Max"],
// //     isActive: true,
// //     balance: 2764,
// //     skills: ["javascript", "react", "node"],
// //     gender: "female",
// //     age: 39,
// //   },
// // ];

// // // Твій код тут
// // const getUsersWithAge = (users, minAge, maxAge) => {
// //   return users.filter((user) => user.age >= minAge && user.age <= maxAge);
// // };

// // console.log(getUsersWithAge(allUsers, 20, 30));
// // // Масив із трьох користувачів: Max, Iris, Sam

// // console.log(getUsersWithAge(allUsers, 30, 40));
// // // Масив із чотирьох користувачів: Alex, Nora, Leo, Kim

// // console.log(getUsersWithAge(allUsers, 80, 100));
// // // []
// "use strict";

// /*
//  * Масив books містить книги з властивостями title, author і rating.
//  * 1. Оголоси змінну bookWithTitle і поклади в неї обʼєкт книги,
//  *    назва якої збігається зі значенням змінної bookTitle.
//  *    Використай метод find().
//  * 2. Оголоси змінну bookByAuthor і поклади в неї обʼєкт книги,
//  *    автор якої збігається зі значенням змінної author.
//  */

// const books = [
//   { title: "Silent Harbor", author: "Alex", rating: 8.38 },
//   { title: "Paper Moons", author: "Nora", rating: 8.51 },
//   { title: "The Glass Garden", author: "Leo", rating: 7.75 },
//   { title: "North of Winter", author: "Kim", rating: 7.94 },
//   { title: "Ashes and Salt", author: "Alex", rating: 8.67 },
// ];

// const bookTitle = "The Glass Garden";
// const author = "Alex";

// // Твій код
// const bookWithTitle = books.find((book) => book.title === bookTitle);
// const bookByAuthor = books.find((book) => book.author === author);

// console.log(bookWithTitle);
// // { title: 'The Glass Garden', author: 'Leo', rating: 7.75 }

// console.log(bookByAuthor);
// // { title: 'Silent Harbor', author: 'Alex', rating: 8.38 }
"use strict";

/*
 * Функція getUserWithEmail(users, email) повертає обʼєкт користувача,
 * пошта якого збігається зі значенням параметра email.
 *   users — масив обʼєктів користувачів.
 *   email — поштова адреса (рядок).
 * 1. Оголоси getUserWithEmail як стрілочну функцію.
 * 2. Перебери масив users методом find().
 * 3. У колбеку поверни true для того користувача, у якого властивість
 *    email дорівнює параметру email.
 * 4. Поверни результат find().
 */

const allUsers = [
  {
    name: "Alex",
    email: "alex@indexia.com",
    eyeColor: "blue",
    friends: ["Sam"],
    isActive: false,
    balance: 2811,
    skills: ["html", "css"],
    gender: "male",
    age: 37,
  },
  {
    name: "Nora",
    email: "nora@tubesys.com",
    eyeColor: "blue",
    friends: ["Kim", "Sam"],
    isActive: true,
    balance: 3821,
    skills: ["figma", "html", "css", "testing", "git"],
    gender: "female",
    age: 34,
  },
  {
    name: "Max",
    email: "max@xinware.com",
    eyeColor: "green",
    friends: ["Leo", "Iris", "Kim"],
    isActive: false,
    balance: 3793,
    skills: ["sql", "node", "git", "html", "javascript"],
    gender: "male",
    age: 24,
  },
  {
    name: "Iris",
    email: "iris@omatom.com",
    eyeColor: "green",
    friends: ["Nora", "Leo"],
    isActive: true,
    balance: 2278,
    skills: ["react", "javascript", "css"],
    gender: "female",
    age: 21,
  },
  {
    name: "Sam",
    email: "sam@nurali.com",
    eyeColor: "blue",
    friends: ["Alex", "Max"],
    isActive: true,
    balance: 3951,
    skills: ["git", "node", "sql"],
    gender: "male",
    age: 27,
  },
  {
    name: "Leo",
    email: "leo@furnigeer.com",
    eyeColor: "brown",
    friends: ["Iris", "Kim"],
    isActive: false,
    balance: 1498,
    skills: ["testing", "html", "figma"],
    gender: "male",
    age: 38,
  },
  {
    name: "Kim",
    email: "kim@kog.com",
    eyeColor: "brown",
    friends: ["Nora", "Max"],
    isActive: true,
    balance: 2764,
    skills: ["javascript", "react", "node"],
    gender: "female",
    age: 39,
  },
];

// Твій код тут
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(allUsers, "kim@kog.com"));
// Обʼєкт користувача Kim

console.log(getUserWithEmail(allUsers, "iris@omatom.com"));
// Обʼєкт користувача Iris

console.log(getUserWithEmail(allUsers, "unknown@mail.com"));
// undefined
