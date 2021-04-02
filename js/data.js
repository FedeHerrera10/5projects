/* Open and close navbar */

const $btnMenu = document.getElementById('btn-menu');
const $navbar = document.getElementById('navbar');
const $sliderLeft = document.querySelector('#sliderLeft');
const $sliderRigth = document.querySelector('#sliderRigth');
const $container = document.querySelectorAll('.slider');

let currentSlide =1;
let currentX = 0;


$btnMenu.addEventListener('click', () => {
    $navbar.classList.toggle('is-active');
})


$sliderLeft.style.display = 'none';

$sliderRigth.addEventListener('click' ,() => {
    $sliderLeft.style.display = 'block';
    if(currentSlide < 2){
        currentSlide +=1;
        currentX +=100;
        translate();
    }

    if(currentSlide == 2){
    $sliderRigth.style.display = 'none';
    }
})

$sliderLeft.addEventListener('click' ,() => {
    $sliderRigth.style.display = 'block';
    
    if(currentSlide > 0){
        currentSlide -=1;
        currentX -=100;
        translate();
    }

    if(currentSlide == 1){
    $sliderLeft.style.display = 'none';
    }
    
})

function translate(){
    $container.forEach((item) => {
        item.style.transform=`translateX(-${currentX}%)`;
    })
}