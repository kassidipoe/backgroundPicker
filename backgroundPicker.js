document.getElementById('purple').onclick = purpleParty
document.getElementById('green').onclick = greenParty
document.getElementById('cyan').onclick = cyanParty
document.getElementById('red').onclick = redParty
document.getElementById('yellow').onclick = yellowParty
document.getElementById('blue').onclick = blueParty
document.getElementById('white').onclick = whiteParty
document.getElementById('black').onclick = blackParty



function purpleParty() {
	document.querySelector('body').style.backgroundColor = 'magenta'
	document.querySelector('body').style.color = 'black'
}

function greenParty() {
	document.querySelector('body').style.backgroundColor = '#0f0'
	document.querySelector('h1').style.color = 'black'
}

function cyanParty() {
	document.querySelector('body').style.backgroundColor = 'cyan'
	document.querySelector('h1').style.color = 'black' 
}
function redParty() {
	document.querySelector('body').style.backgroundColor = 'red'
	document.querySelector('h1').style.color = 'black'
}
function yellowParty() {
	document.querySelector('body').style.backgroundColor = 'yellow'
	document.querySelector('h1').style.color = 'black'
}
function blueParty() {
	document.querySelector('body').style.backgroundColor = 'blue'
	document.querySelector('h1').style.color = 'black'
}
function whiteParty() {
	document.querySelector('body').style.backgroundColor = 'white'
	document.querySelector('h1').style.color = 'black'
}
function blackParty() {
	document.querySelector('body').style.backgroundColor = 'black'
	document.querySelector('h1').style.color = 'white'
}
