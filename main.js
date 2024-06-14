// const random = Math.random()
// const promise = new Promise((resolve,reject) => {
//     random > 0.5 ? resolve("resolved") : reject("rejected")
// })

// const main = async () => {
//     try {
//         const res = await promise
//     console.log(res);
//     } catch (error) {
//         console.error(error , '=> error');
//     }
// }
// main()

// ///////////////////////////////////////////////// ///////////////////////////////////////////////// ///////////////////////////////////////////////
// ///////////////////////////////////////////////// ///////////////////////////////////////////////// ///////////////////////////////////////////////

// const main = async () => {
//   try {
//     const json = await fetch("https://jsonplaceholder.typicode.com/users");
//     const res = await json.json()
//     console.log(res);
//   } catch (error) {
//     console.error(error, "=> error");
//   }
// };
// main()

// ///////////////////////////////////////////////// ///////////////////////////////////////////////// ///////////////////////////////////////////////
// ///////////////////////////////////////////////// ///////////////////////////////////////////////// ///////////////////////////////////////////////

// const main = async () => {
//   const firstPromise = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//     res.json()
//   );
//   const secondPromise = fetch(
//     "https://dummyjson.com/users"
//   ).then((res) => res.json());

//   return Promise.race([firstPromise, secondPromise])
//     .then((res) => console.log(res))
//     .catch((error) => console.error(error, "=> error"));
// };

// main();
