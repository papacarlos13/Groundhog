import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();
}
render(state.Home);

document
  .querySelector("#logo-img")
  .addEventListener(
    "mouseover",
    event =>
      (event.target.title =
        "The Groundhog is ready to help you forecast the next 6 weeks!")
  );

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
