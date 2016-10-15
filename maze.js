var l=0;//l=lose; this variable keeps track of whether the boders her touched
window.onload = function(){
	ex1();
	ex2();
	ex3();
	ex4();
	ex6();
}

function ex1(){
	var el=document.getElementById('boundary1');
	el.addEventListener("mouseover",function(){
		el.setAttribute('class','boundary youlose');
		l+=1;//ex3 (increments whenever the border is touched
		});
}

function ex2(){
	var glory=document.querySelectorAll('div.boundary');
	var i = glory.length-2;
	for (i; i >= 0; i--) {
		//Adds listener to each div.
		glory[i].addEventListener('mouseover',function(){
			var glory=document.querySelectorAll('div.boundary');
			var i = glory.length-2;	
			for (i; i >= 0; i--) {
				glory[i].setAttribute('class','boundary youlose');
				l+=1;//ex3 (increments whenever the borders are touched)
			}
		});		
	};
}

function ex3(){
	var end=document.getElementById('end');
	end.addEventListener('mouseover', function(){
		if(l>0){//checks whether the borders were touched
			document.getElementById('status').innerHTML='You Lose! Click the "S" to restart the game';//ex5 On-page status update.
		}
		else{
			//alert("You Won!");
			document.getElementById('status').innerHTML='You Won!\nClick the "S" to restart the game.';//ex5 On-page status update.
		}
	});
}

function ex4(){
	var glory=document.querySelectorAll('div.boundary');
	var i = glory.length- 2;
	for (i; i >= 0; i--) {
		var start=document.getElementById('start');
		start.addEventListener('click',function(){
			l=0;
			var glory=document.querySelectorAll('div.boundary');
			var i = glory.length-2;	
			for (i; i >= 0; i--) {
				glory[i].setAttribute('class','boundary');
			document.getElementById('status').innerHTML='Move your mouse over the "S" to begin.';
			}
		});
	}
}

function ex6(evnt){

	var start=document.getElementById('start');
	var maze=document.getElementsByTagName("body");
	var x=0;
	var y=0;
	var lft=0;
	var rht=0;
	var wdt=0;
	var hgt=0;
	start.addEventListener('click', function(event){
		x=event.clientX;
		y=event.clientY;
		//console.log('y\t'+y)
	});
	maze.addEventListener('mousemove', function(){
	lft=maze.offsetLeft;
	top=maze.offsetTop;
	wdt=maze.offsetWidth;
	hgt=maze.offsetHeight;
	console.log('x'+x)
	console.log('y'+y)
	console.log('lft'+lft)
	console.log('top'+rht)
	console.log('wdt'+wdt)
	console.log('hgt'+hgt)
		if(x>lft && x>wdt && y>top && y<hgt){			
			var glory=document.querySelectorAll('div.boundary');
			var i = glory.length-2;	
			for (i; i >= 0; i--) {
				glory[i].setAttribute('class','boundary youlose');
			}
		}

		else{
			console.log('No cheat')
			}
	});

}	