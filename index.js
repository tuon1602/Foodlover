var i =0;
var images=[];
var time=3000;

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