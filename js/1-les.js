// // // // // // // // "use strict";

// // // // // // // // /*
// // // // // // // //  * SmileCare складає розклад прийомів на день — по одному слоту на годину.
// // // // // // // //  * Функція getAppointmentSlots(openHour, closeHour) повертає масив слотів
// // // // // // // //  * від години відкриття до години закриття включно.
// // // // // // // //  * 1. Створи порожній масив slots.
// // // // // // // //  * 2. У циклі for пройди по годинах від openHour до closeHour включно.
// // // // // // // //  * 3. На кожній годині додай у slots рядок виду `9:00` методом push()
// // // // // // // //  *    (використай шаблонний рядок).
// // // // // // // //  * 4. Поверни масив slots.
// // // // // // // //  */

// // // // // // // // // Твій код тут
// // // // // // // // function getAppointmentSlots(openHour, closeHour) {
// // // // // // // //   const slots = [];
// // // // // // // //   for (let i = openHour; i <= closeHour; i++) {
// // // // // // // //     slots.push(`${i}`);
// // // // // // // //   }
// // // // // // // //   return slots;
// // // // // // // // }

// // // // // // // // console.log(getAppointmentSlots(9, 12)); // ['9:00', '10:00', '11:00', '12:00']
// // // // // // // // console.log(getAppointmentSlots(14, 16)); // ['14:00', '15:00', '16:00']
// // // // // // // "use strict";

// // // // // // // /*
// // // // // // //  * Функція calculateTotalPrice(order) рахує загальну суму замовлення.
// // // // // // //  *   order — масив цін (числа).
// // // // // // //  * 1. Оголоси змінну total зі значенням 0.
// // // // // // //  * 2. Пройди масив order циклом for.
// // // // // // //  * 3. На кожному кроці додай поточну ціну до total.
// // // // // // //  * 4. Поверни total.
// // // // // // //  */

// // // // // // // // Твій код тут
// // // // // // // function calculateTotalPrice(order) {
// // // // // // //   let total = 0;
// // // // // // //   for (let i = 0; i < order.length; i += 1) {
// // // // // // //     total += order[i];
// // // // // // //   }
// // // // // // //   return total;
// // // // // // // }

// // // // // // // console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// // // // // // // console.log(calculateTotalPrice([164, 48, 291])); // 503
// // // // // // // console.log(calculateTotalPrice([164, 48, 191])); // 503

// // // // // // "use strict";

// // // // // // /*
// // // // // //  * Функція getEvenNumbers(numbers) приймає масив чисел і повертає
// // // // // //  * новий масив, що містить лише парні числа.
// // // // // //  * Парне число ділиться на 2 без остачі (number % 2 === 0).
// // // // // //  * 1. Оголоси порожній масив evenNumbers.
// // // // // //  * 2. Пройди масив numbers циклом for.
// // // // // //  * 3. Якщо поточне число парне — додай його в evenNumbers методом push().
// // // // // //  * 4. Поверни evenNumbers.
// // // // // //  */

// // // // // // // Твій код тут
// // // // // // function getEvenNumbers(numbers) {
// // // // // //   let evenNumbers = [];
// // // // // //   for (let i = 0; i < numbers.length; i += 1) {
// // // // // //     if (numbers[i] % 2 === 0) {
// // // // // //       evenNumbers.push(numbers[i]);
// // // // // //     }
// // // // // //   }
// // // // // //   return evenNumbers;
// // // // // // }

// // // // // // console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
// // // // // // console.log(getEvenNumbers([7, 10, 13, 20])); // [10, 20]
// // // // // // console.log(getEvenNumbers([1, 3, 5])); // []
// // // // // "use strict";

// // // // // /*
// // // // //  * Спільні елементи двох списків — це позиції, що є в обох.
// // // // //  * Кав'ярня перевіряє, які напої зі списку бажань клієнта є в наявності.
// // // // //  * Функція getCommonItems(wishlist, stock) повертає напої, що є в обох списках.
// // // // //  * 1. Оголоси порожній масив commonItems.
// // // // //  * 2. Пройди список wishlist циклом for.
// // // // //  * 3. Якщо поточний напій є в stock (метод includes) — додай його
// // // // //  *    в commonItems методом push.
// // // // //  * 4. Поверни commonItems.
// // // // //  */

// // // // // // Твій код тут
// // // // // function getCommonItems(wishlist, stock) {
// // // // //   let commonItems = [];
// // // // //   for (let i = 0; i < wishlist.length; i++) {
// // // // //     if (stock.includes(wishlist[i])) {
// // // // //       commonItems.push(wishlist[i]);
// // // // //     }
// // // // //   }
// // // // //   return commonItems;
// // // // // }

