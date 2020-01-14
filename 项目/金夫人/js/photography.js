var bannerdiv=document.getElementsByClassName("banner")[0];
var btns=bannerdiv.getElementsByTagName("button");
var imgs=bannerdiv.getElementsByTagName("img");
var lis=bannerdiv.getElementsByTagName("li");
	j=0;
for(var i=0;i<btns.length;i++){
	btns[i].onclick=function(){
		
		if (this.getAttribute("zxl")=="1"){
			
			btnr();
			
		} else{
			j--;
			if(j==-1){
				j=6;
			}
			for(var i=0;i<imgs.length-1;i++){
				imgs[i].className="";
				lis[i].className="";
			}
			imgs[j].className="active";
			lis[j].className="active";
			
	}


	}
}

for (var i=0;i<lis.length;i++) {
	lis[i].onclick=function(){
		for (var i=0;i<lis.length;i++) {
			lis[i].className="";
			imgs[i].className="";
		}
		this.className="active";
		j=this.getAttribute("zxl");
		console.log(j);
		imgs[j].className="active";
	}
}



timer=setInterval(btnr,2000);

bannerdiv.onmousemove=function(){
	clearInterval(timer);
}

bannerdiv.onmouseout=function(){
	timer=setInterval(btnr,2000);
}




function btnr(){
	j++;
			if(j==7){
				j=0;
			}
			for(var i=0;i<imgs.length-1;i++){
				imgs[i].className="";
				lis[i].className="";
			}
			imgs[j].className="active";
			lis[j].className="active";
}


//切换
var center=document.getElementsByClassName("main_center1")[0];
var lis1=center.getElementsByTagName("li");
var top1=document.getElementsByClassName("main_top")[0];
var a1=top1.getElementsByTagName("a");
var divs2=document.getElementsByClassName("main_center5")[0];
var divs3=divs2.getElementsByTagName("div");
for (var i=0;i<lis1.length;i++) {
	lis1[i].onclick=function(){
		for (var i=0;i<lis1.length;i++){
			lis1[i].children[1].innerHTML="+";
			divs3[i].className="";
			lis1[i].children[0].style.color="";
			lis1[i].children[0].className="";
		}
		
		this.children[1].innerHTML="-";
		a1[1].innerHTML=this.children[0].innerHTML;
		var k=this.getAttribute("zxl");
		divs3[k].className="active";
		this.children[0].style.color="red";
	}
}