var divimg = document.getElementsByClassName("img")[0];
var imgs = divimg.getElementsByTagName("img");
var span = divimg.getElementsByTagName("span")[0];
console.log(imgs)

  var j = 0;
   function lb() {
    j++;
    if (j == 3) {
    j = 0;
        }
  for (var i = 0; i < imgs.length-1; i++) {
  
      imgs[i].className = "";
     
    }
    imgs[j].className = "active";
}
 
var timer=setInterval(lb, 2000);
  
divimg.onmousemove = function () {
  clearInterval(timer);
}

divimg.onmouseout = function () {
  timer=setInterval(lb,2000);
}