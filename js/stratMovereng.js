function startMovereng(obj){
//	var timer = null;
//	var disX = 0;
//	var disY = 0;
//	var prevX = 0;
//	var prevY = 0;
//	var iSpeedX = 0;
//	var iSpeedY = 0;
	obj.onmousedown = function(ev){
			var ev = ev || event;
			disX = ev.clientX - obj.offsetLeft;
			disY = ev.clientY - obj.offsetTop;
			
			prevX = ev.clientX;
			prevY = ev.clientY;
			
			clearInterval(timer2);
			
			document.onmousemove = function(ev){
				var ev = ev || event;
				obj.style.left = ev.clientX - disX + 'px';
				obj.style.top = ev.clientY - disY + 'px';
				
				iSpeedX = ev.clientX - prevX;
				iSpeedY = ev.clientY - prevY;
				
				prevX = ev.clientX;
				prevY = ev.clientY;
				
			};
			
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
				
				startMove(obj);
				
			};
			
			return false;
			
	};
}
function startMove(obj){
	clearInterval(timer2);
	timer2 = setInterval(function(){
		iSpeedY += 3;
		
		var L = obj.offsetLeft + iSpeedX;
		var T = obj.offsetTop + iSpeedY;
		console.log(T)
		if(L<0){
			L = 0;
			iSpeedX *= -1;
			iSpeedX *= 0.75;
		}
		else if(L>document.documentElement.clientWidth - obj.offsetWidth){
			L = document.documentElement.clientWidth - obj.offsetWidth;
			iSpeedX *= -1;
			iSpeedX *= 0.75;
		}
		
		if(T<0){
			T = 0;
			iSpeedY *= -1;
			iSpeedY *= 0.75;
		}
		else if(T>document.documentElement.clientHeight - obj.offsetHeight){
			T = document.documentElement.clientHeight - obj.offsetHeight;
			iSpeedY *= -1;
			iSpeedY *= 0.75;
			iSpeedX *= 0.75;
		}
		
		obj.style.left = L + 'px';
		obj.style.top = T + 'px';
		
	},30);
}