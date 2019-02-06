// function solution(number){
//   let score=0;
//   let exeption ={
//     CM:900,
//     CD:400,
//     XC:90,
//     XL:40,
//     IX:9,
//     IV:4
//   };
//   let sequences = {
//     M:1000,
//     D:500,
//     C:100,
//     L:50,
//     X:10,
//     V:5,
//     I:1
//   };
//     let chaine = number;
//     let cle = Object.keys(exeption);
//     let valeur = Object.values(exeption);
//     Object.entries(exeption).map(sequence=>{
//       const [cle,valeur] = sequence;
//       let regex = new RegExp(cle);
//       if(regex.test(chaine)) {
//         score += valeur;
//         chaine = chaine.replace(regex,'');
//       }
//     });
//     Object.entries(sequences).map(sequence=>{
//       const [cle,valeur] = sequence;
//       let regex = new RegExp(cle);
//       while(regex.test(chaine)) {
//         score += valeur;
//         chaine = chaine.replace(regex,'');
//       }
//     });

//   return score;
// }

function solution(roman){
  var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
  
  // return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
  console.log(roman.match(/CM|CD|XC|XL|IX|IV|\w/g));

}

console.log(solution('DXCIII'));