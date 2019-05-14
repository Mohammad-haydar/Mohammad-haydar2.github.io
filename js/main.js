
// Smooth Scrolling
$('.main-nav a, #container a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 90
      },
      900
    );
  }
});