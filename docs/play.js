window.addEventListener("keydown", handleKeydown);




function handleKeydown(event1){
  var keyCode = event1.keyCode;
  if (keyCode == 81) {
    play_C();
  }
  if (keyCode == 87) {
    play_D();
}
  if (keyCode == 69) {
    play_E();
  }
  if (keyCode == 82) {
    play_F();
  }
  if (keyCode == 84) {
    play_G();
  }
  if (keyCode == 89) {
    play_A();
  }
  if (keyCode == 85) {
    play_B();
  }
  if (keyCode == 73) {
    play_C3();
  }
    if (keyCode == 50) {
    play_C_sh();
  }
  if (keyCode == 51) {
    play_D_sh();
  }
  if (keyCode == 53) {
    play_F_sh();
  }
  if (keyCode == 54) {
    play_G_sh();
  }
  if (keyCode == 55) {
    play_A_sh();
  }
}