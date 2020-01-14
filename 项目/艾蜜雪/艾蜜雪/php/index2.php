<?php
	$conn=mysqli_connect("127.0.0.1","root","","aimixue",3306);
	mysqli_query($conn,"SET NAMES UTF8");
	$sql="SELECT COUNT(*) FROM news";
	
	$result=mysqli_query($conn,$sql);
	
	$row=mysqli_fetch_row($result);
	
	$num=$row[0]-4;
	
	$sql="SELECT * FROM news LIMIT $num,4";
	
	$result=mysqli_query($conn,$sql);
	$arr=[];
	while(($row=mysqli_fetch_row($result))!=null){
		array_push($arr,$row);
	}
	echo JSON_encode($arr);
?>