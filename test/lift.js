
class Stage {
  constructor(position,active) {
    this.position = position;
  } 
  // getter
  get stagePosition() {
    return this.position;
  }
  get isActive() {
    return this.active;
  }
  // setter
  set stagePosition(position) {
    this.position = position;
  }
  set isActive(active) {
    this.active = active;
  }
}

class Cage {
  constructor(positionX) {
    this.positionX = positionX;
  }

    // getter
    get cagePosition() {
      return this.positionX;
    }
      // setter
  set cagePosition(positionX) {
    this.positionX = positionX;
  }

  goUp() {
    console.log('l\'ascenseur monte');
  }
  
  goDown() {
    console.log('l\'ascenseur descend');

  }
}

class Controlleur {
  constructor(){
  }
  handlePosition(id){
    // console.log(id);
    let nextStage = id.replace(/pullElt/,'');

    console.log('bouton poussé no : ',nextStage);
    console.log('cage.positionX',cage.cagePosition);
    console.log('etage souhaité',stage[nextStage].stagePosition);

    if(stage[nextStage].position===cage.cagePosition){
      console.log('on est deja sur l\'étage');
    } else {
      let startStage = nextStage;
      if(stage[nextStage].position>cage.cagePosition){
        while(stage[nextStage].position>cage.cagePosition){
          cage.goUp();
          cage.cagePosition++;
          console.log('cage.positionX',cage.cagePosition);
        }
      } else { 
        while(stage[nextStage].position<cage.cagePosition){
          cage.goDown();
          cage.cagePosition--;
          console.log('cage.positionX',cage.cagePosition);
        }
      }
      console.log(`Arrivée étage ${cage.cagePosition}`)
    }
  }
}

let maxStage = 5;
let lift = document.getElementById("container");
let positionCage=0;

// affichage
let liftElt = [maxStage];
let pullElt = [maxStage];

// classes
// stages
let stage = [maxStage];
// controlleur
let controlleur = new Controlleur(0);
//cage
let cage = new Cage(0);
// initialisation class etage et et affichage des etages et boutons
for(let i=0;i<maxStage;i++){

  stage[i] = new Stage(i, i===0?true:false );

  liftElt[i] = document.createElement("div"); // Création d'un élément div
  liftElt[i].id = `lift${i}`; // Définition de son identifiant
  liftElt[i].textContent = `lift${i}`; // Définition de son contenu textuel
  
  pullElt[i] =  document.createElement("button"); // Création d'un élément button
  pullElt[i].id = `pullElt${i}`; // Définition de son identifiant
  pullElt[i].textContent = `Bouton ${i}`; // Définition de son contenu textuel
  cage.cagePosition===i ? pullElt[i].style.backgroundColor = "#2BFF71" : pullElt[i].style.backgroundColor="#A6EEFC";
// appel du controlleur avec bouton
  pullElt[i].addEventListener("click", ()=>controlleur.handlePosition(pullElt[i].id) );

  liftElt[i].appendChild(pullElt[i]);

  // lift.insertAdjacentHTML("afterBegin",`<div id=stage${i}>stage${i}</div>`);
 
lift.insertBefore(liftElt[i],document.getElementById(liftElt[i-1])); // Insertion du nouvel élément

}






