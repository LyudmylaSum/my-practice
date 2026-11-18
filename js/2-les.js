// // // // // // // // // // "use strict";

// // // // // // // // // // /*
// // // // // // // // // //  * Обʼєкт coffeeMenu описує меню Sunny Coffee.
// // // // // // // // // //  *   items — масив позицій, де кожна позиція це обʼєкт із властивостями
// // // // // // // // // //  *   name (напій), price (ціна) і stock (кількість на складі).
// // // // // // // // // //  *   getItems() — повертає масив позицій.
// // // // // // // // // //  *   addItem(item) — додає нову позицію в масив.
// // // // // // // // // //  *
// // // // // // // // // //  * Додай в обʼєкт метод changePrice(itemName, newPrice), який:
// // // // // // // // // //  * 1. Перебирає масив позицій через this.items циклом for...of.
// // // // // // // // // //  * 2. Якщо name позиції дорівнює itemName, присвоює її price значення newPrice.
// // // // // // // // // //  */

// // // // // // // // // // const coffeeMenu = {
// // // // // // // // // //   items: [
// // // // // // // // // //     { name: "Latte", price: 85, stock: 12 },
// // // // // // // // // //     { name: "Espresso", price: 60, stock: 30 },
// // // // // // // // // //     { name: "Cappuccino", price: 75, stock: 18 },
// // // // // // // // // //   ],
// // // // // // // // // //   getItems() {
// // // // // // // // // //     return this.items;
// // // // // // // // // //   },
// // // // // // // // // //   addItem(item) {
// // // // // // // // // //     this.items.push(item);
// // // // // // // // // //   },
// // // // // // // // // //   changePrice(itemName, newPrice) {
// // // // // // // // // //     for (const item of this.items) {
// // // // // // // // // //       if (item.name === itemName) {
// // // // // // // // // //         item.price = newPrice;
// // // // // // // // // //       }
// // // // // // // // // //     }
// // // // // // // // // //   },
// // // // // // // // // // };

// // // // // // // // // // // Твій код тут

// // // // // // // // // // coffeeMenu.changePrice("Espresso", 65);

// // // // // // // // // // console.log(coffeeMenu.getItems());
// // // // // // // // // // // [ { name: 'Latte', price: 85, stock: 12 }, { name: 'Espresso', price: 65, stock: 30 }, { name: 'Cappuccino', price: 75, stock: 18 } ]
// // // // // // // // // "use strict";

// // // // // // // // // /*
// // // // // // // // //  * Обʼєкт account описує банківський рахунок.
// // // // // // // // //  * Кожна транзакція — це обʼєкт із властивостями type та amount.
// // // // // // // // //  * Тип транзакції type — це рядок 'deposit' (покласти) або 'withdraw' (зняти).
// // // // // // // // //  * Допиши тіла методів згідно з описом до кожного.
// // // // // // // // //  */
// // // // // // // // // const account = {
// // // // // // // // //   // Поточний баланс рахунку
// // // // // // // // //   balance: 0,

// // // // // // // // //   // Історія транзакцій
// // // // // // // // //   transactions: [],

// // // // // // // // //   /*
// // // // // // // // //    * Додає суму до балансу.
// // // // // // // // //    * Приймає суму amount, додає її до balance,
// // // // // // // // //    * а в transactions додає обʼєкт { type: 'deposit', amount }.
// // // // // // // // //    */
// // // // // // // // //   deposit(amount) {
// // // // // // // // //     this.balance += amount;
// // // // // // // // //     account.transactions.push({ type: "deposit", amount });
// // // // // // // // //   },

// // // // // // // // //   /*
// // // // // // // // //    * Знімає суму з балансу.
// // // // // // // // //    * Якщо amount більший за поточний баланс — виводить повідомлення
// // // // // // // // //    * `Неможливо зняти ${amount}: недостатньо коштів` і нічого не робить.
// // // // // // // // //    * Інакше віднімає amount від balance
// // // // // // // // //    * і додає в transactions обʼєкт { type: 'withdraw', amount }.
// // // // // // // // //    */
// // // // // // // // //   withdraw(amount) {
// // // // // // // // //     if (amount > this.balance) {
// // // // // // // // //       console.log(`Неможливо зняти ${amount}: недостатньо коштів`);
// // // // // // // // //       return;
// // // // // // // // //     }
// // // // // // // // //     this.balance -= amount;
// // // // // // // // //     this.transactions.push({ type: "withdraw", amount });
// // // // // // // // //   },

// // // // // // // // //   // Повертає поточний баланс
// // // // // // // // //   getBalance() {
// // // // // // // // //     return this.balance;
// // // // // // // // //   },

// // // // // // // // //   // Повертає загальну суму транзакцій заданого типу type
// // // // // // // // //   getTransactionTotal(type) {
// // // // // // // // //     let total = 0;
// // // // // // // // //     for (const transaction of this.transactions) {
// // // // // // // // //       if (transaction.type === type) {
// // // // // // // // //         total += transaction.amount;
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //     return total;
// // // // // // // // //   },
// // // // // // // // // };

