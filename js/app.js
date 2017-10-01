document.addEventListener("DOMContentLoaded", function(){

    //====disappear bar====
    var barCols = document.querySelectorAll('main .col');

    for(var i=0; i<barCols.length -1; i++) {
        barCols[i].addEventListener('mouseover', function (event) {
            var bar = this.querySelector(".bar");
            bar.style.display = "none";
        })
    }
    for(var i=0; i<barCols.length -1; i++) {
        barCols[i].addEventListener('mouseout', function (event) {
            var bar = this.querySelector(".bar");
            bar.style.display = "block";
        })
    }

    //====Sliders====
    var buttonNext = document.getElementById('nextButton');
    var buttonPrev = document.getElementById('previousButton');
    var ImgElements = document.querySelectorAll('section img');
    var calc = 0;
    var tabImg = Array.from(ImgElements);

    tabImg[1].style.display = 'none';
    tabImg[2].style.display = 'none';

    buttonNext.addEventListener('click', function(){
        if(calc < tabImg.length-1){
            tabImg[calc].style.display = 'none';
            tabImg[calc+1].style.display = 'block';
            calc++
        }else{
            calc = 0;
            tabImg[calc].style.display = 'block';
            tabImg[calc+2].style.display = 'none';
        }
    });
    buttonPrev.addEventListener('click', function(){
        if(calc > 0){
            tabImg[calc].style.display = 'none';
            tabImg[calc-1].style.display = 'block';
            calc--
        }else{
            calc = tabImg.length-1;
            tabImg[calc].style.display = 'block';
            tabImg[calc-2].style.display = 'none';
        }
    });










});