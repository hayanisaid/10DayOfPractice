//Get the modal

var modal=document.getElementById("modalWrapper");

var openModalBtn=document.getElementById("opneModalbtn");




openModalBtn.addEventListener('click',()=>{
	modal.style.display="block"
});
/*Toggle method*/
openModalBtn.addEventListener('click',()=>{
	modal.classList.toggle('isActive')
});

function closeModal(){
	modal.classList.toggle('isActive')
}

// function closeModal(){
// 	modal.style.display="none";
// }
