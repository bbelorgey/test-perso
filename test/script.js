if (/raclette/i.test('Je mangerais bien une Raclette savoyarde !')) {
  console.log('Ça semble parler de raclette');
} else {
  console.log('Pas de raclette à l\'horizon');
}
if (/Raclette|Tartiflette/i.test('Je mangerais bien une tartiflette savoyarde !')) {
  console.log('Ça semble parler de trucs savoyards');
} else {
  console.log('Pas de plats légers à l\'horizon');
}

// debut de chaine /^ raclette savoyarde $/
// /raclette savoyarde$/ fin de chaine
// /Cette tartiflette est gr[ao]sse/
// intervalle [a-z] [a-zA-Z] ou plusieurs [a-z0-9]
// exclure [^aeyuio] ou un intervalle [^b-y]
// le . remplace n'importe quel caractere ex: /gr.s/
// ? : le caractère qui le précède peut apparaître 0 ou 1 fois ;
// + : le caractère qui le précède peut apparaître 1 ou plusieurs fois ;
// * : le caractère qui le précède peut apparaître 0, 1 ou plusieurs fois.
// {n} : le caractère est répété n fois
// {n,m} : le caractère est répété de n à m fois
// {n,} : le caractère est répété de n fois à l'infini
//    trouver un caracere /[a-z!?\/\\]/ ou ! ou ? ou / ou \
//  \d chiffre \D caractere \s blanc \S pas blanc 
//  \w caractere \W pas un caractere
//  \n retour à la ligne \t tabulation
//  \b limite de mot \B pas de limite de mot
//  /^[a-z0-9._-]+$/  debut + lettre, chiffre, .,_,- plusieurs fois puis fin de chaine
//  /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/ adresse mail
let email = prompt("Entrez votre adresse e-mail :", "javascript@siteduzero.com");
if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)) {
    alert("Adresse e-mail valide !");
} else {
    alert("Adresse e-mail invalide !");
}
//  2 methodes test() => true ou false et exec() => tableau dont 1er elt texte trouvé 
//  let myRegex1 = /^Raclette$/i;
//  let myRegex2 = new RegExp("^Raclette$", "i");

let birth = 'Je suis né en mars';
/^Je suis né en (\S+)$/.exec(birth); 
//  les parentheses permettent d'extraire cette partie du reste
alert(RegExp.$1); // Affiche : « mars »
// autre exemple avec RegExp.$1, RegExp.$2, RegExp.$3
email = prompt("Entrez votre adresse e-mail :", "javascript@siteduzero.com");
if (/^([a-z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,6})$/.test(email)) {
    alert('Partie locale : ' + RegExp.$1 + '\nDomaine : ' + RegExp.$2 + '\nExtension : ' + RegExp.$3);
} else {
    alert('Adresse e-mail invalide !');
}
//  autre cas de figure greedy
let html = '<a href="www.mon-adresse.be">Mon site</a>';
/<a href="(.+)">/.exec(html);
alert(RegExp.$1); // www.mon-adresse.be, le + selectionne l'occurence (.+) la plus longue jusque ">
// non-greedy si on ne veut que la 1ere occurence, il faut restreindre avec /<a href="(.+?)">/.exec(html);
  // REMPLACEMENT de texte avec replace() -option  g  traite toutes occurences
let sentence = 'Il s\'appelle Sébastien. Sébastien écrit un tutoriel.';
let result = sentence.replace(/Sébastien/g, 'Johann');
alert(result); // Il s'appelle Johann. Johann écrit un tutoriel.
// Rechercher et capturer
let date = '05/26/2011';
date = date.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, 'Le $2/$1/$3');
alert(date); // Le 26/05/2011
// 
let total = 'J\'ai 25 dollars en liquide.';
alert(total.replace(/dollars?/, '$$')); // J'ai 25 $ en liquide