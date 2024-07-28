let nav = document.querySelector('#nav');

window.addEventListener('scroll', function() {
    // Adiciona ou remove a classe 'rolagem' no elemento 'nav' com base na posição de rolagem vertical da janela.
    // A classe 'rolagem' é adicionada quando a janela é rolada verticalmente (eixo Y) mais do que 0 pixels.
    nav.classList.toggle('rolagem', window.scrollY > 0);
});
