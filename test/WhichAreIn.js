function inArray(array1,array2){
  return array1.filter(elt1=>array2.join(' ').indexOf(elt1)===-1?false:true).sort();
}


a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["xyz", "live", "strong"]
a1 = ["live", "strong", "arp"]
a1 = [ 'live', 'strong','', 'lyal', 'lysh', 'arp' ]

console.log(inArray(a1, a2));