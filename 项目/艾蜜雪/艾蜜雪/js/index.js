window.onload=function(){
	
	//轮播
	function f1(){
		var img=document.getElementById("imgs");
		var imgs=img.children;
		var ul=document.getElementById("ul");
		var lis=ul.children;
		var buttons=document.getElementsByTagName("button");
		var num=0;
		
		console.log(buttons);
		
		for(var i=0;i<lis.length;i++){
			lis[i].onclick=function(){
				num=this.getAttribute("dy");
				for(var i=0;i<lis.length;i++){
					lis[i].className="";
					imgs[i].className="";
				}
				this.className="back";
				imgs[num].className="img_1";
			}
		}
		
		for(var i=0;i<buttons.length;i++){
			buttons[i].onclick=function(){
				if(this.innerHTML=="&gt;"){
					num++;
					if(num==3){
						num=0;
					}
					for(var j=0;j<imgs.length;j++){
						lis[j].className="";
						imgs[j].className="";
					}
					lis[num].className="back";
					imgs[num].className="img_1";
				}else{
					num--;
					if(num==-1){
						num=2;
					}
					for(var j=0;j<imgs.length;j++){
						lis[j].className="";
						imgs[j].className="";
					}
					lis[num].className="back";
					imgs[num].className="img_1";
				}
			}
		}
		
		timer=setInterval(function(){
			num++;
			if(num==3){
				num=0;
			}
			for(var i=0;i<imgs.length;i++){
				lis[i].className="";
				imgs[i].className="";
			}
			lis[num].className="back";
			imgs[num].className="img_1";
		},2500);
	}
	f1();
	
	
	//设计团队
	function f2(){
		var xhr=getXhr();
		function getXhr(){
			var xhr=null;
			if(XMLHttpRequest){
				xhr=new XMLHttpRequest();
			}else{
				xhr=new ActiveXObject("Microsoft.XMLHttp");
			}
			return xhr;
		}
		xhr.open("GET","php/index1.php");
		xhr.send(null);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				var obj=JSON.parse(xhr.responseText);
				console.log(obj);
				
				obj.reverse();
				for(var i=obj.length-1;i>obj.length-5;i--){
					var div=document.createElement("div");
					div.className="people_1";
					
					var img=document.createElement("img");
					img.src=obj[i][0];
					div.appendChild(img);
					
					var p1=document.createElement("p");
					p1.innerHTML=obj[i][1];
					p1.className="name";
					div.appendChild(p1);
					
					var p2=document.createElement("p");
					p2.innerHTML=obj[i][2];
					div.appendChild(p2);
					
	//				console.log(obj[i])
					
					box1.appendChild(div);
				}
			}
		}
	}
	f2();
	
	
	//新闻动态
	function f3(){
		var xhr=getXhr();
		function getXhr(){
			var xhr=null;
			if(XMLHttpRequest){
				xhr=new XMLHttpRequest();
			}else{
				xhr=new ActiveXObject("Microsoft.XMLHttp");
			}
			return xhr;
		}
		xhr.open("GET","php/index2.php");
		xhr.send(null);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				var obj=JSON.parse(xhr.responseText);
				console.log(obj);
				
	//			obj.reverse();
				for(var i=obj.length-1;i>obj.length-5;i--){
					var div1=document.createElement("div");
					div1.className="news";
					
					var div2=document.createElement("div");
					div2.className="left_4";
					div1.appendChild(div2);
					
					var p1=document.createElement("p");
					p1.innerHTML=obj[i][0].slice(5,10);
					div2.appendChild(p1);
					
					var p2=document.createElement("p");
					p2.innerHTML=obj[i][0].slice(0,4);
					div2.appendChild(p2);
					
					var div3=document.createElement("div");
					div3.className="right_4";
					div1.appendChild(div3);
					
					var p3=document.createElement("p");
					p3.innerHTML=obj[i][1];
					div3.appendChild(p3);
					
					var p4=document.createElement("p");
					p4.innerHTML=obj[i][2];
					div3.appendChild(p4);
					
					box2.appendChild(div1);
				}
			}
		}
	}
	f3();
	
	
	
}
