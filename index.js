window.onload = function settingKeysTransition() {
  const keys = document.querySelectorAll(".key");
  console.log(keys);
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
};

window.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  else playAudio(audio, key);
});
function playAudio(audio, key) {
  console.log(audio);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 1000);
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
