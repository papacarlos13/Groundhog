/* eslint-disable no-prototype-builtins */
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = new Navigo(window.location.origin);

let mondayElement = document.getElementById("something");
console.log(mondayElement);

router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";

    switch (page) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=38.6334&lon=-90.4001&exclude=current,minutely,hourly&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
          )
          .then(response => {
            state.Home.weather = {};
            state.Home.weather.today = response.data.daily[0].temp.max;
            state.Home.weather.todaydescript =
              response.data.daily[0].weather[0].main;
            state.Home.weather.tomorrowhigh = response.data.daily[1].temp.max;
            state.Home.weather.tomorrowlow = response.data.daily[1].temp.min;
            state.Home.weather.tomorrowdescript =
              response.data.daily[1].weather[0].main;
            state.Home.weather.twodayshigh = response.data.daily[2].temp.max;
            state.Home.weather.twodayslow = response.data.daily[2].temp.min;
            state.Home.weather.twodaysdescript =
              response.data.daily[2].weather[0].main;
            state.Home.weather.threedayshigh = response.data.daily[3].temp.max;
            state.Home.weather.threedayslow = response.data.daily[3].temp.min;
            state.Home.weather.threedaysdescript =
              response.data.daily[3].weather[0].main;
            state.Home.weather.fourdayshigh = response.data.daily[4].temp.max;
            state.Home.weather.fourdayslow = response.data.daily[4].temp.min;
            state.Home.weather.fourdaysdescript =
              response.data.daily[4].weather[0].main;
            state.Home.weather.fivedayshigh = response.data.daily[5].temp.max;
            state.Home.weather.fivedayslow = response.data.daily[5].temp.min;
            state.Home.weather.fivedaysdescript =
              response.data.daily[5].weather[0].main;
            state.Home.weather.sixdayshigh = response.data.daily[6].temp.max;
            state.Home.weather.sixdayslow = response.data.daily[6].temp.min;
            state.Home.weather.sixdaysdescript =
              response.data.daily[6].weather[0].main;
            done();
          })
          .catch(err => console.log(err));
        break;
      case "Monday":
        axios
          .get(`${process.env.SALES_DATA_API_URL}`)
          .then(response => {
            console.log("All data", response.data);
            let result = response.data;
            console.log("result", result);
            let resultMonday = result.filter(function(result) {
              return result.day == "Monday";
            });
            console.log("resultMonday", resultMonday);
            let gooeyMonday = resultMonday.filter(function(resultMonday) {
              return resultMonday.product == "gooey";
            });
            console.log("gooeyMonday", gooeyMonday);
            let asiagoMonday = resultMonday.filter(function(resultMonday) {
              return resultMonday.product == "asiago";
            });
            state.Monday.mondayData = resultMonday;
            state.Monday.gooeyData = gooeyMonday;
            state.Monday.asiagoData = asiagoMonday;
            done();
          })
          .catch(err => console.log(err));
        break;
      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();

  addEventListeners(st);
}

function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (st.page === "Home") {
    document.querySelector("#monday-link").addEventListener("click", event => {
      event.preventDefault();
      router.navigate("/Monday");
    });
  }

  if (st.page === "Post") {
    document
      .querySelector("#sales-poster")
      .addEventListener("submit", event => {
        event.preventDefault();

        const inputList = event.target.elements;

        const requestData = {
          product: inputList.product.value,
          date: inputList.date.value,
          day: inputList.day.value,
          produced: inputList.produced.value,
          sold: inputList.sold.value,
          leftover: inputList.leftover.value
        };
        console.log("request Body", requestData);

        axios
          .post(`${process.env.SALES_DATA_API_URL}`, requestData)
          .then(response => {
            // state.Monday.sales.push(response.data);
            // state.Monday.sales = {};
            // state.Monday.sales.product = response.data.product;
            // state.Monday.sales.date = response.data.date;
            // state.Monday.sales.day = response.data.day;
            // state.Monday.sales.produced = response.data.produced;
            // state.Monday.sales.sold = response.data.sold;
            // state.Monday.sales.leftover = response.data.leftover;
            console.log("requestData", requestData);
            router.navigate("/Home");
          })
          .catch(error => {
            console.log("It puked", error);
          });
      });
  }
  if (st.page === "Monday") {
    document.querySelector("#save-bttn").addEventListener("click", event => {
      event.preventDefault();

      router.navigate("/Print");
    });
  }
}
