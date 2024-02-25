function changeSize(){
  // window.open("","","width=665px,height=359px,left=1oopx,top=100px");
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  document.getElementById('txt').textContent = 'Width: ' + width + ' Height: ' + height;
}
changeSize()
window.addEventListener('resize',changeSize);