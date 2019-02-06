function solution(digits){
  if(digits==='') return null;
    let seq=0;
    let tmp=0;
    digits.split('').reduce((carry,oneDigit,index,initTab)=> {
      if(index===0) carry.push(oneDigit);
      if(oneDigit===(initTab[index+1]-1) && index<intTab.length-1){
        carry = [...carry,initTab[index+1]];
        console.log('carry',carry);
      } else {
        tmp = parseInt(carry.join(''), 10);
        if(tmp>seq) seq=tmp;
        carry = [];
      }
    },[]);
    return seq;
  }

  console.log(solution('1234567890'));