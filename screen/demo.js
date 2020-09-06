import React from "react";
import ReactDOM from "react-dom";
import MediaObject from "./MediaObje.js";
 
function Example(){

	var storeName = "狐";
	var impression = "美味しい";
	var mutter = "内装がオシャレでした。中身はそんなに良くなかったかも";
	return (<div>
		<MediaObject storeName={storeName} impression={impression}  mutter={mutter} />
		</div>
	);
}
 

export default Example;
