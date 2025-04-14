const navLinks = document.querySelectorAll('#nav-menu #nav-menu li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('#'));
    section.scrollIntoView({behavior: 'smooth'});
  });
});
