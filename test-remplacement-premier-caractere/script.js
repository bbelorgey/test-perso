document.getElementById("choixDestination").checked=false;
document.getElementById("choixDestination").addEventListener("change", (e) => {
        if(document.getElementById("choixDestination").checked===true){
          pElt.style.display = "block";
          pElt2.style.display = "block"; 
          // myMove();   
        } else {
          pElt.style.display = "none";
          pElt2.style.display = "none";  
        }
      });
let pElt = document.querySelector(".underControl label");
let pElt2 = document.querySelector(".underControl input");
 
function myMove() {
  let elem = document.getElementById("choixDestination");
  let pos = -50;
  let opacity=pos;
  let id = setInterval(frame, 2);
  function frame() {
      if (pos == 0) {
          clearInterval(id);
      } else {
          pos++;
          opacity = Math.exp(pos);
          console.log(opacity);
          pElt.style.top = pos + 'px';
          pElt.style.opacity = opacity;
          pElt2.style.top = pos + 'px';
          pElt2.style.opacity = opacity;
          console.log(elem.style.top);
      }
  }
} 