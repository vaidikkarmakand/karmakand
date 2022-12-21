const showsOnScroll = () => {
  const navs = document.querySelector('nav');
  if (window.scrollY >= 50) {
    navs.classList.add('active_nav');
  } else {
    navs.classList.remove('active_nav');
  }
}

function WebTechList(e) {
  document.getElementById(e).classList.toggle("show-hide");
}
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn-hide')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-hide");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-hide')) {
        openDropdown.classList.remove('show-hide');
      }
    }
  }
}

let black = document.createElement("div")
black.classList = "black-screen-menu"
black.onclick = () => { OpenMore("more-menu", "-100%", true) }
document.body.append(black)

function OpenMore(e, b, c) {
  document.getElementById(e).style.left = b
  if (c === true) {
    document.querySelectorAll(".black-screen-menu").forEach(e => {
      e.classList = 'black-screen-menu'
    });
  }
  else {
    document.querySelectorAll(".black-screen-menu").forEach(e => {
      e.classList = 'black-screen-menu black-screen'
    });
  }
}
document.getElementById("more").onclick = () => OpenMore('more-menu', '0%', 'false')
document.getElementById("close").onclick = () => OpenMore('more-menu', '-100%', true)

window.addEventListener('scroll', () => { showsOnScroll() })
window.addEventListener('load', () => { showsOnScroll() })