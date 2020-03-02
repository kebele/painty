window.addEventListener('load', () => {
    // console.log('hello');
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    const rulesBtn = document.getElementById('rules-btn');
    // const closeBtn = document.getElementById('close-btn');
    const rules = document.getElementById('rules');

    const sil = document.getElementById('sil');
    const silgi = document.getElementById('silgi');

    const yellow = document.getElementById('yellow');
    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const blue = document.getElementById('blue');
    const black = document.getElementById('black');
    const thickness = document.getElementById('thickness');
    // const thickBtn = document.getElementById('thick-btn');
    // const thick = document.getElementById('thickness')
    // const colPick = document.getElementById('color_pick')

    //resizing
    //window.addEventListener('resize', xxx) şeklindede yapabilirdik
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // ctx.fillRect(x,y,h,w)
    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = 5;
    // ctx.strokeRect(50,50,200,500);
    // ctx.strokeStyle = 'blue';
    // ctx.lineWidth = 3;
    // ctx.strokeRect(200,150,250,500);


    // ctx.beginPath();
    // ctx.moveTo(100,100);
    // ctx.lineTo(200,100);
    // ctx.lineTo(200,150);
    // ctx.closePath();
    // ctx.stroke();
    

    // ctx.lineWidth = 10;
    ctx.lineWidth = thickness.value;
    ctx.strokeStyle = "black";
    //variables
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }

    function finishedPosition(){
        painting = false;
        ctx.beginPath();
        // ctx.lineWidth = 10;
        ctx.lineWidth = thickness.value;
    }
   

   
    //event listeners
    

    

    sil.addEventListener('click', function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    });
    yellow.addEventListener('click', () => {
        ctx.strokeStyle = "yellow"
    });
    red.addEventListener('click', () => {
        ctx.strokeStyle = "red"
    });
    green.addEventListener('click', () => {
        ctx.strokeStyle = "green"
    });
    blue.addEventListener('click', () => {
        ctx.strokeStyle = "blue"
    });
    black.addEventListener('click', () => {
        ctx.strokeStyle = "black"
    });
    // colPick.addEventListener('change', () => {
    //     ctx.strokeStyle = colPick.value;
    // });

    silgi.addEventListener('click', function (e){
        
        // ctx.lineWidth = 35;
        ctx.lineWidth = thickness.value;
        // ctx.lineCap = "round";
        ctx.strokeStyle = "whitesmoke";
        // ctx.lineTo(e.clientX, e.clientY);
        // ctx.stroke();
        // ctx.beginPath();
        // ctx.moveTo(e.clientX, e.clientY);
    
        

    });

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);

    rulesBtn.addEventListener('click', () => rules.classList.toggle('show'));

    // thickBtn.addEventListener('click', () => thick.classList.toggle('show'));

    // closeBtn.addEventListener('click', () => rules.classList.remove('show'));

    //thickness slider
    function thicknessFn(){
        // return true;
        // video.volume = volumeSlider.value / 100;
        // if(volumeSlider.value == 0){
        //     mute.innerHTML = `<i class="fas fa-volume-mute fa-2x"></i>`
        // } else {
        //     mute.innerHTML = `<i class="fas fa-volume-up fa-2x"></i>`
        // }
        // e.preventDefault();
        console.log(thickness.value);
        ctx.lineWidth = thickness.value;
    }

    thickness.addEventListener('change', thicknessFn);


function draw(e){
    if(!painting){
        return;
    }
    // ctx.lineWidth = 10;
    ctx.lineCap = "round";
    // ctx.strokeStyle = "red";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

});





// ******************************************

function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type = "mousemove"; break;        
        case "touchend":   type = "mouseup";   break;
        default:           return;
    }

    // initMouseEvent(type, canBubble, cancelable, view, clickCount, 
    //                screenX, screenY, clientX, clientY, ctrlKey, 
    //                altKey, shiftKey, metaKey, button, relatedTarget);

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                                  first.screenX, first.screenY, 
                                  first.clientX, first.clientY, false, 
                                  false, false, false, 0/*left*/, null);

    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function init() 
{
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);    
}

init();