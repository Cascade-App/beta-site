var width = this.innerWidth;
var height = this.innerHeight;

document.getElementById('email').addEventListener('focus', function(){
  console.log('this ran!');
  document.getElementById("viewport").setAttribute("content", "width=" + width + "; height=" + height + ";");
});
