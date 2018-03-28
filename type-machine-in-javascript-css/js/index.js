// we can use Array of string here
//var arr=['M','y','N','a','m','e','i','s','S','a','i','d'];
var string="Hello My Name is Hayani Said I'm Web Developer :)";

var rondom=Math.floor(Math.random()*12);


var type=document.getElementById("type");
var i=0;



 var int=setInterval(function(){
 
   //console.log(arr[i]);
  
   type.append(string[i]);    
  
  if(i==string.length-1){
   clearInterval(int);
 }
  i+=1;

 
},200)