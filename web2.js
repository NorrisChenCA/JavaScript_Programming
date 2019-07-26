window.onload = function() {
  var numOne = document.getElementById("numOne");
  var numTwo = document.getElementById("numTwo");
  var addSum = document.getElementById("addSum");

  numOne.addEventListener("input", add);
  numTwo.addEventListener("input", add);

  function add(){
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
  }

  addSum.innerHTML = "the number is:"+ (one + two)
}
