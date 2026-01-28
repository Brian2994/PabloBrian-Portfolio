// Seleciona todos os elementos com a classe fade-in
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Menu Hambúrguer
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuLinks = navMenu.querySelectorAll('a');

// Abrir / fechar pelo botão
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar ao clicar fora
document.addEventListener('click', (e) => {
    const clicouNoMenu = navMenu.contains(e.target);
    const clicouNoBotao = menuToggle.contains(e.target);

    if (!clicouNoMenu && !clicouNoBotao) {
        fecharMenu();
    }
});

// Fechar ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        fecharMenu();
    });
});

function fecharMenu() {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
}