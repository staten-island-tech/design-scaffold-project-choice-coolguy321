const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navlinks')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

selectors.mode.addEventListener("click", function () {
    if (document.body.classList.contains("blue")) {
      document.body.classList.add("green");
      document.body.classList.remove("blue");
    } else {
      document.body.classList.add("blue");
      document.body.classList.remove("green");
    }
  });
  