const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
const body = document.getElementById('body')

function init(){
  body.addEventListener('keydown', code)
}

function code() {
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