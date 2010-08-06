
jQuery.fn.renderShortcuts = function() {

};

jQuery.fn.shortcuts = function() {
  return this.each(function(){
  	$(this).append("<ul class='shortcutsList'></ul>");
  	var list = $(this).find(".shortcutsList");
  	$(this).find("table tr:has(td)").each(function(){
  		var shortcut = $(this).children("th:eq(0)").html();
  		
  		var shortDesc = $(this).children("td:eq(0)").html();
  		list.append("<li><strong class='shortcut'>"+shortcut+":</strong> " + shortDesc+ "</li>");
  	});
  	$(this).find("table").remove();
  });
};
