window.onload=function(){
	var $lis=$($(".left_1")[0].children[1].children);
	
	console.log($(".right_1").children()[0])
	console.log($(".right_1").children()[1])
	console.log($(".new").children()[0].children[0].children[2].children[0].innerHTML)
	console.log(document.getElementsByClassName("new"))
	
	$lis.click(function(){
		if(this.innerHTML=="发展历程"){
			for(var i=0;i<$lis.length;i++){
				$lis[i].className="";
				$(".right_1").children()[i].className="hide";
			}
			this.className="color_1";
			$(".right_1").children()[0].className="show";
			$(".new").children()[0].children[0].children[2].children[0].innerHTML="发展历程";
		}else{
			for(var i=0;i<$lis.length;i++){
				$lis[i].className="";
				$(".right_1").children()[i].className="hide";
			}
			this.className="color_1";
			$(".right_1").children()[1].className="show";
			$(".new").children()[0].children[0].children[2].children[0].innerHTML="品牌介绍";
		}
	})
}
