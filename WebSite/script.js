const animationDuration = 2000;
const frameDuration = 1000 / 60;
const totalFrames = Math.round(animationDuration / frameDuration);
const easeOutQuad = t => t * (2 - t);

const animateCountUp = el => {
  let frame = 0;
  const countTo = parseInt(el.innerHTML, 10);

  const counter = setInterval(() => {
    frame++;
    const progress = easeOutQuad(frame / totalFrames);
    const currentCount = Math.round(countTo * progress);

    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount;
    }

    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

const runAnimations = () => {
  const countupEls = document.querySelectorAll('.stats-number');
  countupEls.forEach(animateCountUp);
};


document.getElementById("searchIcon").addEventListener("click", () => {
  document.querySelector(".input-search").focus();
});

document.getElementById("compare").addEventListener("click", () => {
  window.open("/Pages/compare.html", "_self")
});

let popup = document.querySelector('.options .options-content .infoButton')
let popupClose = document.querySelector('.popup .close')
let container = document.querySelector('.container')
let navBar = document.querySelector('nav')

popup.addEventListener('click', (el) => {
    let id = el.target.parentElement.id
    showInfo(id)
})

popupClose.addEventListener('click', (el) => {
    let id = el.target.id
    hideInfo(id)
})

function showInfo(o){
  let el = document.querySelector('.'+ o)
  el.classList.add('visible')
  container.style.filter = 'blur(10px)'
  navBar.style.filter = 'blur(10px)'
}

function hideInfo(o){
  let el = document.querySelector('.'+ o)
  el.classList.remove('visible')
  container.style.filter = 'blur(0)'
  navBar.style.filter = 'blur(0)'
}

runAnimations()
