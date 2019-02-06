function solution(number){
  let M = Math.trunc(number/1000);
  let reste = number%1000;
  let D = Math.trunc(reste/500);
  reste = number%500;
  let C = Math.trunc(reste/100);
  reste = number%100;
  let L = Math.trunc(reste/50);
  reste = number%50;
  let X = Math.trunc(reste/10);
  reste = number%10;  
  let V = Math.trunc(reste/5);
  let I = number%5;  
  let chaine = 'M'.repeat(M)+'D'.repeat(D)+'C'.repeat(C)+'L'.repeat(L)+'X'.repeat(X)+'V'.repeat(V)+'I'.repeat(I);
  let regex1 = /DCCCC/;
  chaine = chaine.replace(regex1,'CM');
  regex1 = /CCCC/;
  chaine = chaine.replace(regex1,'CD');
  regex1 = /LXXXX/;
  chaine = chaine.replace(regex1,'XC');
  regex1 = /XXXX/;
  chaine = chaine.replace(regex1,'XL');
  regex1 = /VIIII/;
  chaine = chaine.replace(regex1,'IX');
  regex1 = /IIII/;
  chaine = chaine.replace(regex1,'IV');    
  return chaine;
}