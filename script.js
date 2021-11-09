let interactable = document.getElementById("interactable")
let player = document.getElementById("player")

interactable.addEventListener('mouseenter', () => {
  player.play();
})

player.addEventListener('play', () => {
  interactable.style.color = "#e8e5dc";
})

player.addEventListener('pause', () => {
  interactable.style.color = "#fffcf5";
})

interactable.addEventListener('mouseleave', () => {
  player.pause();
})
