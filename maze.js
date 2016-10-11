var l=0;//l=lose; this variable keeps track of whether the boders her touched
window.onload = function(){
	ex1();
	ex2();
	ex3();
	ex4();
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
	var i = glory.length- 2;
	for (i; i >= 0; i--) {
		//Adds listener to each div.
		glory[i].addEventListener('mouseover',function(){			
			//glory[i].setAttribute('class','boundary youlose');
			glory[1].setAttribute('class' ,'boundary youlose');
			glory[2].setAttribute('class' ,'boundary youlose');
			glory[3].setAttribute('class' ,'boundary youlose');
			glory[4].setAttribute('class' ,'boundary youlose');
			glory[0].setAttribute('class' ,'boundary youlose');
			l+=1;//ex3 (increments whenever the borders are touched)
		});		
	};
}

function ex3(){
	var end=document.getElementById('end');
	end.addEventListener('mouseover', function(){
		if(l>0){//checks whether the borders were touched
			alert("you Lose!");
		}
		else{
			alert("You Won!");
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
			glory[1].setAttribute('class' ,'boundary');
			glory[2].setAttribute('class' ,'boundary');
			glory[3].setAttribute('class' ,'boundary');
			glory[4].setAttribute('class' ,'boundary');
			glory[0].setAttribute('class' ,'boundary');
		})
	}
}

		