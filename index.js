function check() {
  alert("js Connected Successfully ...!");
}

// check()

var prevScrollpos = window.pageYOffset;
var overlay = document.getElementById("overlay");

function showoverlay() {
  overlay.style.display = "flex";
}
function hideoverlay() {
  overlay.style.display = "none";
}

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
};
