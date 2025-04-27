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
//colocar o js que tem em telas de projetos em outro arquivo js
    const carrossel = document.getElementById('carrossel');
    const btnProximo = document.getElementById('proximo');
    const btnAnterior = document.getElementById('anterior');
    
    let index = 0;
    const imagens = document.querySelectorAll('.carrossel-img');
    
    function mostrarImagem(i) {
      const largura = carrossel.offsetWidth;
      carrossel.scrollTo({ left: i * largura, behavior: 'smooth' });
    }
    
    btnProximo.addEventListener('click', () => {
      index = (index + 1) % imagens.length;
      mostrarImagem(index);
    });
    
    btnAnterior.addEventListener('click', () => {
      index = (index - 1 + imagens.length) % imagens.length;
      mostrarImagem(index);
    });
});

function atualizarImagensTema() {
    const modoEscuro = document.body.classList.contains('dark-mode');
    const imagens = document.querySelectorAll('.imagem-projeto');
    const carrossel = document.querySelectorAll('.carrossel-img');

    imagens.forEach(img => {
      const novaSrc = modoEscuro ? img.dataset.dark : img.dataset.light;
      img.src = novaSrc;
    });
  
    carrossel.forEach(img => {
      const novaSrc = modoEscuro ? img.dataset.dark : img.dataset.light;
      img.src = novaSrc;
    });
   
  }

function mudaTema(btn){
    document.body.classList.toggle('dark-mode');
    atualizarImagensTema();
}