// // // // // console.log(
// // // // //   getCommonItems(
// // // // //     ["Latte", "Matcha", "Espresso", "Raf"],
// // // // //     ["Espresso", "Americano", "Latte"],
// // // // //   ),
// // // // // ); // ['Latte', 'Espresso']
// // // // // console.log(
// // // // //   getCommonItems(["Cappuccino", "Latte"], ["Latte", "Mocha", "Cappuccino"]),
// // // // // ); // ['Cappuccino', 'Latte']
// // // // // console.log(getCommonItems(["Green", "Black"], ["Herbal", "Matcha"])); // []
// // // // "use strict";

// // // // /*
// // // //  * Функція getBillTotal(prices) рахує загальну суму чека.
// // // //  *   prices — масив цін позицій (числа).
// // // //  * 1. Оголоси змінну total зі значенням 0.
// // // //  * 2. Перебери масив prices циклом for...of.
// // // //  * 3. На кожному кроці додай поточну ціну до total.
// // // //  * 4. Поверни total.
// // // //  */

// // // // // Твій код тут
// // // // function getBillTotal(prices) {
// // // //   let total = 0;
// // // //   for (const price of prices) {
// // // //     total += price;
// // // //   }
// // // //   return total;
// // // // }

// // // // console.log(getBillTotal([45, 30, 25])); // 100
// // // // console.log(getBillTotal([80, 120, 60, 40])); // 300
// // // // console.log(getBillTotal([])); // 0
// // // "use strict";

// // // /*
// // //  * Функція getAverage() приймає будь-яку кількість чисел через arguments
// // //  * і повертає їхнє середнє значення. Усі аргументи — числа.
// // //  * 1. Оголоси змінну sum зі значенням 0.
// // //  * 2. Перебери arguments циклом for...of і додай кожне число до sum.
// // //  * 3. Поверни середнє — суму, поділену на кількість аргументів (arguments.length).
// // //  */

// // // // Твій код тут
// // // function getAverage() {
// // //   let sum = 0;
// // //   for (const arg of arguments) {
// // //     sum += arg;
// // //   }
// // //   return sum / arguments.length;
// // // }

// // // console.log(getAverage(1, 2, 3, 4)); // 2.5
// // // console.log(getAverage(14, 8, 2)); // 8
// // // console.log(getAverage(27, 43, 2, 8, 36)); // 23.2
// // "use strict";

// // /*
// //  * Онлайн-аукціон приймає будь-яку кількість ставок і визначає найвищу.
// //  * Функція getHighestBid() не має параметрів — усі ставки приходять
// //  * через arguments.
// //  * 1. Оголоси змінну highest і поклади в неї першу ставку — arguments[0].
// //  * 2. Перебери arguments циклом for...of.
// //  * 3. Якщо поточна ставка більша за highest — онови highest.
// //  * 4. Поверни highest.
// //  */

// // // Твій код тут
// // function getHighestBid() {
// //   let highest = arguments[0];
// //   for (const arg of arguments) {
// //     if (arg > highest) {
// //       highest = arg;
// //     }
// //   }
// //   return highest;
// // }

// // console.log(getHighestBid(120, 340, 90)); // 340
// // console.log(getHighestBid(50, 45)); // 50
// // console.log(getHighestBid(200)); // 200
// "use strict";

// /*
//  * SmileCare генерує години прийому — від відкриття до закриття.
//  * 1. Оголоси функцію getSlots(openHour, closeHour, step):
//  *    openHour — година відкриття (обов'язковий);
//  *    closeHour — година закриття (обов'язковий);
//  *    step — крок у годинах, за замовчуванням 1.
//  * 2. Створи порожній масив slots.
//  * 3. Цикл for від openHour до closeHour із кроком step — на кожній ітерації
//  *    додай у slots рядок виду `9:00` методом push().
//  * 4. Поверни slots.
//  */

// // Твій код тут
// function getSlots(openHour, closeHour, step = 1) {
//   const slots = [];
//   for (let i = openHour; i <= closeHour; i += step) {
//     slots.push(`${i}`);
//   }
//   return slots;
// }

// console.log(getSlots(9, 12)); // ['9:00', '10:00', '11:00', '12:00']
// console.log(getSlots(9, 17, 2)); // ['9:00', '11:00', '13:00', '15:00', '17:00']
// console.log(getSlots(10, 16, 3)); // ['10:00', '13:00', '16:00']
