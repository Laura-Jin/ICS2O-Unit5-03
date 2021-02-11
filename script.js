document.getElementById('display-message').addEventListener('click', buttonOne)

document.getElementById('display-image').addEventListener('click',buttonTwo)

function buttonOne() {
  document.getElementById('background').style.backgroundColor = 'aquamarine'
  alert('Hello')
}

function buttonTwo() {
  document.getElementById('image').src = './images/kitten.jfif'
}
