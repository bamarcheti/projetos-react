
function Sorteador() {
    var min = Math.ceil(10);
    var max = Math.floor(100);
    return Math.floor(Math.random() * (max - min) + min);
}

export default Sorteador;