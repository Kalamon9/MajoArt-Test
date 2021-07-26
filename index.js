const hamburger = document.querySelector('.hamburger')
    const navLinks = document.querySelector('.nav-links')

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active')
      });





function footer() {
  const year = new Date().getFullYear();
  document.getElementById("footerPar").innerHTML="Copyright ⓒ " + year
  }
  footer()
