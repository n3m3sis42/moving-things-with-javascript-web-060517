var dodger = document.getElementById('dodger')

function getDodgerLeftNumber() {
  return parseInt(dodger.style.left.replace('px', ''), 10)
}

function moveDodgerLeft() {
  var left = getDodgerLeftNumber()

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  // assumes dodger is 40 px wide and games is 400 px wide as specified in stylesheet
  var left = getDodgerLeftNumber()

  if (left < 360) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  } else if (e.which === 39) {
    moveDodgerRight()
  }
})
