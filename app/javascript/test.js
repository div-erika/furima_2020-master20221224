// window.addEventListener("DOMContentLoaded", () => {
//   if ( document.getElementById('item-price')!= null) {

//   document.querySelector('.btn_play').onclick = function () {
//   document.querySelector("#audio").play();
//   alert("You answered")
//   Materialize.toast("You Answered", 4000,'rounded')
//   }
//   }
// });

window.addEventListener('DOMContentLoaded', function(){

  const btn_play = document.getElementById("btn_play");
  const btn_pause = document.getElementById("btn_pause");
  const audioElement = document.querySelector("audio");

  btn_play.addEventListener("click", e => {
    audioElement.play();
  });

  btn_pause.addEventListener("click", e => {
    audioElement.pause();
  });
});