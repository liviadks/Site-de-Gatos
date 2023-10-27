//  Deixa bonitinho
const login = JSON.parse(localStorage.getItem('logado'));

const nome = login.login;

document.getElementById('titulo').innerHTML = `Bem vindo, ${nome}! <br>
Escolha a cor do seu gato.`;


window.onload = function() {
  mostrarImagem('inicial');
};


function mostrarImagem(cor) {
  const imagemGato = document.getElementById('imagemGato');
  let imagemSrc = '';

  switch (cor) {
    case 'branco':
      imagemSrc = 'Assets/Imagens/branco.png';
      break;
    case 'preto':
      imagemSrc = 'Assets/Imagens/preto.png';
      break;
    case 'frajola':
      imagemSrc = 'Assets/Imagens/frajola.png';
      break;
    case 'laranja':
      imagemSrc = 'Assets/Imagens/laranja.png';
      break;
    case 'tricolor':
      imagemSrc = 'Assets/Imagens/tricolor.png';
      break;
    case 'siames':
      imagemSrc = 'Assets/Imagens/siames.png';
      break;
    default:
      imagemSrc = 'Assets/Imagens/marrom2.png';

  }

  imagemGato.innerHTML = `<img src="${imagemSrc}" alt="Gato ${cor}">`;
}

function sair() {
  localStorage.removeItem('logado');
  window.location.href = '../index.html';
}