let snake;
// let gameOverSound;
// let foodSound;
let pixel_size = 20;
let shots = [];
let movement = [];
let highscore = 0;
let alltimehighscore = 0;
let gameState = 'init';
let sketchWidth;
let sketchHeight;

function setup(){
  // gameOverSound = loadSound('assets/gameOver.wav');
  // foodSound = loadSound('assets/food.wav');
  textFont('Pixelade');
  sketchWidth = document.getElementById("game_area").clientWidth+92;
  sketchHeight = document.getElementById("game_area").clientHeight;
  createCanvas(sketchWidth, sketchHeight).parent('game_area');
  frameRate(10);
}

function windowResized(){
  removeElements();
  sketchWidth = document.getElementById("game_area").clientWidth;
  sketchHeight = document.getElementById("game_area").clientHeight;
  resizeCanvas(sketchWidth, sketchHeight);
}

function initGame(){
  background(0, 0, 0);
  const name = 'Snake Game';
  alltimehighscore = Math.floor((width*height*1000)/(pixel_size*pixel_size));
  textSize(50);
  fill(53,222,0);
  nameWidht = textWidth(name);
  text(name, (width - nameWidht)/2, height/2 - 40);
  startBtn = createButton('Start Game').parent('game_area');
  startBtn.position(width/2 - startBtn.width/2, height/2);
  startBtn.mousePressed(startGame);
  noLoop();
}

function startGame(){
  removeElements();
  gameState = 'play';
  snake = new Snake();
  setJelloShots(5);
  loop();
}

function runGame(){
  background(0, 0, 0);
  textSize(12);
  fill(53,222,0);
  text("score: " + snake.tail.length, 1, 10);
  text("highscore: " + highscore, 1, 24);
  text("all time highscore: " + alltimehighscore, 1, 38);


  snake.update();
  snake.show();
  snake.checkDeath();

  fill(255, 0, 0);
  for(let i=0;i<shots.length;i++){
    rect(shots[i].x, shots[i].y, pixel_size, pixel_size);
    if(snake.eat(shots[i])){
      // foodSound.play();
      snake.tail.push(createVector(snake.x, snake.y));
      shots.splice(i, 1);
      setJelloShots(1);
      if(snake.tail.length > highscore) highscore = snake.tail.length;
    }
  }
}

function endGame(){
  // gameOverSound.play();
  background(0, 0, 0);
  textSize(32);
  const msg = 'Game Over';
  const score = 'Your heighst Score is ' + highscore;
  const hintmsgpart1 = "sorry to tell you but your score isn't good enough the all time highscore to beat is " + alltimehighscore;
  const hintmsgpart2 = " wait a second isn't that score imposible to GET maybe there is another way to set the score";
  document.getElementById('score').value = highscore;
  document.getElementById('highscore').value = alltimehighscore;
  document.getElementById('gameValidation').style.display = 'none';
  msgWidht = textWidth(msg);
  scoreWidht = textWidth(score);
  hintmsgWidhtpart1 = textWidth(hintmsgpart1);
  hintmsgWidhtpart2 = textWidth(hintmsgpart2);
  fill(53,222,0);
  text(msg, (width - msgWidht)/2, height/2 - 80);
  text(score, (width - scoreWidht)/2, height/2 - 40);
  text(hintmsgpart1, (width - hintmsgWidhtpart1)/2, height/2);
  fill(255,0,0);
  text(hintmsgpart2, (width - hintmsgWidhtpart2)/2, height/2 + 40);
  startBtn = createButton('Restart Game').parent('game_area');
  startBtn.position(width/2 - startBtn.width/2, height/2 + 150);
  startBtn.mousePressed(startGame);
  noLoop();
}

function draw(){
  if(gameState == 'init'){
    initGame();
  }
  else if(gameState == 'play'){
    runGame();
  }
  else if(gameState == 'end'){
    endGame();
  }
}

function setJelloShots(num){
  const cols = floor(width / pixel_size);
  const rows = floor(height / pixel_size);
  for(let i=0;i<num;i++){
    let location = createVector(floor(random(cols)), floor(random(rows))).mult(pixel_size);
    while(snake_intersect(location)){
      location = createVector(floor(random(cols)), floor(random(rows))).mult(pixel_size);
    }
    shots.push(location);
  }
}

function snake_intersect(location){
  let intersect = false;
  if(location.x == snake.pos.x && location.y == snake.pos.y){
    intersect = true;
  }else{
    for(let i=0;i<snake.tail.length;i++){
      if(location.x == snake.tail[i].x && location.y == snake.tail[i].y){
        intersect = true;
        break;
      }
    }
    for(let i=0;i<shots.length;i++){
      if(location.x == shots[i].x && location.y == shots[i].y){
        intersect = true;
        break;
      }
    }
  }
  return intersect;
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    movement.push([0, 1]);
  }else if(keyCode === UP_ARROW){
    movement.push([0, -1]);
  }else if(keyCode === LEFT_ARROW){
    movement.push([-1, 0]);
  }else if(keyCode === RIGHT_ARROW){
    movement.push([1, 0]);
  }
}

function Snake(){
    this.show = function(){
      fill(53,222,0);
      //draw the snake tail
      for(let i=0;i<this.tail.length;i++){
        rect(this.tail[i].x, this.tail[i].y, pixel_size, pixel_size);
      }
  
      //draw the snake head
      rect(this.pos.x, this.pos.y, pixel_size, pixel_size)
    }
  
    this.update = function(){
      //move snake's position into tail and pop off the end
      if(movement.length){
        if(snake.speed.x != movement[0][0]*-1 && snake.speed.y != movement[0][1]*-1){
          snake.dir(movement[0][0], movement[0][1]);
        }
        movement.splice(0, 1);
      }
  
      this.tail.unshift(createVector(this.pos.x, this.pos.y));
      this.tail.pop();
      //move the snake
      this.pos.x += this.speed.x * pixel_size;
      this.pos.y += this.speed.y * pixel_size;
    }
  
    this.dir = function(x, y){
      this.speed.x = x;
      this.speed.y = y;
    }
  
    this.checkDeath = function(){
      if(this.pos.x >= width || this.pos.y >= height || this.pos.x < 0 || this.pos.y < 0){
        gameState = 'end';
      }
      for(let i=0;i<this.tail.length;i++){
        if(this.tail[i].x == this.pos.x && this.tail[i].y == this.pos.y){
          gameState = 'end';
        }
      }
    }
  
    this.eat = function(pos){
      return this.pos.x == pos.x && this.pos.y == pos.y;
    }
  
    this.reset = function(){
      shots = [];
      this.tail = [];
      this.pos = createVector(0, 0);
      this.speed = createVector(1, 0);
    }
  
    this.reset();
  }