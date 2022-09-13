
// CODE FOR BUTTON GO BACK-UP

const showButton = 100;
const button = document.querySelector(".btn-up");

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showButton) {
        button.classList.remove("hide");
    } else {
        button.classList.add("hide");
    }
})

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    }) ;
};

button.addEventListener("click", goToTop);


// --------------------------------------------------------------------

// CODE FOR UNSELECT CHECKBOX TO HIDE MENU 

const checkbox = document.getElementById("h-menu-bar");
const links = document.querySelectorAll("#link");

links.forEach(e => {
    e.addEventListener("click", () => {
        checkbox.checked = false;
    })
})


