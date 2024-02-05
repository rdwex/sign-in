// callbacks

// function getPizza(callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pizza`);
//   xhr.send();
//   xhr.addEventListener("readystatechange", function () {
//     if (xhr.readyState == 4) {
//       console.log(JSON.parse(xhr.responseText));
//       console.log("========PIZZA==========");
//       callback();
//     }
//   });
// }
// function getSalad(callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://forkify-api.herokuapp.com/api/search?q=salad`);
//   xhr.send();
//   xhr.addEventListener("readystatechange", function () {
//     if (xhr.readyState == 4) {
//       console.log(JSON.parse(xhr.responseText));
//       console.log("========SALAD==========");
//       callback();
//     }
//   });
// }
// function getPasta(callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://forkify-api.herokuapp.com/api/search?q=salad`);
//   xhr.send();
//   xhr.addEventListener("readystatechange", function () {
//     if (xhr.readyState == 4) {
//       console.log(JSON.parse(xhr.responseText));
//       console.log("========Pasta==========");
//       callback();
//     }
//   });
// }

// function hello() {
//   console.log("========HELLO==========");
// }

// getPasta(function () {
//   getPizza(function () {
//     getSalad(function () {
//       hello();
//     });
//   });
// });

// callbacks hell

// callbacks
// promise
// async

/////////////////////////////////////////////////////////////////////////////

// promise

// function getPizza(callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pizza`);
//   xhr.send();
//   xhr.addEventListener("readystatechange", function () {
//     if (xhr.readyState == 4) {
//       console.log(JSON.parse(xhr.responseText));
//       console.log("========PIZZA==========");
//       callback();
//     }
//   });
// }
// function getSalad() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://forkify-api.herokuapp.com/api/search?q=salad`);
//   xhr.send();
//   xhr.addEventListener("readystatechange", function () {
//     if (xhr.readyState == 4) {
//       console.log(JSON.parse(xhr.responseText));
//       console.log("========SALAD==========");
//     }
//   });
// }
// function getPasta() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://forkify-api.herokuapp.com/api/search?q=salad`);
//   xhr.send();
//   xhr.addEventListener("readystatechange", function () {
//     if (xhr.readyState == 4) {
//       console.log(JSON.parse(xhr.responseText));
//       console.log("========Pasta==========");
//     }
//   });
// }

// function hello() {
//   console.log("========HELLO==========");
// }

// getPasta(function () {

// });
// getSalad();
// getPizza();
// hello();

// async

// function getPizza(callback) {
//   return new Promise(function () {
//     var xhr = new XMLHttpRequest();
// xhr.open("GET", `https://forkify-api.herokuapp.com/api/search?q=pizza`);
//     xhr.send();
//     xhr.addEventListener("readystatechange", function () {
//       if (xhr.readyState == 4) {
//         console.log(JSON.parse(xhr.responseText));
//         console.log("========PIZZA==========");
//         callback();
//       }
//     });
//   });
// }
// function getSalad(callback) {
//   return new Promise(function () {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", `https://forkify-api.herokuapp.com/api/search?q=salad`);
//     xhr.send();
//     xhr.addEventListener("readystatechange", function () {
//       if (xhr.readyState == 4) {
//         console.log(JSON.parse(xhr.responseText));
//         console.log("========SALAD==========");
//         callback();
//       }
//     });
//   });
// }
// function getPasta(callback) {
//   return new Promise(function () {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", `https://forkify-api.herokuapp.com/api/search?q=salad`);
//     xhr.send();
//     xhr.addEventListener("readystatechange", function () {
//       if (xhr.readyState == 4) {
//         console.log(JSON.parse(xhr.responseText));
//         console.log("========Pasta==========");
//         callback();
//       }
//     });
//   });
// }

// function hello() {
//   console.log("========HELLO==========");
//   return new Promise(function () {
//     console.log("========HELLO==========");
//   });
// }
// async function test() {
//   await getPasta();
//   await getSalad();
//   await getPizza();
//   await hello();
// }
// test();
