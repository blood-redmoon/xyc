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