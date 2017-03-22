$(document).ready(function() {
//opening vid
$('iframe.wrap').mediaWrapper();
$('iframe.wrapAspect').mediaWrapper({
		intrinsic: false,
		baseWidth: 16,
		baseHeight: 9
	});
		

//clouds

jQuery(function($) {
  $('#sky').jQlouds({ skyHeight: 223 });
  $('#sky1, #sky2').jQlouds();
});

//for the calender
$('input').dateDropper();
});