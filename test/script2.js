function race(v1, v2, g) {
  if(v1>=v2 || v1<=0) return null;

  let t = g/(v2-v1);
  let hours = Math.trunc(t);
  let min = Math.trunc((t-hours)*60);
  let sec = Math.round((((t-hours)*60) - min)*60);
  console.log(hours,min,sec);
  if(sec===60){
    min++;
    sec=0;
  }

  return [hours,min,sec];
}

race(720, 850, 70);