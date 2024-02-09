
var pic=document.getElementById('pic');
var uplode=document.getElementById('uplode');

var Saturate=document.getElementById('Saturate');
var Constrant=document.getElementById('Constrant');
var Brightness=document.getElementById('Brightness');
var Sepia=document.getElementById('Sepia');
var Grayscale=document.getElementById('Grayscale');
var Blur=document.getElementById('Blur');
var HueRotate=document.getElementById('HueRotate');

var filterr=[Saturate,Constrant,Brightness,Sepia,Grayscale,Blur,HueRotate];
var inputt=document.querySelectorAll('ul li input');


var Download2=document.getElementById('Download2');
var Reset=document.getElementById('Reset');

var box_img=document.querySelector('img');

//*******onload */
onload=()=>{
    Download.style.display='none';
    Reset.style.display='none';
    box_img.style.display='none';

}
//**************** */

//uplode fille*********
uplode.onchange=()=>{
    reset();
    Download.style.display='block';
    Reset.style.display='block';
    box_img.style.display='block';
    let file=new FileReader();
    file.readAsDataURL(uplode.files[0]);

    file.onload=function(){
        pic.src=file.result;
    }
  
}
//********* *


//*******fo effect filter */
inputt.forEach(item=>{

    item.addEventListener('input',()=>{
        
        pic.style.filter = `saturate(${Saturate.value}%)
        contrast(${Constrant.value}%)
        brightness(${Brightness.value}%)
        sepia(${Sepia.value}%)
        grayscale(${Grayscale.value})
        blur(${Blur.value}px)
        hue-rotate(${HueRotate.value}deg) 
        `;
        
    })

})
 //********************* */

 Reset.onclick=function (){
    reset();
 }



 //*****func reset */
 function reset(){
    pic.style.filter='none';
    
    Saturate.value='100';
    Constrant.value='100';
    Brightness.value='100';
    Sepia.value='100';

    Grayscale.value='0';
    Blur.value='0';
    HueRotate.value='0';
    

 }
 //************** */

 Download2.onclick=()=>{
    Download2.href=pic.src;
 }
