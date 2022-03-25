/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav 
function buildNav(event) {
  const navListUnorderedList = document.getElementById("navbar__list");
  
  const containerCount = document.getElementsByClassName("landing__container").length;
  for (i = 1; i <= containerCount; i++) {
    const navListItem = document.createElement("li");
   
    navListItem.classList.add("menu__link");
    // navListItem.classList.toggle("visible");

    navListItem.id = `navbarsection ${i}`;
    const navListItemText = document.createTextNode(`Section ${i}`);
    navListItem.appendChild(navListItemText);
    navListUnorderedList.appendChild(navListItem);
    navListItem.addEventListener("click", scrollToNavItem)
}

  const x = document.getElementsByClassName("menu__link")
  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function() {
      console.log(1)
    const current = document.getElementsByClassName("menu__link");
    for (let i = 0; i < x.length; i++) {
      current[i].classList.remove("active");
    }
    console.log(this)
    this.classList.add("active");
        scrollToNavItem
    });
  }
}
buildNav();


// Add class 'active' to section when near top of viewport
function active(event) {
  console.log(event.target.innerHTML);
  const sectionActivated = document.querySelector(
    `[navbar-menu^="${navbar - menu}"]`
  );
}
// Scroll to anchor ID using scrollTO event
function scrollToNavItem(event) {
      console.log(event.target.innerHTML);
      const dataNav = event.target.innerHTML;
      const section = document.querySelector(`[data-nav^="${dataNav}"]`);
      section.scrollIntoView({behavior: "smooth"});
}

/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu

// Scroll to section on link click 
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <
      (window.innerHeight / 4 || document.documentElement.clientHeight / 4) &&
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Set sections as active 
function activateInViewSections() {
  console.log("scrolling");
  document.querySelectorAll("[data-nav]").forEach(function (section) {
    console.log(section.id, isInViewport(section));

    if (isInViewport(section)) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}


window.addEventListener("scroll", activateInViewSections);
