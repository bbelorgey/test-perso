
// function dirReduc(arr){
//   let regex = /NORTH SOUTH|SOUTH NORTH|EAST WEST|WEST EAST/gi;
//   let regex2 = /(\s){2}/gi;
//   let regex3 = /^(\s)|(\s)$|^(\s)$/gi;
//     let chaine=arr.join(' ');
//     let longueurInitiale=chaine.length;
//     let longueurCourante = chaine.length;
//     do{
//       longueurInitiale = chaine.length;
//       chaine = chaine.replace(regex,' ');
//       longueurCourante = chaine.length;
//       chaine = chaine.replace(regex2,'');
//     } while(longueurInitiale!==longueurCourante);  
//     chaine = chaine.replace(regex3,'');
//     return chaine?chaine.split(' '):[];
//   }

function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}

  console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
  console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));