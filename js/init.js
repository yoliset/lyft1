
function init(){
    var imagenPais = document.getElementById('bandera');
    var locStore =  document.getElementById('codigoPais');
    var numPais = localStorage.getItem('numeroPais');
    var paisnu = localStorage.getItem('srcImagen');
    imagenPais.src = paisnu;
    locStore.textContent = numPais;
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}