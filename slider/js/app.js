
/*init global Variables*/

var images=[
 './images/image1.jpg',
 './images/image2.jpg',
 './images/image3.jpg',
 './images/image4.jpg',
 './images/image5.jpg',
];
var count =0;

function next(){

	console.log('next')
	var sliderItem=
	document.getElementById("sliderItem");
	sliderItem.classList.add('fade')
	count++;
	if(count >= images.length){
		
		count=0;
		
	}
	sliderItem.src =images[count];

	
}
function prev(){
	console.log('preve ===>>')
	var sliderItem=
	document.getElementById("sliderItem");
	count--;
	if(count <0){
		count = images.length-1;
		}
	sliderItem.src =images[count];

	
	}
