var img_type;

<!-- دالة تغيير لون خلفية اللوح الى القيمة الموجودة في علبة الالوان -->
  function backgroundColor() {
    var myCanvas = document.querySelector("#myCanvas");
    var colorinput = document.querySelector("#clr");
    var color = colorinput.value;
    myCanvas.style.backgroundColor = color;
  }
<!-- دالة اختيار صورة من الجهاز ووضعها كصورة اسوارة  -->
  function readURLbracelet(){
  <!--  هنا اغير قيمة المتغير الى اسوارة -->
img_type="Bracelet";
   var file = document.getElementById("bracelet").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
 
      document.getElementById('myNB_img').src=  reader.result;  
      <!-- هنا اغير خاصية الصورة واجعلها قابلة للعرض لان القيمة المبدايه لها هي display:none بحيث امنع ظهور ايقونة الصورة المكسورة -->
       document.getElementById('myNB_img').style.display ="block"; 
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
} 

function readURLnecklace(){
img_type ="Necklace";
   var file = document.getElementById("getval").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.getElementById('myNB_img').src=  reader.result;   
       document.getElementById('myNB_img').style.display ="block"; 
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
} 

function readURLcharm(){
   var file = document.getElementById("getimg").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.getElementById('charm_img').src =  reader.result ;   
      document.getElementById('charm_img').style.display ="block"; 
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
} 

function readURLgemstone(){
   var file = document.getElementById("getgem").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.getElementById('gemstone_img').src =  reader.result ;   
      document.getElementById('gemstone_img').style.display ="block"; 
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
} 
function readURLsymbol(){
   var file = document.getElementById("getsym").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.getElementById('symbol_img').src =  reader.result ;   
      document.getElementById('symbol_img').style.display ="block"; 
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
} 
<!--  دالة تغيير حجم صورة السلسال او الاسوارة-->
  function img_size(id){
 <!--  هذا الشرط للتاكد من ان تغيير الحجم قادم من نفس نوع الاكسسوار الموجود  -->
 <!-- مثلا: يمنع هذا الشرط ان تغير حجم الصورة من نوع الاسوارة وانت قادم من خيار السلسال -->
    if(img_type==id){
   var myImg = document.querySelector("#myNB_img");
    var size_value = document.querySelector("#"+id);
    var size = size_value.value;
    myImg.style.width = size+"px";
      myImg.style.height = size+"px";}
  }
      function Charm_size() {
    var myImg = document.querySelector("#charm_img");
    var size_value = document.querySelector("#Charmsize");
    var size = size_value.value;
    myImg.style.width = size+"px";
      myImg.style.height = size+"px";
  }
       function gemstone_size() {
    var myImg = document.querySelector("#gemstone_img");
    var size_value = document.querySelector("#Gemstonesize");
    var size = size_value.value;
    myImg.style.width = size+"px";
      myImg.style.height = size+"px";
  }
      function symbol_size() {
    var myImg = document.querySelector("#symbol_img");
    var size_value = document.querySelector("#Symbolsize");
    var size = size_value.value;
    myImg.style.width = size+"px";
      myImg.style.height = size+"px";
  }
  
  <!-- هذة الدالة تضيف الصورة المختارة من المنيو الى اللوح -->   
	function changeImageToNecklace(id){
img_type="Necklace";
<!-- تستقبل الدالة id وبحسب قيمتة تقرا مصدر الصورة وتضيفه -->
	var img_src = document.getElementById(id).src;
document.getElementById("myNB_img").src= img_src;
  document.getElementById('myNB_img').style.display ="block"; 


	}	
	function changeImageToBracelet(id){
img_type="Bracelet";
	var img_src = document.getElementById(id).src;

document.getElementById("myNB_img").src= img_src;
  document.getElementById('myNB_img').style.display ="block"; 


	}
	function changeCharm(id){
	var img_src = document.getElementById(id).src;
document.getElementById('charm_img').src = img_src;
  document.getElementById('charm_img').style.display ="block"; 
	

	}
	function changeGemstone(id){
	var img_src = document.getElementById(id).src;
document.getElementById('gemstone_img').src = img_src;
  document.getElementById('gemstone_img').style.display ="block"; 
	
	}
	function changeSymbol(id){
	var img_src = document.getElementById(id).src;
document.getElementById('symbol_img').src = img_src;
  document.getElementById('symbol_img').style.display ="block"; 
	
	}
	function changeBackground(id){
		var img_src = document.getElementById(id).src;
		document.getElementById('myCanvas').style.backgroundImage = "url('"+img_src+"')";
	
	}
	
	<!--  هذي الدالة مخصصة بتحريك المنيو الذي يظهر على جانب الصفحة -->
	function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
	<!--  هذي الدالة مخصصة باغلاق المنيو الذي يظهر على جانب الصفحة -->
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
	<!--  هذي الدالة لاضافة النص الى اللوح -->
function ttext(){
document.getElementById("myTextheader").innerHTML = document.getElementById("txt").value;
}
function tcolor(){
 var text = document.querySelector("#myTextheader");
    var colorinput = document.querySelector("#tclr");
    var color = colorinput.value;
  text.style.color = color;

}
function tsize(){
 var text = document.querySelector("#myTextheader");
    var sizev = document.querySelector("#tsize");
    var size = sizev.value;
   text.style.fontSize = size+"px";
}
	<!--  هذي الدالة لشفافية النص -->
function topc(){
 var text = document.querySelector("#myTextheader");
    var opcv = document.querySelector("#topc");
    var opc = opcv.value;
   text.style.opacity = "0."+opc;
}
	<!--  هذي الدالة لتغيير نوع الخط -->
   function ta() {
    var text = document.querySelector("#myTextheader");

   text.style.fontFamily = "Arial, Helvetica, sans-serif";
  }
  	<!--  هذي الدالة لتغيير نوع الخط -->
    function tf() {
    var text = document.querySelector("#myTextheader");

   text.style.fontFamily = "fantasy";
  }
  	<!--  هذي الدالة لتغيير نوع الخط -->
    function tm() {
    var text = document.querySelector("#myTextheader");

   text.style.fontFamily = " monospace";
  }
  function removeText(){
  document.getElementById("myTextheader").innerHTML= "";
  }

function changeBackgroundToWhite(){
    var myCanvas = document.querySelector("#myCanvas");
   
    myCanvas.style.backgroundColor = "#ffffff";
}
  	<!--  هذي الدالة لحذف صورة الخلفية -->
function remove_background(){
document.getElementById('myCanvas').style.backgroundImage = "url('')";
}

function remove_Symbol(){
  document.getElementById('symbol_img').src =  ""; 
   document.getElementById('symbol_img').style.display = "none";
}
function remove_Charm(){
  document.getElementById('charm_img').src =  ""; 
   document.getElementById('charm_img').style.display = "none";
}
function remove_Gemstone(){
  document.getElementById('gemstone_img').src =  ""; 
   document.getElementById('gemstone_img').style.display = "none";
}
function remove_imgNB(id){
if(img_type==id || id=="all"){
 document.getElementById('myNB_img').src =  ""; 
   document.getElementById('myNB_img').style.display = "none";
}
}


