function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

document.onreadystatechange = function () {
	var state = document.readyState
	if (state == 'complete') {
		setTimeout(function(){
			document.getElementById('interactive');
			document.getElementById('load').style.visibility="hidden";
			document.getElementById('term_demo').style.visibility="visible";
			loadjscssfile("js/terminal.js", "js")
			loadjscssfile("css/terminal.css","css");
		},1000);
	}
}