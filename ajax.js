function initXMLhttp() {
    var e;
    return (e = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
}
function lumAjax(e) {
	e.type = 'GET';
    if (!e.url) return void (1 == e.debugLog && console.log("No Url!"));
    let o = initXMLhttp();
    o.onreadystatechange = function () {
		try{
            e.success(o.responseText);
		}
		catch(err){}
		};
 	o.open("GET", e.url);
	o.send();
}
/*
   lumAjax({
    url:'server.php',
    success: function(data){
	alert(data);
    }

	});
*/
