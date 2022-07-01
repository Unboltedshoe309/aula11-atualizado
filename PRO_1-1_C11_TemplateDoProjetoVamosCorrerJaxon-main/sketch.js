var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
pista=createSprite(200,200)
pista.addImage(pathImg)
pista.velocityY=4
pista.scale=1.2
//Criando menino que corre 
runner=createSprite(180,340,30,30)
runner.scale=0.08
runner.addAnimation("jac",boyImg)
// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(410,0,100,800)
rightBoundary.visible=false;
}


function draw() {
background(0);


// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
runner.collide(edges[3]);
runner.x=mouseX
runner.collide(rightBoundary)
runner.collide(leftBoundary)
 //Reiniciar o fundo
 if(pista.y>400){
pista.y=height/2

 }



 drawSprites();

 }




