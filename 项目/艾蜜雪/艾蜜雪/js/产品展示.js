window.onload=function(){
	var $lis=$($(".left_1")[0].children[1].children);
	
	console.log($(".right_1").children()[0])
	console.log($(".right_1").children()[1])
	console.log($(".new").children()[0].children[0].children[2].children[0].innerHTML)
	console.log(document.getElementsByClassName("new"))
	
	$lis.click(function(){
		if(this.innerHTML=="百搭风格"){
			for(var i=0;i<$lis.length;i++){
				$lis[i].className="";
				$(".right_1").children()[i].className="hide";
			}
			this.className="color_1";
			$(".right_1").children()[0].className="show";
			$(".new").children()[0].children[0].children[2].children[0].innerHTML="百搭风格";
		}else if(this.innerHTML=="韩版风格"){
			for(var i=0;i<$lis.length;i++){
				$lis[i].className="";
				$(".right_1").children()[i].className="hide";
			}
			this.className="color_1";
			$(".right_1").children()[1].className="show";
			$(".new").children()[0].children[0].children[2].children[0].innerHTML="韩版风格";
		}else if(this.innerHTML=="欧美风格"){
			for(var i=0;i<$lis.length;i++){
				$lis[i].className="";
				$(".right_1").children()[i].className="hide";
			}
			this.className="color_1";
			$(".right_1").children()[2].className="show";
			$(".new").children()[0].children[0].children[2].children[0].innerHTML="欧美风格";
		}else{
			for(var i=0;i<$lis.length;i++){
				$lis[i].className="";
				$(".right_1").children()[i].className="hide";
			}
			this.className="color_1";
			$(".right_1").children()[3].className="show";
			$(".new").children()[0].children[0].children[2].children[0].innerHTML="简约风格";
		}
	})
}
