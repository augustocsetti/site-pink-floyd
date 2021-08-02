import { atom, more, piper, saucerful, ummagumma } from './discografia.js';
import { david, nick, richard, roger, syd } from './integrantes.js';

const integrantesContent = document.getElementById('integrante-conteudo');
if (integrantesContent) {
  integrantesContent.addEventListener('click', (evento) => {
    const elemento = evento.target.id;

    if (elemento === 'syd') {
      integrantesContent.innerHTML = syd;
    } else if (elemento === 'nick') {
      integrantesContent.innerHTML = nick;
    } else if (elemento === 'roger') {
      integrantesContent.innerHTML = roger;
    } else if (elemento === 'richard') {
      integrantesContent.innerHTML = richard;
    } else if (elemento === 'david') {
      integrantesContent.innerHTML = david;
    }
  });
}

const discografiaContent = document.getElementById('discografia-conteudo');
if (discografiaContent) {
  discografiaContent.addEventListener('click', (evento) => {
    const elemento = evento.target.id;

    if (elemento === 'piper') {
      discografiaContent.innerHTML = piper;
    } else if (elemento === 'saucerful') {
      discografiaContent.innerHTML = saucerful;
    } else if (elemento === 'more') {
      discografiaContent.innerHTML = more;
    } else if (elemento === 'ummagumma') {
      discografiaContent.innerHTML = ummagumma;
    } else if (elemento === 'atom') {
      discografiaContent.innerHTML = atom;
    }
  });
}

const headerContent = document.getElementById('header');
headerContent.innerHTML = `<div class="navbar">
      <a href="index.html">Home</a>
      <a href="integrantes.html">Integrantes</a>
      <a href="discografia.html">Discografia</a>
      <a href="contato.html">Contato</a>
    </div>`;

const footerContent = document.getElementById('footer');
footerContent.innerHTML = `<div class="footer">
      <a target="_blank" href="https://github.com/augustocsetti">
      Augusto Cardoso Setti's Github
      </a>      
      <a target="_blank" href="https://github.com/MuriloVS">
        Murilo Vitória da Silva's Github
      </a>
    </div>`;
