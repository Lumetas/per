const LFile = {};



LFile.readFile = function (input){
  let file = input.files[0];
	
  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
      sessionStorage.setItem('file', reader.result);
  };

  reader.onerror = function() {
    console.log(reader.error);
  };
	  }
	  
	  



  

LFile.writeFile = function (string, name) {
let file = new Blob([string], {
      type:  "application/json"
});

let link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(file));
    link.setAttribute("download", name);
	link.style.display = 'none';
    link.textContent = "DOWNLOAD DATA";
    document.querySelector(".filer").append(link);
    URL.revokeObjectURL(file);
	link.click();
	link.remove()

}


/*

<div style='display:none;' class='filer'></div>



*/

