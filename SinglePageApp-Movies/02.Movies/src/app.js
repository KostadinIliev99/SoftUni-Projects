import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";
import { logoutPage } from "./logout.js";
import { updateNav } from "./util.js";


const routes = {
  "/": homePage,
  "/login": loginPage,
  "/register": registerPage,
  "/logout": logoutPage,
  "/create": createPage,
};

document.querySelector("nav").addEventListener("click", onNavigate);
document
  .querySelector("#add-movie-button a")
  .addEventListener("click", onNavigate);

function onNavigate(e) {
  if (e.target.tagName == "A" && e.target.href) {
    e.preventDefault();
    const url = new URL(e.target.href);

    const view = routes[url.pathname];
    if (typeof view == "function") {
      view();
    }
  }
}

updateNav();
homePage();
