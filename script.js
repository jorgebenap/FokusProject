const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector(".app__card-button--largo");

botonLargo.addEventListener('click', () => {
  html.setAttribute('data-contexto','descanso-largo')
})

botonCorto.addEventListener('click', () => {
  html.setAttribute('data-contexto','descanso-corto')
})

botonEnfoque.addEventListener('click', () => {
  html.setAttribute('data-contexto','enfoque')
})
