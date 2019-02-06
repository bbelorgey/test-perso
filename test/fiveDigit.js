function controle(str){
  let i=0;
  while(i<str.length-1){
    if((eval(str.charAt(i))!==eval(str.charAt(i+1))-1 )
      ||
      (eval(str.charAt(i))===9 && eval(str.charAt(i+1))!==0 )) return false;
    i++;
  }
  return true;
}


function solution(digits){
  let max=0;
  let lg=5;
  let tmp='';
  for(let i=0;i<digits.length-lg+1;i++){
    tmp=digits.slice(i, i+lg);
    if(eval(tmp)>max && controle(tmp)) max=eval(tmp);
    console.log(max);
  }
  return max;
}

  console.log(solution('1234567790'));