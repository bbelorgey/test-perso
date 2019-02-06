function isPair(nombre, option) {
    if (typeof nombre !== 'number') {
        nombre = Number(nombre);
    }
    return nombre % 2 === 0;
}
var nombre = 56;
console.log(isPair(nombre, { b: 2, c: 'nono' }));
// const salut = (tab: string[]) => {
var salut = function (tab) {
    var result = tab.map(function (item) { return "bonjour " + item; });
    console.log(result);
};
salut(['coucocu', 'tetettet', 'hjhdskjsqhdkq']);
//                    ?  param optionnel
function isImpair(nombre, option) {
    return nombre % 2 !== 0;
}
var nombre2 = 56;
console.log(isImpair(nombre, { b: 2 }));
