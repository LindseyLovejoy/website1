nav = document.quereSelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > 223) {
        nav.classList.add('active');
    } else
    {
        nav.classList.remove('active');
    }