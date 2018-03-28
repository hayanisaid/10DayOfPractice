
var videos=document.getElementsByClassName('item');

 for (let i=0 ;i <= videos.length; i++){
 	videos[i].addEventListener('click',(e)=>{
 		//console.log(activeVideo.src + '==>>current Src')
 		let targetSrc=e.target.src + 'this is target src';
 	   let activeVideo=document.getElementById('srcVideo').src=e.target.src;
 	  //console.log(activeVideo.src + '==>new srcc')
 	  //activeVideo.play();
 	})
 }