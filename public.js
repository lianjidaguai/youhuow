//判断一数是否是素数
function isPrimery(num){
	for (var i = 2; i < num; i++) {
		if(num % i == 0){
			//只要执行了这里就表示 num不是素数
			return false;
		}
	}
	return true;
}
//通过id名称获取元素
function $id(idName){
	return document.getElementById(idName);
}
//获取随机整数 
function getRand(minNum,maxNum){
	return parseInt(Math.random()*(maxNum-minNum+1)) + minNum;
};
//随机获取验证码
function getYZM(num){
	//由数字，字母（分大小写）
	//以上字符由ASCII码表来
	//随机而来
	var yzm = "";
	for (var i = 0; i < num; i++) {
		//获取数字或字母（分大小写）的字符
		//随机获取ASCII码
		var rand = getRand(48,122);
		if((rand >= 58 && rand <= 64) || (rand >= 91 && rand <= 96)){
			i--;
		}else{
			yzm += String.fromCharCode(rand);
		}
	}
	return yzm;
}
function dateToString(date){//date接收一个时间对象
	//2019年04月24日 15:40:30 星期三
	var dateStr = "";
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var h = date.getHours();
	var min = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	
	dateStr += y + "年" + db(m) + "月" + db(d) + "日";
	dateStr += " "+ db(h) + ":" + db(min) + ":" + db(s);
	dateStr += week[w];
	
	return dateStr;
}
function db(num){
	return num < 10 ? 0 + "" + num : num; 
}
//获取两个时间的时间差的秒数。
function diffTime(startTime,endTime){//startTime/endTime是时间对象
	return (endTime.getTime() - startTime.getTime())/1000;
}
//随机获取十六进制颜色
function getColor(){
	var color = "0123456789abcdef";
	var str = "#";
	for (var i = 0; i < 6; i++) {
		var rand = getRand(0,15);
		str += color.charAt(rand);
	}
	return str;
}
//跨浏览器兼容ie8及以下浏览器实现通过class的名称获取元素集合。
function getByClassName(cName){
	var nodeArr = [];//保存所有的以cName命名的元素。
	var ele = document.getElementsByTagName("*");
	for (var i = 0; i < ele.length; i++) {
		if(ele[i].className == cName){
		//if(ele[i].getAttribute("class") == cName){
			nodeArr.push(ele[i]);
		}
	}
	return nodeArr;
}
//跨浏览器兼容ie8实现获取所有子节点的元素节点集合。
function getChildNodes(ele){
	//跨浏览器获取ele的所有子节点的元素节点不包括注释
	var childs = ele.childNodes;
	var childNodesArr = [];
	if(childs.length > 0){//只有子元素不为0时，才需要处理
		for (var i = 0; i < childs.length; i++) {
			//遍历所有的子元素
			//判断是元素节点，需要把元素节点保存到节点数组 中
			if(childs[i].nodeType == 1){
				childNodesArr.push(childs[i]);
			}
		}
	}
	//console.log(childs.length);
	return childNodesArr;
}
//跨浏览器兼容ie8实现获取事件对象的button属性值。
function getButton(eve){
	if(eve){//这个实参存在，说明是现代浏览器
		return eve.button;
	}else{//ie8
		var but = window.event.button;
		switch(but){
			case 1:
				return 0;
			case 4:
				return 1;
			case 2:
				return 2;
		}
	}
}
//跨浏览器兼容ie8获取鼠标距离浏览器可视区+浏览器滚走的距离。
function getPage(e){
	var sTop = document.documentElement.scrollTop || document.body.scrollTop;
	var sLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	return {
		left:e.clientX + sLeft,
		top:e.clientY + sTop
	}
}
//跨浏览器兼容ie8实现事件监听
function addEvent(ele,event,fn,flag){
	if(ele.addEventListener){//现代浏览器
		if(flag){//如果传递了flag
			ele.addEventListener(event,fn,flag);
		}else{
			ele.addEventListener(event,fn);
		}
	}else{//ie8
		ele.attachEvent("on"+event,fn);
	}
}
//跨浏览器兼容ie8获取元素外部样式
function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}
//匀速运动
var timer = null;
function animate1(ele,target,speedTime){
	clearInterval(timer);
	timer = setInterval(function(){
		//缓冲运动的在于speed的变化 ，由快到慢
		//var speed = target - ele.offsetLeft > 0 ? 5 : -5;
		//因为offsetLeft会把小数直接去掉,所以永远达不到目标值
		var speed = (target - ele.offsetLeft)/10;
		//当speed为负数的小数时，会直接把小数去掉 -0
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		console.log(speed,target,ele.offsetLeft);
		//if(Math.abs(target - ele.offsetLeft) < 5){//解决目标值问题
		if(ele.offsetLeft == target){
			clearInterval(timer);
		}else{
			ele.style.left = ele.offsetLeft + speed + "px";
		}	
	},speedTime);
}
//缓冲运动
var timer = null;
function animate2(ele,attr,target,speedTime){
	clearInterval(timer);
	timer = setInterval(function(){
		var speed = (target - parseInt(getStyle(ele,attr)))/10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(parseInt(getStyle(ele,attr)) == target){
			clearInterval(timer);
		}else{
			ele.style[attr] = parseInt(getStyle(ele,attr)) + speed + "px";
		}	
	},speedTime);
}		
function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}
//多物体运动
function animate3(ele,attr,target,speedTime){
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var speed = (target - parseInt(getStyle(ele,attr)))/10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(parseInt(getStyle(ele,attr)) == target){
			clearInterval(ele.timer);
		}else{
			ele.style[attr] = parseInt(getStyle(ele,attr)) + speed + "px";
		}	
	},speedTime);
}

