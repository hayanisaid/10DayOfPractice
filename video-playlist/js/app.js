
// var video=document.getElementById('playvid');
//  video.addEventListener('click',function(){
//  	videCnt=document.getElementById('srcVideo')
//  	videCnt.play();
//  	console.log(videCnt.duration % 100)
//  })
window.onload=(e)=>{
 setDefaultDuration();
}
 
var videos=document.getElementsByClassName('video-item');
var VideoList=[
 './videos/video1.mp4',
  './videos/video2.mp4',
   './videos/video3.mp4',
    './videos/video4.mp4'];
    videos.onclick=function(e){
    	alert(e)
    }

   for (let i=0 ;i <= videos.length; i++){
 	 
 	videos[i].addEventListener('click',(e)=>{

  	   let activeVideo=document.getElementById('srcVideo').src= VideoList[i];
  	   videCnt=document.getElementById('srcVideo')
		videCnt.play();
 	    
 	})
  }


function setDefaultDuration(){
	var videos=document.getElementsByClassName('video-item');
	for(let i=0; i <= videos.length ;i++){
		videos[i].currentTime=2;
	}
}

