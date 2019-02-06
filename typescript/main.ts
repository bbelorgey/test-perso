function isPair(nombre:number|string,option:{b:number,c:string}):boolean {
  if(typeof nombre !== 'number') {
    nombre = Number(<string>nombre);
  }
  return <number>nombre%2===0
}

let nombre:number=56;
console.log(isPair(nombre,{b:2,c:'nono'}));

// const salut = (tab: string[]) => {
const salut = (tab: Array<string>):void => {
  let result = tab.map(item => `bonjour ${item}`)
  console.log(result);
 }

 salut(['coucocu','tetettet','hjhdskjsqhdkq'])
//                    ?  param optionnel
 function isImpair(nombre:number,option:{b:number,c?:string}):boolean {
  return nombre%2!==0
}

let nombre2:number=56;
console.log(isImpair(nombre,{b:2}));