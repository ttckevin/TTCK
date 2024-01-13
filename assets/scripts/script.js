function toggleMenu() {
  const mobile = document.querySelector(".mobile-links");
  const icon = document.querySelector(".mobile-icon");
  mobile.classList.toggle("open");
  icon.classList.toggle("open");
}

if (window.innerWidth < 955) {
  document.querySelector(".h1-code").innerText = "h2";
  var temp = (document.querySelector(".h1-code-back").innerText = "/h2");
  document.querySelector(".display-1").classList = "display-2";
}

if (window.innerWidth < 680) {
  document.querySelector(".h1-code").innerText = "h3";
  var temp = (document.querySelector(".h1-code-back").innerText = "/h3");
  document.querySelector(".display-2").classList = "display-6";
}
if (window.innerWidth < 321) {
  document.querySelector(".display-6").style.fontSize = "10px!important";
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
