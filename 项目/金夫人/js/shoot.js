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
var div1=document.getElementsByClassName("main_center1")[0];
var lis1=div1.getElementsByTagName("li");
var ul=div1.getElementsByTagName("ul")[0];
var center4=ul.getElementsByTagName("div");
var p=ul.getElementsByTagName("p");

var div2=document.getElementsByClassName("main_center3")[0];
var h3=div2.getElementsByTagName("h3")[0];

var p1=document.getElementsByClassName("main_top")[0];
var a=p1.getElementsByTagName("a");
console.log(a)

for (var i=0;i<lis1.length;i++) {
	lis1[i].onclick=function(){
		for (var i=0;i<center4.length;i++) {
			center4[i].className="";
			lis1[i].className="";
			lis1[i].children[1].innerHTML="+";
		}
		var k=this.getAttribute("zxl");
		lis1[k].children[1].innerHTML="-";	
		center4[k].className="active";
	    a[1].innerHTML=this.children[0].innerHTML;
	
	}
}

for (var i=0;i<p.length;i++) {
	p[i].onclick=function(){
		
		for (var i=0;i<p.length;i++) {
			p[i].style.borderBottom="";
			p[i].style.color="";
			p[i].className="";
		}
		this.style.borderBottom="1px solid #860917";
		this.style.color="#860917";
		a[2].innerHTML=this.innerHTML;
		h3.innerHTML=this.innerHTML;
	}
}

