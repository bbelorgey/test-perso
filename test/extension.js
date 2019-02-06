// const N = parseInt(readline()); // Number of elements which make up the association table.
// const Q = parseInt(readline()); // Number Q of file names to be analyzed.
// let mimeType = [];
// let fe = [];
// let fn = [];
// for (let i = 0; i < N; i++) {
//     var inputs = readline().split(' ');
//     const EXT = inputs[0]; // file extension
//     const MT = inputs[1]; // MIME type.=
//     console.log(EXT,MT)
//     mimeType = [...mimeType,MT]
//     fe = [...fe,EXT]
// }
// for (let i = 0; i < Q; i++) {
//     const FNAME = readline(); // One file name per line.
//     fn = [...fn,FNAME]
// }
const fn = ['example.TXT', 'referecnce.txt', 'strangename.tiff', 'resolv.CSS', 'matrix.TiFF', 'lanDsCape.Png', 'extract.cSs']
const mimeType = ['image/png', 'image/TIFF', 'text/css', 'text/plain']
const fe = ['png', 'TIFF', 'css', 'TXT']
fn.forEach(elt => {
  console.log(elt)
  for (let i = 0; i < fe.length; i++) {

    if (elt.endsWith('.' + fe[i])) {
      console.log(mimeType[i])
      return
    }

    if (elt.endsWith('.' + fe[i].toLowerCase())) {
      console.log(mimeType[i])
      return
    }

    if (fe[i] === 'css' && (elt.endsWith('css') || elt.endsWith('CSS'))) {
      console.log(mimeType[i])
      return
    }
  }

  console.log('UNKNOWN');
  
})