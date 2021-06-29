const htmlHeader =
  '<header><div class="navbar"><a href="../index.html">Home</a><a href="../integrantes.html">Integrantes</a><a href="../discografia.html">Discografia</a><a href="../contato.html">Contato</a></div></header>';
const htmlFooter =
  '<footer><div class="footer"><a target="_blank" href="https://github.com/MuriloVS">Murilo Vitória da Silva\'s Github</a></div></footer>';

function header() {
  document.write(htmlHeader);
}

function footer() {
  document.write(htmlFooter);
}

header();
footer();
