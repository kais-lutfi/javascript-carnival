// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

document.onkeydown = checkKey

function checkKey(e) {
  if (e.keyCode == '38') {
    changeVertical(-1)
  } else if (e.keyCode == '40') {
    changeVertical(1)
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
  }
}
// create function that will increase/decrease value when the arrow keys are toggled

var indexes = [0, 0, 0]
// create variable that includes an array of [head index, body index, shoes index]

var mainIndex = 0
// create variable that identifies which part of the body is
//being modified

var imgs = [head, body, shoes]
var strings = ['head', 'body', 'shoes']

function changeHorizontal(shift) {
  var index = indexes[mainIndex]
  // create variable including which part(main index)
  var image = imgs[mainIndex]
  var str = strings[mainIndex]

  index += shift
  if (index < 0) index = 5

  if (index > 5) index = 0
  image.src = './images/' + str + index + '.png'
  indexes[mainIndex] = index
}
function changeVertical(shift) {
  mainIndex += shift
  if (mainIndex < 0) mainIndex = 2

  if (mainIndex > 2) mainIndex = 0
}
