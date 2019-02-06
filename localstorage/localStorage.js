let StationData = {
  stationNumber:45,
  StationName:'place du capitole'
};

localStorage.setItem('station',JSON.stringify(StationData));

let localData = JSON.parse(localStorage.getItem('station'));
document.getElementsByTagName('h1')[0].innerHTML=localData.StationName;