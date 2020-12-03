setInterval(Clock,1000)
let hHand=document.querySelector(".hourhand");
// console.log(hHand);
let mHand=document.querySelector(".minhand");
let sHand=document.querySelector(".sechand");

function Clock()
{
 let d = new Date();
 let h= d.getHours();
 let m= d.getMinutes();
 let s= d.getSeconds();
 let hr=30*h+m/2;
 let mr=6*m;
 let sr=6*s;
 rotate(hHand,hr);
 rotate(mHand,mr);
 rotate(sHand,sr);
 document.getElementById('digital').innerHTML = h+':'+m+':'+s;

}

function rotate(element,rotatingHand){
	element.style.setProperty('--rotation',rotatingHand);

}