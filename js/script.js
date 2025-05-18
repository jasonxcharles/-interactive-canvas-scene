const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");
const slider = document.getElementById("slider");
let bgChoice = "bg1";

const images = {
  bg1: new Image(),
  bg2: new Image(),
  bg3: new Image(),
  character: new Image(),
  tree: new Image(),
  ball: new Image(),
  sun: new Image()
};

images.bg1.src = "images/beach.jpg";
images.bg2.src = "images/forest.jpg";
images.bg3.src = "images/city.jpg";
images.character.src = "images/character.png";
images.tree.src = "images/tree.jpg";
images.ball.src = "images/ball.jpg";
images.sun.src = "images/sun.png";

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(images[bgChoice], 0, 0, canvas.width, canvas.height);
  ctx.drawImage(images.character, parseInt(slider.value), 250, 80, 100);

  if (document.getElementById("item1").checked) {
    ctx.drawImage(images.tree, 50, 200, 60, 80);
  }
  if (document.getElementById("item2").checked) {
    ctx.drawImage(images.ball, 300, 320, 40, 40);
  }
  if (document.getElementById("item3").checked) {
    ctx.drawImage(images.sun, 450, 30, 60, 60);
  }
}

function playSound(id) {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
}

slider.addEventListener("input", drawScene);
document.querySelectorAll("input[name='bg']").forEach(radio => {
  radio.addEventListener("change", (e) => {
    bgChoice = e.target.value;
    drawScene();
  });
});
document.querySelectorAll("input[type='checkbox']").forEach(box => {
  box.addEventListener("change", drawScene);
});

window.onload = () => {
  drawScene();
};
