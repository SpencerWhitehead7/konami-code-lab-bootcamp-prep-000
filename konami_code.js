const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
const body = getElementById('body')

function init(e) {
  const key = parseInt(e.detail || e.which)
  if(key === code[index]){
    index++
    if(index===code.length){
      alert("Welcome, Lain.")
      index=0
    }
  }else{
    index=0
  }
}

body.addEventListener('keydown', init)