array = [[1,2,3,10],
[4,5,6,11],
[7,8,9,12]];

snail = function (array) {
  let xmin = 0;
  let xmax = array.length - 1;
  let ymin = 0;
  let ymax = array[0].length - 1;
  let sensx = '+';
  let sensy = '+';
  let result = [];
  let x = 0;
  let y = 0;
  while (ymin <= ymax || xmin <= xmax) {
    console.log(xmin, xmax, ymin, ymax);
    if (xmin <= xmax) {
      if (sensy === '+') {
        y = ymin;
        while (y <= ymax) {
          result = [...result, array[xmin][y]];
          console.log('cas1 :',xmin,y,array[xmin][y]);
          y++;
          sensy = '+';
        }
        xmin++;
        sensy = '-';
      } else {
        y = ymax;
        while (y >= ymin) {
          result = [...result, array[xmax][y]];
          console.log('cas2 :',xmax,y,array[xmax][y]);
          y--;
        }
        xmax--;
        sensy = '+';
      }
    }
    if (ymin <= ymax) {
      if (sensx === '+') {
        x = xmin;
        while (x <= xmax) {
          result = [...result, array[x][ymax]];
          console.log('cas3 :',x,ymax,array[x][ymax]);          
          x++;
        }
        ymax--;
        sensx = '-';
      } else {
        x = xmax;
        while (x >= xmin) {
          result = [...result, array[x][ymin]];
          console.log('cas4 :',x,ymin,array[x][ymin]);   
          x--;
        }
        ymin++;
        sensx = '+';
      }
    }

  }
  return result;
}

console.log(snail(array));
// snail(array) #=> [1,2,3,6,9,8,7,4,5]