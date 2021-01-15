const Bodies=Matter.Bodies;
const world=Matter.World;

var boyimage1,boyimage2,boyimage3,boyimage4,boyimage5,boyimage6,boyimage7,boyimage8;
var maxdrops=100;
var drops=[];
function preload(){
;
}

function setup(){
createCanvas(200,700);
   for(var i=0;i<maxdrops;i++){
    drops.push(new Drops(random(0,400),random(0,400)));
   }
}

function draw(){
    for (var i = 0; i < drops.length; i++) {
     
        drops[i].display();
        
      } 
}   

