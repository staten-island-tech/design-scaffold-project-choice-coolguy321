const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navlinks")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// light = blue
// dark = green

// function switchTheme() {
//   document.body.classList.toggle("green-theme");
// }

const selector = {
  toggletheme: document.querySelector(".toggleTheme"),
};

selector.toggletheme.addEventListener("click", function () {
  if (document.body.classList.contains("green-theme")) {
    document.body.classList.add("blue-theme");
    document.body.classList.remove("green-theme");
  } else {
    document.body.classList.add("green-theme");
    document.body.classList.remove("blue-theme");
  }
});
