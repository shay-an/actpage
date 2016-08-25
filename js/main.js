window.addEventListener('DOMContentLoaded',function(){
    var oMusic = document.querySelector('#music');
    var oAudio = document.querySelector('audio');
    var oPage1 = document.querySelector('#page1');
    var oPage2 = document.querySelector('#page2');
    var oPage3 = document.querySelector('#page3');

    oAudio.addEventListener('ended',function(){
        oMusic.setAttribute('class','');
    },false);

    oMusic.addEventListener('touchstart',function(){
        if(oAudio.paused){
            oAudio.play();
            this.setAttribute('class','play');
            //this.style.WebkitAnimationPlayState = 'running';
        }else{
            oAudio.pause();
            this.setAttribute('class','');
            //this.style.WebkitAnimationPlayState = 'paused';
        }
    },false);

    oPage1.addEventListener('touchstart',function(){
        this.style.display = 'none';
        oPage2.style.display = 'block';

        oPage3.style.display = 'block';
        setTimeout(function(){
            oPage2.setAttribute('class','page fadeout');
            oPage3.setAttribute('class','page fadein');
        },5500);
    },false);
},false);