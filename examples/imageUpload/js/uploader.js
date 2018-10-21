function uploadIt(){
    document.filebrowser.filename.disabled=true;
    var myObj = document.getElementById("loadingBox");
    myObj.className = "show";
    var t=setTimeout("goToCrop()",3000);
}

function goToCrop(){
    document.location.href = "crop.html";
}