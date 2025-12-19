function check() {
  alert("js Connected Successfully ...!");
}

// check()

var prevScrollpos = window.pageYOffset;
var overlay = document.getElementById("overlay");
var skilltab = document.getElementById("skill");
var educationtab = document.getElementById("education");
var experiencetab = document.getElementById("experience");
var toolstab = document.getElementById("tools");
var qualitiestab = document.getElementById("qualities");
var filestab = document.getElementById("files");

function showoverlay() {
  overlay.style.display = "flex";
}
function hideoverlay() {
  overlay.style.display = "none";
}
function showskill() {
  skilltab.style.display = "block";
}
function showeducation() {
  educationtab.style.display = "block";
}
function showexperience() {
  experiencetab.style.display = "block";
}
function showtools() {
  toolstab.style.display = "block";
}
function showqualities() {
  qualitiestab.style.display = "block";
}
function showfiles() {
  filestab.style.display = "block";
}

function hideskills() {
  skilltab.style.display = "none";
}
function hideeducation() {
  educationtab.style.display = "none";
}
function hideexperience() {
  experiencetab.style.display = "none";
}
function hidetools() {
  toolstab.style.display = "none";
}
function hidequalities() {
  qualitiestab.style.display = "none";
}
function hidefiles() {
  filestab.style.display = "none";
}
function construction() {
  alert("Project Page is Still Under Construction");
}

function submission() {
  alert("Message Sent Successfully ..!");
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
