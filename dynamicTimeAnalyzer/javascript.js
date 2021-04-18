var now = new Date()
var hours = now.getHours()
console.log(hours)

var timePhrase = document.querySelector('p#timePhrase')
timePhrase.innerHTML = `It is now ${hours} o'clock`

var timeImg = document.querySelector('img#timeImg')
var body = document.querySelector('body')

if (hours >= 5 && hours <= 10) {
    body.style.backgroundColor = 'rgba(232, 228, 118, 0.959)';
    timeImg.src = './res/BreakingDawn.png'
} else if (hours >= 11 && hours <= 15) {
    body.style.backgroundColor = 'rgba(245, 180, 83, 0.959)';
    timeImg.src = './res/Evening.png'
} else if (hours >= 16 && hours <= 19) {
    body.style.backgroundColor = 'rgba(219, 122, 57, 0.959)';
    timeImg.src = './res/Twilight.png'
} else {
    body.style.backgroundColor = 'rgba(45, 75, 92, 0.959)';
    timeImg.src = './res/Night.png'
}