// // // // // // // // // // Твій код тут

// // // // // // // // // account.deposit(1000);
// // // // // // // // // account.deposit(500);
// // // // // // // // // account.withdraw(300);

// // // // // // // // // console.log(account.getBalance()); // 1200
// // // // // // // // // console.log(account.getTransactionTotal("deposit")); // 1500
// // // // // // // // // console.log(account.getTransactionTotal("withdraw")); // 300

// // // // // // // // // account.withdraw(5000); // Неможливо зняти 5000: недостатньо коштів
// // // // // // // // "use strict";

// // // // // // // // /*
// // // // // // // //  * Функція getExpensivePrices(prices, minPrice) повертає новий масив,
// // // // // // // //  * у якому лише ціни від minPrice і вище.
// // // // // // // //  *   prices — масив цін (числа).
// // // // // // // //  *   minPrice — ціна, з якої послуга вважається дорогою.
// // // // // // // //  * 1. Оголоси змінну expensivePrices з порожнім масивом.
// // // // // // // //  * 2. Перебери масив prices методом forEach().
// // // // // // // //  * 3. У колбеку перевір: якщо поточна ціна не менша за minPrice,
// // // // // // // //  *    додай її до expensivePrices.
// // // // // // // //  * 4. Поверни expensivePrices.
// // // // // // // //  */

// // // // // // // // // Твій код тут
// // // // // // // // function getExpensivePrices(prices, minPrice) {
// // // // // // // //   const expensivePrices = [];
// // // // // // // //   prices.forEach(function (price) {
// // // // // // // //     if (price > minPrice) {
// // // // // // // //       expensivePrices.push(price);
// // // // // // // //     }
// // // // // // // //   });
// // // // // // // //   return expensivePrices;
// // // // // // // // }

// // // // // // // // console.log(getExpensivePrices([320, 750, 180, 1200, 460], 500)); // [750, 1200]
// // // // // // // // console.log(getExpensivePrices([320, 180, 460], 500)); // []
// // // // // // // // console.log(getExpensivePrices([90, 240, 1500, 620], 200)); // [240, 1500, 620]
// // // // // // // "use strict";

// // // // // // // /*
// // // // // // //  * Нижче три функції Sunny Coffee, записані звичайним способом.
// // // // // // //  * Перепиши кожну з них стрілочною функцією, не змінюючи поведінки.
// // // // // // //  * 1. calculateChange(paid, total) — з двома параметрами.
// // // // // // //  * 2. addDeliveryFee(price) — з одним параметром.
// // // // // // //  * 3. showWorkingHours() — без параметрів.
// // // // // // //  * Виклики знизу чіпати не треба: після рефакторингу вони мають
// // // // // // //  * вивести ті самі результати.
// // // // // // //  */

// // // // // // // const calculateChange = (paid, total) => {
// // // // // // //   return paid - total;
// // // // // // // };

// // // // // // // const addDeliveryFee = (price) => {
// // // // // // //   return price + 50;
// // // // // // // };

// // // // // // // const showWorkingHours = () => {
// // // // // // //   console.log("Sunny Coffee: 8:00 - 20:00");
// // // // // // // };

// // // // // // // console.log(calculateChange(200, 135)); // 65
// // // // // // // console.log(addDeliveryFee(300)); // 350
// // // // // // // showWorkingHours(); // Sunny Coffee: 8:00 - 20:00
// // // // // // "use strict";

// // // // // // /*
// // // // // //  * Нижче три стрілочні функції SmileCare з явним поверненням.
// // // // // //  * 1. Перепиши на неявне повернення ті функції, у тілі яких лише вираз,
// // // // // //  *    що повертається.
// // // // // //  * 2. Функцію, у тілі якої є й інші інструкції, залиш без змін.
// // // // // //  * Виклики знизу чіпати не треба: після рефакторингу вони мають
// // // // // //  * вивести ті самі результати.
// // // // // //  */

// // // // // // const calculateVisitsCost = (pricePerVisit, visits) => pricePerVisit * visits;

// // // // // // const getInsuranceCoverage = (price) => price * 0.5;

// // // // // // const getFinalPrice = (price, discount) => {
// // // // // //   const finalPrice = price - discount;
// // // // // //   console.log("Final price: " + finalPrice);
// // // // // //   return finalPrice;
// // // // // // };

// // // // // // console.log(calculateVisitsCost(450, 3)); // 1350
// // // // // // console.log(getInsuranceCoverage(900)); // 450
// // // // // // console.log(getFinalPrice(1200, 300));
// // // // // // // Final price: 900
// // // // // // // 900
// // // // // "use strict";

