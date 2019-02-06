// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// function comp(array1, array2){
//   if(array1===null || array2===null) return false;
//   let calcul;
//   array1.forEach(element=>  {
//     index = array2.indexOf(Math.pow(element,2));
//     if(index===-1){
//       return false;
//     }
//     array2.splice(index,1);
//   })
//   if(array2.length===0) return true;
//   return false;
// }

// console.log(comp(a, b));

// var nombres = [4, 2, 5, 1, 3];
// nombres.sort(function(a, b) {
//   return a - b;
// });
// console.log(nombres);

// let Arr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];

// // Arr.sort( (a,b) => a.length - b.length );

// function longestConsec(strarr, k) {
//   if (strarr.length === 0 || k > n || k <= 0) {
//     return "";
//   }
//   let maxLength=0;
//   let longueur=0;
//   let chaine="";
//   let tmp=[];
//   for(let i=0;i+k<=strarr.length;i++){
//     tmp = strarr.slice(i,i+k);
//     longueur=tmp.join('').length;
//     if(longueur>maxLength){
//       chaine=tmp.join('');
//       maxLength=longueur;
//     }
//   }
//   return chaine;
// }

// console.log(longestConsec(Arr, 2));


function dirReduc(arr){
  let regex = /NORTH SOUTH|SOUTH NORTH|EAST WEST|WEST EAST/gi;
  let regex2 = /(\s){2}|^\s|\s$/gi;
    let chaine=arr.join(' ');
    let longueurInitiale=chaine.length;
    let longueurCourante = chaine.length;
    console.log('1',chaine);
    do{
      longueurInitiale = chaine.length;
      chaine = chaine.replace(regex,'');
      console.log('2',chaine);
      longueurCourante = chaine.length;
      chaine.replace(regex2,'');
      console.log('3',chaine);
    } while(longueurInitiale!==longueurCourante);  
    return chaine.split(' ');
  }

  console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));