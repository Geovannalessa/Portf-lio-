window.addEventListener("load", function() {
    let idiomaAtual = 'pt';

    const btn = document.getElementById('btn-idioma');
    const elementos = document.querySelectorAll('.translate');
  
    function mudaIdioma() {
      idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
  
      elementos.forEach(el => {
        el.textContent = el.dataset[idiomaAtual];
      });
  
      btn.textContent =
        idiomaAtual === 'pt' ? 'english' : 'português';
    }
  
    btn.addEventListener('click', mudaIdioma);
});





function atualizarImagensTema() {
    const modoEscuro = document.body.classList.contains('dark-mode');
    const imagens = document.querySelectorAll('.imagem-projeto');
  
    imagens.forEach(img => {
      const novaSrc = modoEscuro ? img.dataset.dark : img.dataset.light;
      img.src = novaSrc;
    });
  }

function mudaTema(btn){
    document.body.classList.toggle('dark-mode');
    atualizarImagensTema();
}

let idiomaAtual = 'pt';

