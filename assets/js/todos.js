// check off specific to dos via click
// adding a listener to ul parent (exists when the page loads). specifices that li is the element affected by action
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click x to delete todos
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which ===13) {
		// grab text from input
		var toDoText = $(this).val();
		$(this).val("");	// clears input text
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
	};
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});