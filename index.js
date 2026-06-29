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
var checkboxbutton =document.getElementById("procertswitcher");
var certificatetab =document.getElementById("certificate-case");
var projecttab = document.getElementById("project-case");
var proheading = document.getElementById("proheading");
var certheading = document.getElementById("certheading");

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

function showcertifications(){
    projecttab.style.display="none";
    certificatetab.style.display="flex";

    // proheading.style.fontSize="26px";
    proheading.style.color="gray";
    proheading.style.transform="scale(0.83)";

    // certheading.style.fontSize="36px";
    certheading.style.color="black";
    certheading.style.transform="scale(1.2)";
}

function showprojects(){
    certificatetab.style.display="none";
    projecttab.style.display="flex";

    // proheading.style.fontSize="36px";
    proheading.style.color="black";
    proheading.style.transform="scale(1.2)";

    // certheading.style.fontSize="26px";
    certheading.style.color="gray";
    certheading.style.transform="scale(0.83)";
}

function checkbox() {
  if(checkboxbutton.checked){
    // alert("checked");
    showcertifications();
  }
  else{
    // alert("unchecked");
    showprojects();
  }
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
