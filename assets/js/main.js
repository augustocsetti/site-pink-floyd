import {
  atom,
  more,
  piper,
  saucerful,
  ummagumma,
  meddle,
  clouds,
  moon,
  wish,
  animals,
  wall,
  cut,
  reason,
  bell,
  endless,
  discografiaTable,
} from './discografia.js';
import {
  david,
  integrantesList,
  nick,
  richard,
  roger,
  syd,
} from './integrantes.js';

const contatoPage = (evento) => {
  evento.preventDefault();
  const nome = evento.target['nome'].value;

  const contatoContent = document.getElementById('contato-conteudo');

  contatoContent.innerHTML = `<p id="contato">
      Olá, <strong>${nome}</strong>! Agradecemos o seu contato, assim que possível entraremos em contato com você!
    </p>`;
};

const formulario = document.getElementById('formulario');
if (formulario) {
  formulario.addEventListener('submit', contatoPage);
}

const integrantesContent = document.getElementById('integrante-conteudo');
if (integrantesContent) {
  integrantesContent.innerHTML = integrantesList;
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
    } else if (elemento === 'integrantes-back') {
      integrantesContent.innerHTML = integrantesList;
    }
  });
}

const discografiaContent = document.getElementById('discografia-conteudo');

if (discografiaContent) {
  discografiaContent.innerHTML = discografiaTable;

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
    } else if (elemento === 'meddle') {
      discografiaContent.innerHTML = meddle;
    } else if (elemento === 'clouds') {
      discografiaContent.innerHTML = clouds;
    } else if (elemento === 'moon') {
      discografiaContent.innerHTML = moon;
    } else if (elemento === 'wish') {
      discografiaContent.innerHTML = wish;
    } else if (elemento === 'animals') {
      discografiaContent.innerHTML = animals;
    } else if (elemento === 'wall') {
      discografiaContent.innerHTML = wall;
    } else if (elemento === 'cut') {
      discografiaContent.innerHTML = cut;
    } else if (elemento === 'reason') {
      discografiaContent.innerHTML = reason;
    } else if (elemento === 'bell') {
      discografiaContent.innerHTML = bell;
    } else if (elemento === 'endless') {
      discografiaContent.innerHTML = endless;
    } else if (elemento === 'discografia-back') {
      discografiaContent.innerHTML = discografiaTable;
    }
  });
}

const headerContent = document.getElementById('header');
headerContent.innerHTML = `
    
    <nav class="navbar">
      <div>
        <a id="title-page" href="index.html">The Great Gig</a>
        <h1 id = "pink-floyd-h1">Pink Floyd'S Fan Page</h1>
      </div>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="integrantes.html">Integrantes</a></li>
        <li><a href="discografia.html">Discografia</a></li>
        <li><a href="contato.html">Contato</a></li>
      </ul>
    </nav>
    `;

const footerContent = document.getElementById('footer');
footerContent.innerHTML = `<nav class="footer">
      <a target="_blank" href="https://github.com/augustocsetti">Augusto Cardoso Setti's Github</a>      
      <a target="_blank" href="https://github.com/MuriloVS">Murilo Vitória da Silva's Github</a>
    </nav>`;
