const scrollButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollButton.classList.add('visible');
  } else {
    scrollButton.classList.remove('visible');
  }
});

function setLanguage(lang) {
  document.body.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'cz' ? 'cs' : 'en');
  localStorage.setItem('preferred-lang', lang);

  document.querySelectorAll('.language-switch button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`.switch-${lang}`).classList.add('active');

  if (window.location.hash === '#en' || window.location.hash === '#cz') {
    history.replaceState("", document.title, window.location.pathname + window.location.search);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferred-lang') || 'en';
  setLanguage(savedLang);
});