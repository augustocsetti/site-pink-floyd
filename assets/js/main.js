import { atom, more, piper, saucerful, ummagumma } from './discografia.js';
import { david, nick, richard, roger, syd } from './integrantes.js';

const integrantesContent = document.getElementById('integrante-conteudo');
const discografiaContent = document.getElementById('discografia-conteudo');

document.addEventListener('click', (evento) => {
  const elemento = evento.target;
  // integrantes
  if (elemento.id === 'syd') {
    integrantesContent.innerHTML = syd;
  } else if (elemento.id === 'nick') {
    integrantesContent.innerHTML = nick;
  } else if (elemento.id === 'roger') {
    integrantesContent.innerHTML = roger;
  } else if (elemento.id === 'richard') {
    integrantesContent.innerHTML = richard;
  } else if (elemento.id === 'david') {
    integrantesContent.innerHTML = david;
  }
  // discografia
  else if (elemento.id === 'piper') {
    discografiaContent.innerHTML = piper;
  } else if (elemento.id === 'saucerful') {
    discografiaContent.innerHTML = saucerful;
  } else if (elemento.id === 'more') {
    discografiaContent.innerHTML = more;
  } else if (elemento.id === 'ummagumma') {
    discografiaContent.innerHTML = ummagumma;
  } else if (elemento.id === 'atom') {
    discografiaContent.innerHTML = atom;
  }
});

const headerContent = document.getElementById('header');
headerContent.innerHTML = `<div class="navbar">
      <a href="index.html">Home</a>
      <a href="integrantes.html">Integrantes</a>
      <a href="discografia.html">Discografia</a>
      <a href="contato.html">Contato</a>
    </div>`;

const footerContent = document.getElementById('footer');
footerContent.innerHTML = `<div class="footer">
      <a target="_blank" href="https://github.com/MuriloVS">
        Murilo Vitória da Silva's Github
      </a>
    </div>`;

//header();
//footer();
