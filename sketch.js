//Create variables here
var dog, hdog, database, foodS, foodStock;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  dogImg2=loadImage("images/dogImg1.png")

  
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dogImg2)
  dog.scale=0.2
  database = firebase.database();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background("pink")
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImg)
  }
  drawSprites();
  textSize(20)
  fill("black")
  text("foodRemaining: "+foodS,150,150)
  //add styles here
  
}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    food: x
  })
}


