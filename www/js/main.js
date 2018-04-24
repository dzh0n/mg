$(document).ready(function(){

$('.region-list-item').on('click', function(){
	$(this).toggleClass('active');
	if($(this).find('i').hasClass('fa-folder')){
		$(this).find('i').removeClass('fa-folder');
		$(this).find('i').addClass('fa-folder-open');
		$(this).find('.region-list-item-sublist').slideDown();
	}
	else {
		$(this).find('i').addClass('fa-folder');
		$(this).find('i').removeClass('fa-folder-open');
		$(this).find('.region-list-item-sublist').slideUp();
	}
	
});

});