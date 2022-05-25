const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navlinks')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// light = blue
// dark = green 

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'green');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'blue');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


// selectors.mode.addEventListener("click", function () {
//       if (document.body.classList.contains("blue")) {
//       document.body.classList.add("green");
//       document.body.classList.remove("blue");
//        } else {
//       document.body.classList.add("blue");
//       document.body.classList.remove("green");
//        }
// });
