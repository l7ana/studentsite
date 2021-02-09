// get elements
const body = document.querySelector("body");
const progressBar = document.querySelector(".progress-bar")

function stretch() {
  const pixelScrolled = window.scrollY;
  const viewportHeight = window.innerHeight;
  const totalHeightScrollabale = body.scrollHeight;

  const pixelsToPercentage = (pixelScrolled / (totalHeightScrollabale - viewportHeight)) * 100;

  progressBar.style.width = Math.round(pixelsToPercentage) + "%";
}

window.addEventListener('scroll', stretch);