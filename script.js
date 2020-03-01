window.addEventListener('load', () => {
    // console.log('hello');
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    const rulesBtn = document.getElementById('rules-btn');
    const closeBtn = document.getElementById('close-btn');
    const rules = document.getElementById('rules');

    const sil = document.getElementById('sil');
    const silgi = document.getElementById('silgi');

    const yellow = document.getElementById('yellow');
    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const blue = document.getElementById('blue');
    const black = document.getElementById('black');

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

    ctx.lineWidth = 10;
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
        ctx.lineWidth = 10;
    }
   

   
    //event listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
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

    silgi.addEventListener('click', function (e){
        
        ctx.lineWidth = 35;
        // ctx.lineCap = "round";
        ctx.strokeStyle = "whitesmoke";
        // ctx.lineTo(e.clientX, e.clientY);
        // ctx.stroke();
        // ctx.beginPath();
        // ctx.moveTo(e.clientX, e.clientY);
    
        

    });

    rulesBtn.addEventListener('click', () => rules.classList.toggle('show'));

    // closeBtn.addEventListener('click', () => rules.classList.remove('show'));

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





