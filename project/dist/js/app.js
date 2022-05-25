const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navlinks")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// light = blue
// dark = green

const selector = {
  mode: document.querySelector("mode"),
};

selector.mode.addEventListener("click", function () {
  if (document.body.classList.contains("blue-theme")) {
    document.body.classList.add("green-theme");
    document.body.classList.remove("blue-theme");
  } else {
    document.body.classList.add("blue-theme");
    document.body.classList.remove("green-theme");
  }
});
