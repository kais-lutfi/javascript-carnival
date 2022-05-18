// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

var cells = document.getElementsByTagName('TD')
//create variable that refers to all the cells
var randomIndex = Math.floor(Math.random() * cells.length)
//create variable that generates a random number out of number of cells
var randomCell = cells[randomIndex]
// generate a random cell

var mole = document.createElement('img')
mole.id = 'mole'
// create mole id to link to css
mole.src = 'mole.PNG'
randomCell.appendChild(mole)
// get image and place it in random cell

mole.onclick = whackedMole
// execute whackedmole function when clicked
function whackedMole() {
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole)

  var audio = new Audio('./whack-audio.wav')
  audio.play()
}
//execute whackedMole which generates new mole in a new random cell
