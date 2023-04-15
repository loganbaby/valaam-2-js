$('.part').hover (
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function() {
		$('.description').fadeOut(50);
	}
)

$('.part').onwheel = function() {
	if(event.ctrlKey) {
			return false;
	}
}
