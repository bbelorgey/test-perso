function validBraces(braces){
  if(braces.length===0) return false;
  let regex=/\[\]|\{\}|\(\)/;
  while(regex.test(braces)){
    braces = braces.replace(regex, '');
  };
  return braces.length===0?true:false;
}

console.log(validBraces( "[({})](]" ));
console.log(validBraces( "([{}])" ));