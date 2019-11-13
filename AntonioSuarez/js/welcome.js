function myMove() {
  var elem = document.getElementById("myAnimation");
  console.log(elem);
  var pos = 2000;
  var id = setInterval(frame, 5);

  function frame() {
    if (pos == -2500) {
      clearInterval(id);
    } else {
      pos-= 5;
      elem.style.left = pos + 'px';
    }
  }
}