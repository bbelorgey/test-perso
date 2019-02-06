function formatDuration(seconds) {
  if(seconds===0) return('now');
  let affichage = '';
  let min = 0;
  let day = 0;
  let hours = 0;
  let second = 0;
  let year = 0;
  second = seconds;
  if (second > 59) {
    min = Math.trunc(second / 60);
    second = second % 60;
    console.log('seconds',seconds)
    if (min > 59) {
      hours = Math.trunc(min / 60);
      min = min % 60;
      console.log('min',min)
      if (hours > 23) {
        day = Math.trunc(hours / 24);
        hours = hours % 24;
        console.log('hours',hours)
        if (day > 364) {
          year = Math.trunc(day / 365);
          day = day % 365;
        }
      }
    }
  }
  console.log(second, min, hours, day);
  affichage +=
    year > 0 ?
      year > 1 ?
        `${year} years`
        :
        `${year} year`
      : '';

  affichage +=
    day > 0 ?
      day > 1 ?
        year ? `, ${day} days` : `${day} days`
      :
        year ? `, ${day} day` : `${day} day`
    : '';

  affichage +=
    hours > 0 ?
      hours > 1 ?
        year | day ? `, ${hours} hours` : `${hours} hours`
      :
        year | day ?`, ${hours} hour` : `${hours} hour`

    : '';
  affichage += 
    min > 0 ?
      min > 1 ?
        year | day| hours? 
          second ? `, ${min} minutes`: ` and ${min} minutes`
        :
          second ?`${min} minutes`: `${min} minutes`
      : 
        year | day | hours?
          second ? `, ${min} minute` : ` and ${min} minute`
          :
          second ? `${min} minute` : `${min} minute`

        
    : '';

  affichage += 
    second > 0 ? 
      second > 1 ?
      year | day | hours | min?` and ${second} seconds`: `${second} seconds`
      :
      year | day | hours | min?` and ${second} second` :`${second} second`
    : '';
  console.log(affichage);
  return affichage;
}

console.log(formatDuration(132030240));
