window.onload = function()
{
    let canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    let context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }


//On n'oublie pas de récupérer le canvas et son context.

// context.beginPath();//On démarre un nouveau tracé
// context.lineJoin = "bevel";
// context.lineWidth = 10;
// context.moveTo(0, 300);//On se déplace au coin inférieur gauche
// context.lineTo(150, 0);
// context.lineTo(300, 300);
// context.lineTo(0, 300);
// context.stroke();//On trace seulement les lignes.
// context.closePath();
// context.strokeRect(20, 30, 50, 50);

// context.beginPath(); //On démarre un nouveau tracé.
// context.arc(150, 200, 50,Math.PI*1.5, Math.PI*0.25,false); //On trace la courbe délimitant notre forme
// context.stroke(); //On utilise la méthode fill(); si l'on veut une forme pleine
// context.closePath();
// //On n'oublie pas de récupérer l'objet canvas et son context.

let mon_image = new Image();
mon_image.src = "https://modemaisonpr.files.wordpress.com/2015/05/model.jpg?w=525";
context.drawImage(mon_image, 0, 0, 100, 100, 35, 60, 150, 150);
}