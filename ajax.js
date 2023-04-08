function initXMLhttp() {
    var e;
    return (e = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
}
function lumAjax(e) {
	e.type = 'GET';
    if (!e.url) return void (1 == e.debugLog && console.log("No Url!"));
    let o = initXMLhttp();
    o.onreadystatechange = function () {
        4 == o.readyState && 200 == o.status
            ? (e.success && e.success(o.responseText, o.readyState), 1 == e.debugLog && console.log("SuccessResponse"), 1 == e.debugLog && console.log("Response Data:" + o.responseText))
            : 1 == e.debugLog && console.log("FailureResponse --> State:" + o.readyState + "Status:" + o.status);
    };
 	o.open("GET", e.url);
	o.send();
}
