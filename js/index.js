//2
// == bu tekshiradi qiyosledi
// === bu esa qatiy tekshirish

//3
// function YangiArray(param) {
//   let result = [];
//   for (let i = 1; i <= param; i++) {
//     result = result + i;
//   }
//   return result;
// }
// console.log(YangiArray(7));

// 4
// let a = [6, 5, 6, 5];
// let toq = 0;
// let juft = 0;
// let result = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     juft = juft + a[i];
//   } else {
//     toq = toq + a[i];
//   }
// }
// result.push(juft, toq);
// console.log(result);

// 5
// function belginiOchir(param) {
//   let result = [];
//   for (let i = 0; i < param.length; i++) {
//     if (param[i] != "!") {
//       result = result + param[i];
//     }
//   }
//   return result;
// }
// console.log(belginiOchir("!3456!7"));

//6
// let a = [6, 5, 6, 5];
// let b = [5, 5, 5, 5];

// let ra = 0;
// let rb = 0;
// let result = [];
// for (let i = 0; i < a.length; i++) {
//   ra = ra + a[i];
// }
// for (let i = 0; i < b.length; i++) {
//   rb = rb + b[i];
// }
// result.push(ra, rb);
// console.log(result);

//7
// function boshiVaOxiri(param) {
//   let result = [];
//   for (let i = 0; i <= param.length - 2; i++) {
//     // console.log(param.length);
//     if (param[i] != param[0] && param[i] != param[param.length]) {
//       result = result + param[i];
//     }
//   }
//   return result;
// }
// console.log(boshiVaOxiri("Bilimm"));

//9
// function Nol(param) {
//   let result = [];
//   for (let i = 0; i < param.length - 1; i++) {
//     if (param[param.length] != "0") {
//       result = result + param[i];
//     }
//   }
//   return result;
// }
// console.log(Nol("Sal0m0"));
