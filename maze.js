var l=0//l=lose; this variable keeps track of whether the boders her touched
window.onload = function(){
		ex1();
		ex2();
		//ex3();
}

function ex1(){
	var el=document.getElementById('boundary1');
	el.addEventListener("mouseover",function(){
		el.setAttribute('class','boundary youlose');
		console.log("hov");
		});
}

function ex2(){
	var glory=document.querySelectorAll('div.boundary');
	var i = glory.length- 2;
	for (i; i >= 0; i--) {
		//Adds listener to each div.
		glory[i].addEventListener('mouseover',function(){			
			//glory[i].setAttribute('class','boundary youlose');
			/*glory[1].setAttribute('class' ,'boundary youlose');
			glory[2].setAttribute('class' ,'boundary youlose');
			glory[3].setAttribute('class' ,'boundary youlose');
			glory[4].setAttribute('class' ,'boundary youlose');
			glory[0].setAttribute('class' ,'boundary youlose');*/
			l+=1;//ex3 (increments whenever the borders are touched)
		});		
	};
	ex3();
}

function ex3(){
	var end=document.getElementById('end');
	end.addEventListener('mouseover', function(){
		if(l==1){ //checks whether the borders were touched before getting to the end
			alert("you Lose!");
		}
		else{
			alert("You Won!");
		}
	});
}


		