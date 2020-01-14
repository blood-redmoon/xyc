window.onload=function(){
	var $btn_1=$($(".bottom_1")[0].children[0]);
	var $btn_2=$($(".bottom_1")[0].children[3]);
	
	var $div_1=($(".right_1")[0].children[0]);
	var $div_2=($(".right_1")[0].children[1]);
	
	var $span_1=$(".bottom_1")[0].children[1];
	var $span_2=$(".bottom_1")[0].children[2];
	
	
	console.log($span_1)
	console.log($span_2)
	
	
	$btn_1.click(function(){
		$span_1.className="color_2";
		$span_2.className="";
		$div_2.className="hide";
		$div_1.className="show";
	})
	$btn_2.click(function(){
		$span_1.className="";
		$span_2.className="color_2";
		$div_1.className="hide";
		$div_2.className="show";
	})
}
