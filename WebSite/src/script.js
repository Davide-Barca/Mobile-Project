import './style.css'

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
  window.open("/compare/", "_self")
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






/**
 * Stats info
 * 
 *  0 -> Telefono piu venduto
 *  1 -> Telefono piu costoso
 *  2 -> Telefono piu economico
 *  3 -> Marca Telefono piu venduto
 *  4 -> Telefoni totali venduti (in mln)
 */

let stats = []
let dataLoaded = false

let stat1 = document.querySelector('.stats .stats-content .stat1 p')
let stat2 = document.querySelector('.stats .stats-content .stat2 p')
let stat3 = document.querySelector('.stats .stats-content .stat3 p')
let stat4 = document.querySelector('.stats .stats-content .stat4 p')
let stat5 = document.querySelector('.stats .stats-content .stat5 p')


async function stackData(){
  const url = '/files/output.txt'
  const response = await fetch(url)
  const tabledata = await response.text()
  onArray(tabledata)
}

function onArray(data){
  data.split('\n').forEach((el) => {
      stats.push(el)
  })
  console.log(stats)
  addStats()
}

function addStats(){
  stat1.innerHTML = stats[0]
  stat2.innerHTML = stats[1]
  stat3.innerHTML = stats[2]
  stat4.innerHTML = stats[3]
  stat5.innerHTML = stats[4] + " mln"
}

stackData()
// runAnimations()
