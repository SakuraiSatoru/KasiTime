var check = $("#song_info_table");
if(check.length!=1){
	chrome.runtime.sendMessage({type:"Kasi Time Prompt", error:"Failed to grab information. Make sure you're on the right page."});
}
else{
	
	function grabSin(){
		strHTML = $("td.td1").next().html();
		/*if (strHTML.indexOf("<a") == 0){
			strHTML = strHTML.substring(strHTML.indexOf(">")+1,strHTML.indexOf("</a>"))
		}*/
		return strHTML;
	}
	
	
	
	
	
	
	function grabCom1(){
		var strHTML = document.getElementById("song_info_table").innerHTML;
		strHTML = strHTML.substring(strHTML.indexOf("作詞"));
		strHTML = strHTML.substring(strHTML.indexOf("<td"));
		strHTML = strHTML.substring(strHTML.indexOf("<td")+4,strHTML.indexOf("</td"));
		return strHTML;
	}
	
	function grabYom(){
		var strHTML = document.getElementById("song_info_table").innerHTML;
		strHTML = strHTML.substring(strHTML.indexOf("読み")+15);
		strHTML = strHTML.substr(0,strHTML.indexOf("</td"));
		return strHTML;
	}
	
	function grabCom2(){
		var strHTML = document.getElementById("song_info_table").innerHTML;
		strHTML = strHTML.substring(strHTML.indexOf("作曲")+15);
		strHTML = strHTML.substr(0,strHTML.indexOf("</td"));
		return strHTML;
	}
	
	function grabCom3(){
		var strHTML = document.getElementById("song_info_table").innerHTML;
		strHTML = strHTML.substring(strHTML.indexOf("編曲")+15);
		strHTML = strHTML.substr(0,strHTML.indexOf("</td"));
		return strHTML;
	}
	
	
	
	
	
	
	
	var msg = {
		type: "Kasi Time Prompt",
		title : $("h1").html(),
		sin : grabSin(),
		cat : $("td.td2").next().html(),
		com1 : grabCom1(),
		yom : grabYom(),
		com2 : grabCom2(),
		com3 : grabCom3(),
		kasi : $("#kashi_flame").html()
	};
	chrome.runtime.sendMessage(msg);
}
