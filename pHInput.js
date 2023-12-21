$(function() {
	$('#pHForm').on('submit', function() {
		return $('#pHForm').jqxValidator('validate');
	});
});