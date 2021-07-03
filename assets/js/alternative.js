const header = () => {
  let header = '<div class="navbar">';
  header += '<a href="../index.html">Home</a>';
  header += '<a href="../integrantes.html">Integrantes</a>';
  header += '<a href="../discografia.html">Discografia</a>';
  header += '<a href="../contato.html">Contato</a>';
  header += '</div>';
  document.write(header);
};

const footer = () => {
  let footer = '<div class="footer">';
  footer += '<a target="_blank" href="https://github.com/MuriloVS">';
  footer += "Murilo Vitória da Silva's Github";
  footer += '</a></div>';
  document.write(footer);
};

header();
footer();
