//Javascript Example for Tomas' Website Example
var id = null;

function myElement() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
    if(pos==350){
        clearInterval(id);
    } else{
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
    }

}