function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}

//处理图片透明度运动
function animate4(ele,attr,target,speedTime){
	
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var current = 0;
		if(attr == "opacity"){
			//将透明度扩大100倍来操作
			current = getStyle(ele,attr) * 100;
		}else{
			current = parseInt(getStyle(ele,attr))
		}
		var speed = (target - current)/10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(current == target){
			clearInterval(ele.timer);
		}else{
			if(attr == "opacity"){
				ele.style.opacity = (current + speed)/100;
			}else{
				ele.style[attr] = current + speed + "px";
			}
		}	
	},speedTime);
}
function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}

//多属性运动
function animate5(ele,params,speedTime){

	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		//问题：最快到达目标的属性会把其它属性的定时器一起清除，会使得只有一个属性到达目标值 
		//解决办法：定义一个控制器，控制所有的属性都到达目标值后，再清除定时器。
		var flag = true;//表示所有的属性都到达 目标值 了。//false,表示至少还有一个属性还没有到达目标值。
		//在属性还没有到达目标值 将flag设置为false.
		for(var attr in params){
			//attr params[attr] = target
		
			var current = 0;
			if(attr == "opacity"){
			//将透明度扩大100倍来操作
				current = getStyle(ele,attr) * 100;
			}else{
				current = parseInt(getStyle(ele,attr));
			}
			var speed = (params[attr] - current)/10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			console.log(current,params[attr],speed);
			if(current != params[attr]){
				//这里是属性没有到达目标值时执行
				//将flag设置为false
				flag = false;//表示有属性没有到达目标值
				//clearInterval(ele.timer);
			}
			if(attr == "opacity"){
				ele.style.opacity = (current + speed)/100;
			}else if(attr == "zIndex"){
				ele.style.zIndex = params[attr];
			}else{
				ele.style[attr] = current + speed + "px";
			}
		}
		if(flag){//所有的属性都到达目标值
			clearInterval(ele.timer);
		}
	},speedTime);
}
function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}
//回调函数运动
function animate6(ele,params,speedTime,callBack){
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var flag = true;//表示所有的属性都到达 目标值 了。//false,表示至少还有一个属性还没有到达目标值。
		for(var attr in params){
			var current = 0;
			if(attr == "opacity"){
			//将透明度扩大100倍来操作
				current = getStyle(ele,attr) * 100;
			}else{
				current = Math.ceil(parseFloat(getStyle(ele,attr)));
			}
			var speed = (params[attr] - current)/10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//console.log(current,params[attr],speed);
			if(current != params[attr]){
				flag = false;//表示有属性没有到达目标值
			}
			if(attr == "opacity"){
				ele.style[attr] = (current + speed)/100;
			}else if(attr == "zIndex"){
				ele.style[attr] = params[attr];
			}else{
				ele.style[attr] = current + speed + "px";
			}
		}
		if(flag){//属性都到达目标值
			clearInterval(ele.timer);
			//在这里开启链式运动
			if(callBack){
				callBack();
			}
		}
	},speedTime);
}
function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}