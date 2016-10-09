
window.onload = function(){
		var el=document.getElementById('boundary1');
		 el.addEventListener("mouseover",function(){
		 	el.setAttribute('class','boundary youlose');
		});
	
	
		var glory=document.querySelectorAll('div.boundary');
		var i = glory.length- 2;
		for (i; i >= 0; i--) {
			//Adds listener to each div.
			glory[i].addEventListener('mouseover',function(){
				glory[1].setAttribute('class' ,'boundary youlose');
				glory[2].setAttribute('class' ,'boundary youlose');
				glory[3].setAttribute('class' ,'boundary youlose');
				glory[4].setAttribute('class' ,'boundary youlose');
				glory[5].setAttribute('class' ,'boundary youlose');
				glory[0].setAttribute('class' ,'boundary youlose');
				});
				
			};
	
} 