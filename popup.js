document.addEventListener('DOMContentLoaded', function () {
	
	function get_lastchild(n)
	{
	var x=n.lastChild;
	while (x.nodeType!=1)
	  {
	  x=x.previousSibling;
	  }
	return x;
	}
		
	var data = chrome.extension.getBackgroundPage().articleData;
	if(data.error){
		$("#message").text(data.error);
		$("#content").hide();
	}else{
		$("#message").hide();
		
		
		$("#title").html(data.title);
		$("#sin").html(data.sin);
		$("#cat").html(data.cat);
		$("#com1").html(data.com1);
		$("#yom").html(data.yom);
		$("#com2").html(data.com2);
		$("#com3").html(data.com3);
		$("#kasi").html(data.kasi);
		
		
	}
});
