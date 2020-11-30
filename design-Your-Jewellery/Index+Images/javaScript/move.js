dragElement(document.getElementById("mysym"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

          
    elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();          
    pos3 = e.clientX;
    pos4 = e.clientY;
     <!-- عند التوقف عن ضغط الماوس استدعي دالة توقف التحريك -->
    document.onmouseup = closeDragElement;   
   <!-- عند الضغط على الماوس استدعي دالة التحريك -->     
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();     
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;   
    <!-- ضبط اتجاهات الجسم حسب تحريك الماوس -->
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
      <!-- توقف حركة الاجسام عند التوقف عن ضغط الماوس-->   
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


dragElement(document.getElementById("myNB"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

          
    elmnt.onmousedown = dragMouseDown;
 

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
          
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
            
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
       
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
            
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
         
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


dragElement(document.getElementById("mygem"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

          
    elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
          
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
            
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
       
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
            
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
         
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



dragElement(document.getElementById("myText"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

          
    elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
          
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
            
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
       
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
            
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
         
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



dragElement(document.getElementById("myimg"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

          
    elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
          
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
            
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
       
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
            
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
         
    document.onmouseup = null;
    document.onmousemove = null;
  }
}