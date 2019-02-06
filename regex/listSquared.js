// function listSquared(m) {
//   let diviseurs = [];
//   let diviseur = 1;
//   while(diviseur<=m){
//     console.log(diviseur,m);
//     if(m%diviseur===0){
//       diviseurs = m%diviseur===0?[...diviseurs,diviseur*diviseur]:[...diviseurs];
//       diviseur++;
//     } else {
//       diviseur++;
//     }
//   }
//   diviseurs.reduce((somme,diviseur) => somme+diviseur);
//   return diviseurs;
// }

// Test.assertSimilar(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
console.log(listSquared(42, 250));

function listSquared(m,n) {
  let diviseurs = [];
  let element = [];
  let sommeDiviseurs = 0;
  let diviseur;
  while(m<=n){
    diviseur = 1;
    while(diviseur<=m){
      if(m%diviseur===0){
        sommeDiviseurs += diviseur*diviseur;
      }
      diviseur++;
    }
    if (Number.isInteger(Math.sqrt(sommeDiviseurs))) {
      element = [m,sommeDiviseurs];
      diviseurs.push(element);
      console.log(diviseurs);
    }
    sommeDiviseurs=0;
    m++;
  }
  return diviseurs;
}