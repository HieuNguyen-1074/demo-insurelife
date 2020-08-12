

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
 const a = document.getElementById('product-container');
 const elementButtonLeft = document.getElementById('left');
  const elementButtonRight = document.getElementById('right');
  const elementProductContainer= document.getElementById('product-container');
  const elementProductImg= document.getElementById('product-img');
  const allElementProductImgSlect =  document.querySelectorAll('.product-img-slect');
function sliderProduct(){
  
 //  var percentwidth_slide=100/4;
 //  num_page=Math.ceil(allElementProductImgSlect.length/4 );
 let widthElementProductContainer= window.getComputedStyle(elementProductContainer);
 widthElementProductContainer=widthElementProductContainer.getPropertyValue('width');
 widthElementProductContainer = widthElementProductContainer.slice(0,widthElementProductContainer.length - 2);
console.log(elementButtonRight)
widthElementProductContainer = (Number(widthElementProductContainer));
  allElementProductImgSlect.forEach((el,index )=> {
     el.style.width=(widthElementProductContainer/4)+'px';
  });
  var indexSlice = 0;
  var s =1;
  
  elementButtonRight.onclick = ()=>{
      if(indexSlice === 1){
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
          console.log('nay2');
      }
      else
    {  elementProductImg.style.transform = `translateX(${widthElementProductContainer * p}px)`;
      p++;
      --s;
      indexSlice--;
      }
  }
var e = window.getComputedStyle(elementProductImg).height;
console.log(e);
elementProductContainer.style.height = `${e}`;
}
function main(){
  changBackgroundWrapper();
  sliderProduct();
}
main();