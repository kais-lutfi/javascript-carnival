// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

document.getElementById('uni0').onclick = clicked
document.getElementById('uni1').onclick = clicked
document.getElementById('uni2').onclick = clicked
//declaring variable to get elements from HTML file to use later.
//IDs assigned in HTML
var inflation = [0, 0, 0]
// variable to eventually determine which img to load

function clicked(event) {
  var unicorn = event.target
  // get object from when clicked and get target object.
  var unicornNumber = unicorn.id[3]
  // access id number using index number

  inflation[unicornNumber]++
  // access unicorn id and increment it
  if (inflation[unicornNumber] == 4) inflation[unicornNumber] = 0
  //  once inflation levels reach 4 (image doesn't exist), revert back to 0
  unicorn.src = './images/unicorn-' + inflation[unicornNumber] + '.png'
}
// if first unicorn is clicked (0) then increment (++) inflation levels,
