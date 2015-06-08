$( document ).ready(function() {
	//PLUGIN INIT

		//fastclick.js init
		$(function() {
    	//FastClick.attach(document.body);
		});


	//HOVER EVENTS
	
	messagehoverinit();

  $( ".canspring").hover(
	  function() {
	    $(this).addClass('sprung');
	    $(this).find('.springboardlabel').addClass('addedlabel')
	  }, function() {
	    $(this).removeClass('sprung');
	    $(this).find('.springboardlabel').removeClass('addedlabel')
	  }
	);

	newinput();
	newinput();
	newinput();

});