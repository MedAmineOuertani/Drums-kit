var t=document.querySelectorAll(".drum");
var audios=["sounds/crash.mp3","sounds/bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"];
for (var i=0;i<t.length;i++){
    console.log(t[i]);
    t[i].addEventListener("click",function(){
        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
    
})
function makesound(key){
    switch(key){
        case 'l':
            var media =new Audio(audios[1]);
            media.play();
            break;
        case 'w':
            var media =new Audio(audios[3]);
            media.play();
            break;
        case 'a':
            var media =new Audio(audios[4]);
            media.play();
            break;
        case 's':
            var media =new Audio(audios[5]);
            media.play();
            break;
        case 'd':
            var media =new Audio(audios[6]);
            media.play();
            break;
        case 'j':
            var media =new Audio(audios[2]);
            media.play();
            break;
        case 'k':
            var media =new Audio(audios[0]);
            media.play();
            break;
    
    }
}

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.toggle("pressed");
   setTimeout(function(){ activeButton.classList.toggle("pressed");},150);
    
}