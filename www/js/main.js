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

//settings
if(storage.getItem('settings_fio')!=null && pageName == 'settings') {
  $('#settings_fio').val(storage.getItem('settings_fio'));
}
if(storage.getItem('settings_phone')!=null && pageName == 'settings') {
  $('#settings_phone').val(storage.getItem('settings_phone'));
}

$('#save_settings').on('click', function() {
	ch = $(this).children('i');
	ch.removeClass('far fa-save').addClass('fas fa-circle-notch fa-spin');
	if($('#settings_fio').val() != '')
		storage.setItem('settings_fio', $('#settings_fio').val());
	if($('#settings_phone').val() != '')
		storage.setItem('settings_phone', $('#settings_phone').val());
	window.plugins.toast.show(
    'message',
    'short', // ‘short’, ‘long’, '900' (milliseconds)
    'bottom' // ‘top’, ‘center’, ‘bottom’

);
	ch.removeClass('fas fa-circle-notch fa-spin').addClass('far fa-save');
});

});
