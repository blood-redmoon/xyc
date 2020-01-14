window.onload=function(){
	var $lis=$($(".left_1")[0].children[1].children);
	
//	console.log($(".right_1").children()[0])
//	console.log($(".right_1").children()[1])
//	console.log($(".new").children()[0].children[0].children[2].children[0].innerHTML)
//	console.log(document.getElementsByClassName("new"))
//	console.log($(".bottom_3")[0])
	$lis.click(function(){
		if(this.innerHTML=="刘清扬"){
			for(var i=0;i<$lis.length;i++){
				$lis[i].className="";
				$(".right_1").children()[i].className="hide";
			}
			this.className="color_1";
			$(".right_1").children()[0].className="show";
			$(".new").children()[0].children[0].children[2].children[0].innerHTML="刘清扬";
			
		}else if(this.innerHTML=="韩璐璐"){
			for(var i=0;i<$lis.length;i++){
				$lis[i].className="";
				$(".right_1").children()[i].className="hide";
			}
			this.className="color_1";
			$(".right_1").children()[1].className="show";
			$(".new").children()[0].children[0].children[2].children[0].innerHTML="韩璐璐";
			f2();
		}else if(this.innerHTML=="周翔宇"){
			for(var i=0;i<$lis.length;i++){
				$lis[i].className="";
				$(".right_1").children()[i].className="hide";
			}
			this.className="color_1";
			$(".right_1").children()[2].className="show";
			$(".new").children()[0].children[0].children[2].children[0].innerHTML="周翔宇";
			f3();
		}else{
			for(var i=0;i<$lis.length;i++){
				$lis[i].className="";
				$(".right_1").children()[i].className="hide";
			}
			this.className="color_1";
			$(".right_1").children()[3].className="show";
			$(".new").children()[0].children[0].children[2].children[0].innerHTML="罗峥";
			f4();
		}
	})
	
	
	
	
	f5();
	
	//hide1
	var $btn_1=$($(".bottom_2")[0].children[0]);
	var $btn_2=$($(".bottom_2")[0].children[3]);
	
	var $div_1=($(".bottom_1")[0].children[1]);
	var $div_2=($(".bottom_1")[0].children[2]);
	
	var $span_1=$(".bottom_2")[0].children[1];
	var $span_2=$(".bottom_2")[0].children[2];
	
	$btn_1.click(function(){
		$span_1.className="color_2";
		$span_2.className="";
		$div_1.className="clothes show";
		$div_2.className="clothes hide";
	})
	$btn_2.click(function(){
		$span_1.className="";
		$span_2.className="color_2";
		$div_1.className="clothes hide";
		$div_2.className="clothes show";
	})
	
	
	
	function f2(){//hide2
		f5();
		
		var $btn_3=$($(".bottom_3")[0].children[0]);
		var $btn_4=$($(".bottom_3")[0].children[2]);
		var num=0;
		
		$btn_3.click(function(){
			num--;
			if(num==-1){
				num=2;
			}
			f1();
		})
		$btn_4.click(function(){
			num++;
			if(num==3){
				num=0;
			}
			f1();
		})
		function f1(){
			for(var i=0;i<$(".imgs_1")[0].children.length;i++){
				$(".spans_1")[0].children[i].className="";
				$(".imgs_1")[0].children[i].className="clothes hide";
			}
			$(".spans_1")[0].children[num].className="color_2";
			$(".imgs_1")[0].children[num].className="clothes show";
		}
	}
	
	
	function f3(){//hide3
		f5();
		
		var $btn_5=$($(".bottom_4")[0].children[0]);
		var $btn_6=$($(".bottom_4")[0].children[2]);
		var num=0;
		
		$btn_5.click(function(){
			num--;
			if(num==-1){
				num=2;
			}
			f1();
		})
		$btn_6.click(function(){
			num++;
			if(num==3){
				num=0;
			}
			f1();
		})
		function f1(){
			for(var i=0;i<$(".imgs_2")[0].children.length;i++){
				$(".spans_2")[0].children[i].className="";
				$(".imgs_2")[0].children[i].className="clothes hide";
			}
			$(".spans_2")[0].children[num].className="color_2";
			$(".imgs_2")[0].children[num].className="clothes show";
		}
	}
	
	function f4(){
		f5();
		
		var $btn_7=$($(".bottom_5")[0].children[0]);
		var $btn_8=$($(".bottom_5")[0].children[2]);
		var num=0;
		
		$btn_7.click(function(){
			num--;
			if(num==-1){
				num=2;
			}
			f1();
		})
		$btn_8.click(function(){
			num++;
			if(num==3){
				num=0;
			}
			f1();
		})
		function f1(){
			for(var i=0;i<$(".imgs_3")[0].children.length;i++){
				$(".spans_3")[0].children[i].className="";
				$(".imgs_3")[0].children[i].className="clothes hide";
			}
			$(".spans_3")[0].children[num].className="color_2";
			$(".imgs_3")[0].children[num].className="clothes show";
		}
	}
	
	function f5(){
		//切换时把另外几个的btn和图片调到第一个的位置
		//hide1
		$span_1.className="color_2";
		$span_2.className="";
		$div_1.className="clothes show";
		$div_2.className="clothes hide";
		//hide2
		for(var i=0;i<$(".imgs_1")[0].children.length;i++){
			$(".spans_1")[0].children[i].className="";
			$(".imgs_1")[0].children[i].className="clothes hide";
		}
		$(".spans_1")[0].children[0].className="color_2";
		$(".imgs_1")[0].children[0].className="clothes show";
		//hide3
		for(var i=0;i<$(".imgs_2")[0].children.length;i++){
			$(".spans_2")[0].children[i].className="";
			$(".imgs_2")[0].children[i].className="clothes hide";
		}
		$(".spans_2")[0].children[0].className="color_2";
		$(".imgs_2")[0].children[0].className="clothes show";
		//hide4
		for(var i=0;i<$(".imgs_3")[0].children.length;i++){
			$(".spans_3")[0].children[i].className="";
			$(".imgs_3")[0].children[i].className="clothes hide";
		}
		$(".spans_3")[0].children[0].className="color_2";
		$(".imgs_3")[0].children[0].className="clothes show";
	}
}
