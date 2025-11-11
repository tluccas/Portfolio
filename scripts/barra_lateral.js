let btnBarraLat = document.getElementById("btn-barra-lateral");
let barraLat = document.getElementById("barra-lateral");
let overlay = document.getElementById("overlay-barra");

btnBarraLat.addEventListener("click", abrirBarra);
barraLat.addEventListener("click", fecharBarra);
overlay.addEventListener("click", fecharBarra);

function abrirBarra() {
  barraLat.classList.add("abrir-barra");
  overlay.style.display = "block";
}

function fecharBarra() {
  barraLat.classList.remove("abrir-barra");
  overlay.style.display = "none";
}
