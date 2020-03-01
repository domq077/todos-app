//check if task is completed
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed")
});

//click span to delete task
$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

//adding new task
$("input[type='text']").keypress(function(e) {
	if(e.which === 13) {
		var task = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + task + "</li>");
	}
});

//hide the input
$('.fa-plus').click(function() {
	$("input[type='text']").fadeToggle(500);
});