$(function() {
  if($('.zoombox').length && !window.surpressGalleryInit && !$('#neos-application').length) {
    $('.zoombox').zoombox({
      slideTransitionSpeed: 500,
      slideTransition: 'ease-in-out'
    });
  }
})
