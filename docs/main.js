const sound = ["sounds/C2.mp3", "sounds/Cs2.mp3", "sounds/D2.mp3", "sounds/Ds2.mp3", "sounds/E2.mp3", "sounds/F2.mp3", "sounds/Fs2.mp3", "sounds/G2.mp3", "sounds/Gs2.mp3", "sounds/A2.mp3", "sounds/As2.mp3", "sounds/B2.mp3", "sounds/3.mp3"];
let random = 0;
let on = 0;
let setint = null;

function start(){
    on = 1;

    random = Math.floor(Math.random() * (13 - 0));

    document.getElementById("answer").innerHTML = "";
    audio1.src = sound[random];
    audio1.play();



    const d = document.querySelector('.start');
    d.remove();

    setint = setInterval(start, 4000);
  }










let select = 0;


function play_C(){
  audio2.src = sound[0];
  audio2.play();
  select = 0;

  const pushed = document.getElementById('C');
  pushed.classList.add('pushed_w');
  setTimeout(function() {
    pushed.classList.remove('pushed_w');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}
function play_C_sh(){
  audio3.src = sound[1];
  audio3.play();
  select = 1;

  const pushed = document.getElementById('C_sh');
  pushed.classList.add('pushed_b');
  setTimeout(function() {
    pushed.classList.remove('pushed_b');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}
function play_D(){
  audio4.src = sound[2];
  audio4.play();
  select = 2;

  const pushed = document.getElementById('D');
  pushed.classList.add('pushed_w');
  setTimeout(function() {
    pushed.classList.remove('pushed_w');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}
function play_D_sh(){
  audio5.src = sound[3];
  audio5.play();
  select = 3;

  const pushed = document.getElementById('D_sh');
  pushed.classList.add('pushed_b');
  setTimeout(function() {
    pushed.classList.remove('pushed_b');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}
function play_E(){
  audio6.src = sound[4];
  audio6.play();
  select = 4;

  const pushed = document.getElementById('E');
  pushed.classList.add('pushed_w');
  setTimeout(function() {
    pushed.classList.remove('pushed_w');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}
function play_F(){
  audio7.src = sound[5];
  audio7.play();
  select = 5;

  const pushed = document.getElementById('F');
  pushed.classList.add('pushed_w');
  setTimeout(function() {
    pushed.classList.remove('pushed_w');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}
function play_F_sh(){
  audio8.src = sound[6];
  audio8.play();
  select = 6;

  const pushed = document.getElementById('F_sh');
  pushed.classList.add('pushed_b');
  setTimeout(function() {
    pushed.classList.remove('pushed_b');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}
function play_G(){
  audio9.src = sound[7];
  audio9.play();
  select = 7;

  const pushed = document.getElementById('G');
  pushed.classList.add('pushed_w');
  setTimeout(function() {
    pushed.classList.remove('pushed_w');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}
function play_G_sh(){
  audio10.src = sound[8];
  audio10.play();
  select = 8;

  const pushed = document.getElementById('G_sh');
  pushed.classList.add('pushed_b');
  setTimeout(function() {
    pushed.classList.remove('pushed_b');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}
function play_A(){
  audio11.src = sound[9];
  audio11.play();
  select = 9;
  
  const pushed = document.getElementById('A');
  pushed.classList.add('pushed_w');
  setTimeout(function() {
    pushed.classList.remove('pushed_w');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}
function play_A_sh(){
  audio12.src = sound[10];
  audio12.play();
  select = 10;

  const pushed = document.getElementById('A_sh');
  pushed.classList.add('pushed_b');
  setTimeout(function() {
    pushed.classList.remove('pushed_b');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}
function play_B(){
  audio13.src = sound[11];
  audio13.play();
  select = 11;

  const pushed = document.getElementById('B');
  pushed.classList.add('pushed_w');
  setTimeout(function() {
    pushed.classList.remove('pushed_w');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}
function play_C3(){
  audio14.src = sound[12];
  audio14.play();
  select = 12;

  const pushed = document.getElementById('C3');
  pushed.classList.add('pushed_w');
  setTimeout(function() {
    pushed.classList.remove('pushed_w');
  }, 80);

  if(on === 1){
    if(select === random){
    document.getElementById("answer").innerHTML = "nice";
    }
    else{
      document.getElementById("answer").innerHTML = "miss";

    }
  }
}