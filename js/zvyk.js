const text10sec = document.querySelector(".text10sec");
let item = 0;

let fun = setInterval(function () {
  item += 1;
  if (item === 11) {
    document.getElementById("zvuk").play();
    item -= 10;
  }
  text10sec.innerHTML = item;
}, 1000);