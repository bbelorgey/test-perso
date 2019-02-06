var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function countPositivesSumNegatives(input) {
  if(input.length===0) return [];
  let compt1=0;
  let compt2=0;
  input.forEach(elt=>{
    if (elt===0) return [];
    elt>0?compt1=compt1+1:compt2=compt2+elt;
  });
  return [compt1,compt2];
}
console.log(countPositivesSumNegatives(testData));
