

function changBackgroundWrapper(){
    const elementWrapper = document.getElementById('wrapper');
    let count = 0;
    setInterval(()=>{
       if(count < 2){
           count++;
           elementWrapper.style.backgroundImage = `url(../images/banner${count}.jpg)`;
       }
       else{
        elementWrapper.style.backgroundImage = `url(../images/banner${count}.jpg)`;
        count = 0;
       }
    },1000);
}
 
function sliderProduct(numberElement){
  const a = document.getElementById('product-container');
 const elementButtonLeft = document.getElementById('left');
  const elementButtonRight = document.getElementById('right');
  const elementProductContainer= document.getElementById('product-container');
  const elementProductImg= document.getElementById('product-img');
  const allElementProductImgSlect =  document.querySelectorAll('.product-img-slect');
  let numberPage = Math.ceil(allElementProductImgSlect.length/numberElement);
 //  var percentwidth_slide=100/4;
 //  num_page=Math.ceil(allElementProductImgSlect.length/4 );
 let widthElementProductContainer= window.getComputedStyle(elementProductContainer);
 widthElementProductContainer=widthElementProductContainer.getPropertyValue('width');
 widthElementProductContainer = widthElementProductContainer.slice(0,widthElementProductContainer.length - 2);
console.log(elementButtonRight)
widthElementProductContainer = (Number(widthElementProductContainer));
  allElementProductImgSlect.forEach((el,index )=> {
     el.style.width=(widthElementProductContainer/numberElement)+'px';
  });
  var indexSlice = 0;
  var s =1;
  
  elementButtonRight.onclick = ()=>{
      if(indexSlice === numberPage - 1 ){
          console.log('nay');
      }
      else{
      elementProductImg.style.transform = `translateX(-${widthElementProductContainer * s}px)`;
      ++s;
      p--;
      indexSlice++;
     }
  }
  var p =1;
  
  elementButtonLeft.onclick = ()=>{
     if(indexSlice === 0){
      }
      else
    { 
       elementProductImg.style.transform = `translateX(${widthElementProductContainer * p}px)`;
      p++;
      --s;
      indexSlice--;
      }
  }
var e = window.getComputedStyle(elementProductImg).height;
console.log(e);
elementProductContainer.style.height = `${e}`;
}
function runSliderProduct(){
  // console.log(document.documentElement.clientWidth);
  if( document.documentElement.clientWidth <  600){
    sliderProduct(2);
  }
  else if( document.documentElement.clientWidth  >  600 &&  document.documentElement.clientWidth  < 900){
    sliderProduct(3);
  }
  else{
  sliderProduct(4);
  }
}
function hiddenNavbar(){
  const elementButtonMenu = document.getElementById('navbar-btn-menu');
  const elementNavbarContainer = document.getElementById('navbar-container');
  elementButtonMenu.onclick = ()=>{
    elementButtonMenu.classList.toggle('fa-times');
    elementNavbarContainer.classList.toggle('active-navbar');
  }
}
function main(){
  runSliderProduct();
  hiddenNavbar();
}
main();