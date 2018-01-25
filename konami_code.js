const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function init(){
  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.location)
    if(key === code[index]){
      index++
      if(index===code.length){
        window.alert("Welcome, Lain.")
        index=0
      }
  }else{
    index=0
  }
})}