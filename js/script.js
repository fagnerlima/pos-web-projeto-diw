$(document).ready(function() {
  /**
   * Menu principal (hamburguer button)
   */
  var buttonMainMenu = $('nav.main button.main-menu');
  var ulMainMenu = $('nav.main ul.main-menu');
  var siteMask = $('#site-mask');

  function showMainMenu() {
    ulMainMenu.slideToggle();
    siteMask.toggle();
  }

  function hideMainMenu() {
    if (buttonMainMenu.css('display') == 'none') {
      return;
    }

    ulMainMenu.slideUp();
    siteMask.fadeOut(1000);
  }

  buttonMainMenu.click(showMainMenu);
  ulMainMenu.find('a').click(hideMainMenu);
  siteMask.click(hideMainMenu);

  /**
   * Efeito parallax
   */
  $('.scroll').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 800);
  });

  /**
   * Actual year
   */
  $('.actual-year').html((new Date()).getFullYear());
});
