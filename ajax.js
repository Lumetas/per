function initXMLhttp() {
    let init;
    return (init = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
}
function lumAjax(init) {
	init.type = 'GET';
    let ajax = initXMLhttp();
    ajax.onreadystatechange = function () {
		try{
            init.success(ajax.responseText);
		}
		catch(err){}
		};
 	ajax.open("GET", init.url);
	ajax.send();
}
/*
   lumAjax({
    url:'server.php',
    success: function(data){
	alert(data);
    }

	});
*/
