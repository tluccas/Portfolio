let btnBarraLat = document.getElementById('btn-barra-lateral')
let barraLat = document.getElementById('barra-lateral')
let overlay = document.getElementById('overlay-barra')

btnBarraLat.addEventListener('click', ()=>{
    barraLat.classList.add('abrir-barra');
     overlay.style.display = 'block';
});

barraLat.addEventListener('click', ()=>{
    barraLat.classList.remove('abrir-barra');
     overlay.style.display = 'none';
});

overlay.addEventListener('click', ()=>{
    barraLat.classList.remove('abrir-barra');
    overlay.style.display = 'none';
});