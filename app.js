window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
    audio.loop = true;
  });
function touchstart() {
    alert('touch');
}
  document.querySelector("audio").loop = true;
