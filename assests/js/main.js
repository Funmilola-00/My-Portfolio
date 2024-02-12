const showMobileNav = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMobileNav("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

const scrl = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

scrl.reveal(".homeTitle", {});
scrl.reveal(".button", { delay: 200 });
scrl.reveal(".home__img", { delay: 400 });
scrl.reveal(".developerImage", { delay: 400 });
scrl.reveal(".home__social-icon", { interval: 200 });
scrl.reveal(".home__social-icon2", { interval: 200 });

scrl.reveal(".skills__subtitle", {});
scrl.reveal(".skills__text", { delay: 200 });
scrl.reveal(".skills__data", { interval: 200 });
scrl.reveal(".skills__img", { delay: 600 });

scrl.reveal(".work__img", { interval: 200 });

scrl.reveal(".contact__input", { interval: 200 });

const cover = document.querySelector(".toggle-container input");

document.addEventListener("DOMContentLoaded", () => {
  let darkMode = false;
  const toggle = document.getElementById("toggle");

  //preference from localStorage should overwrite
  if (localStorage.getItem("data-theme") === "dark") {
    darkMode = true;
    toggle.checked = true;
  } else if (localStorage.getItem("data-theme") === "light") {
    darkMode = false;
    toggle.checked = false;
  }

  if (darkMode) {
    document.body.setAttribute("data-theme", "dark");
  }

  cover.addEventListener("change", (e) => {
    if (e.target.checked) {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("data-theme", "dark");
      toggle.checked = true;
      localStorage.setItem("checked", "checked");
    } else {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("data-theme", "light");
      toggle.checked = false;
      localStorage.setItem("checked", "unchecked");
    }
  });
});


