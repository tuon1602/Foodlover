var i =0; //starting point
var images=[]; // khai bao mang
var time=3000; // 3s

images[0] ='a_1.png';
images[1] ='a_2.png';
images[2] ='a_3.png';
images[3] ='a_4.png';

//change img
function changeImg()
{
    document.bg_image_slider.src = images[i];
    if(i< images.length -1)
    {
        i++
    }
    else
    {
        i=0;
    }
    setTimeout("changeImg()",time)
}

window.onload = changeImg;

$(document).ready(function(){
    $(".promotion-pic").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><ion-icon name='chevron-back'></ion-icon></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><ion-icon name='chevron-forward'></ion-icon></button>",
    });
  });