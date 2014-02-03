$(document).on('pop-initialized', function(){

  $('.asset').live('initialize', function(e, asset){
    // stop target=_blank, have to do it in the click because populr adds the target attr after this event is fired
    $('a', this).on('click.chs', function(){
      $(this).removeAttr('target');
    });

    $('.asset-type-imagegroup .slideshow .images').each(function() {
      var $this = $(this);
      $this.cycle({
        fx: 'fade',
        timeout: Math.floor(Math.random() * 8000) + 3000,
        delay: Math.floor(Math.random() * 6000) + 1000
      });
    });

  });

  $('.asset').live('destroy', function(e, asset){
    $('a', this).off('click.chs');
  });

});