// // // // // /*
// // // // //  * Функція describeOrder() приймає будь-яку кількість назв напоїв
// // // // //  * і повертає опис замовлення у форматі:
// // // // //  * 'Espresso, Latte, Americano | items: 3'
// // // // //  * тобто назви через кому, потім ' | items: ' і кількість напоїв.
// // // // //  * 1. Оголоси describeOrder як стрілочну функцію.
// // // // //  * 2. Збери всі аргументи в масив drinks через залишкові параметри.
// // // // //  * 3. Поверни рядок цього формату, склавши його шаблонним рядком.
// // // // //  * 4. Використай неявне повернення.
// // // // //  */

// // // // // // Твій код тут
// // // // // const describeOrder = (...drinks) =>
// // // // //   `${drinks.join(", ")} | items: ${drinks.length}`;

// // // // // console.log(describeOrder("Espresso", "Latte", "Americano"));
// // // // // // Espresso, Latte, Americano | items: 3

// // // // // console.log(describeOrder("Cappuccino", "Latte"));
// // // // // // Cappuccino, Latte | items: 2

// // // // // console.log(describeOrder("Espresso"));
// // // // // // Espresso | items: 1
// // // // "use strict";

// // // // /*
// // // //  * Нижче три виклики forEach() зі звичайними функціями-колбеками.
// // // //  * 1. Перепиши кожен колбек стрілочною функцією.
// // // //  * 2. Скороти кожен запис настільки, наскільки дозволяють
// // // //  *    його параметри й тіло.
// // // //  * 3. Вивід у консоль має лишитись тим самим.
// // // //  */

// // // // const services = ["Cleaning", "Whitening", "Filling"];
// // // // const prices = [450, 1200, 800];

// // // // services.forEach((service) => console.log(service));
// // // // // Cleaning
// // // // // Whitening
// // // // // Filling

// // // // prices.forEach((price, index) => console.log(`${index + 1}. ${price} UAH`));
// // // // // 1. 450 UAH
// // // // // 2. 1200 UAH
// // // // // 3. 800 UAH

// // // // prices.forEach((price) => {
// // // //   const priceWithTax = price * 1.2;
// // // //   console.log(priceWithTax);
// // // // });
// // // // // 540
// // // // // 1440
// // // // // 960
// // // "use strict";

// // // /*
// // //  * Функція getDrinkCodes(drinks) повертає новий масив кодів напоїв для каси.
// // //  * Код — це перші три літери назви у верхньому регістрі.
// // //  *   drinks — масив назв напоїв (рядки).
// // //  * 1. Оголоси getDrinkCodes як стрілочну функцію.
// // //  * 2. Перебери масив drinks методом map().
// // //  * 3. У колбеку збережи перші три літери назви у змінну shortName
// // //  *    за допомогою методу slice().
// // //  * 4. Поверни з колбека shortName у верхньому регістрі.
// // //  * 5. Поверни новий масив, який дав map().
// // //  */

// // // // Твій код тут
// // // const getDrinkCodes = (drinks) => {
// // //   const codes = drinks.map((drink) => {
// // //     const shortName = drink.slice(0, 3);
// // //     return shortName.toUpperCase();
// // //   });
// // //   return codes;
// // // };

// // // console.log(getDrinkCodes(["Espresso", "Cappuccino", "Latte"])); // ['ESP', 'CAP', 'LAT']
// // // console.log(getDrinkCodes(["Americano", "Mocha"])); // ['AME', 'MOC']
// // // console.log(getDrinkCodes(["Tea"])); // ['TEA']
// // "use strict";

// // /*
// //  * Функція getPriceList(services) повертає новий масив рядків для прайсу.
// //  *   services — масив обʼєктів з властивостями name і price.
// //  * 1. Оголоси getPriceList як стрілочну функцію.
// //  * 2. Перебери масив services методом map().
// //  * 3. У колбеку поверни рядок у форматі 'Cleaning: 450 UAH'.
// //  * 4. Поверни новий масив, який дав map().
// //  */

// // // Твій код тут
// // const getPriceList = (services) => {
// //   return services.map((servic) => `${servic.name}: ${servic.price} UAH`);
// // };

// // console.log(
// //   getPriceList([
// //     { name: "Cleaning", price: 450 },
// //     { name: "Whitening", price: 1200 },
// //     { name: "Filling", price: 800 },
// //   ]),
// // );
// // // ['Cleaning: 450 UAH', 'Whitening: 1200 UAH', 'Filling: 800 UAH']

// // console.log(
// //   getPriceList([
// //     { name: "Crown", price: 3500 },
// //     { name: "Implant", price: 9000 },
// //   ]),
// // );
// // // ['Crown: 3500 UAH', 'Implant: 9000 UAH']
// const drinks = ["Americano", "Capushino", "Latte"];

// const newDrinks = drinks.map((drink) => {
//   return `${drink} is hot`;
// });
// console.log(newDrinks);
