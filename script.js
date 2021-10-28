function hamburger() {
  let hamburgerButton = document.getElementById("hamburger");
  hamburgerButton.addEventListener('click', () => {
    let list = document.getElementById('list');
    list.classList.toggle('changed');
  })
}
hamburger();