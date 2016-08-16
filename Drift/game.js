
var myGamePiece;
var blueAGamePiece, blueBGamePiece;
function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "black", 50, 50);
    blueAGamePiece = new component(50, 50, "blue", 200, 250);    
    blueBGamePiece = new component(50, 50, "blue", 650, 250);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 900;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
    }, 
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.speedX = 0;
    this.speedY = 0;   
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();    
    }
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        if(this.speed == 0){
            this.speed = 0;
        }
        this.x += this.speed * Math.sin(this.angle) ;
        this.y -= this.speed * Math.cos(this.angle);    
    }    
     this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
     if (myGamePiece.crashWith(blueAGamePiece) || myGamePiece.crashWith(blueBGamePiece)) {
        window.setTimeout(startGame(), 2750);
        
    } else {
    myGameArea.clear();
    blueAGamePiece.update();
    blueBGamePiece.update();
    myGamePiece.moveAngle = 0;
    myGamePiece.speed = 0;
    if (myGameArea.keys && myGameArea.keys[68] ){ myGamePiece.moveAngle = -1;}
    if (myGameArea.keys && myGameArea.keys[65] ){ myGamePiece.moveAngle = 1;}
    if (myGameArea.keys && myGameArea.keys[83]) { myGamePiece.speed= 7; }
    if (myGameArea.keys && myGameArea.keys[87]){myGamePiece.speed= -7; }
    if (myGameArea.keys && myGameArea.keys[68] && myGameArea.keys[66]) {myGamePiece.moveAngle = -5; }
    if (myGameArea.keys && myGameArea.keys[65] && myGameArea.keys[66]) {myGamePiece.moveAngle = 5; }

    myGamePiece.newPos();
    myGamePiece.update();
    }

}