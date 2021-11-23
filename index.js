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

            let u =
              state.Monday.gooeyData[state.Monday.gooeyData.length - 1].sold;
            let v =
              state.Monday.gooeyData[state.Monday.gooeyData.length - 2].sold;
            let w =
              state.Monday.gooeyData[state.Monday.gooeyData.length - 3].sold;
            let x =
              state.Monday.gooeyData[state.Monday.gooeyData.length - 4].sold;
            let y =
              state.Monday.gooeyData[state.Monday.gooeyData.length - 5].sold;
            let z =
              state.Monday.gooeyData[state.Monday.gooeyData.length - 6].sold;
            const minGooey = Math.min(u, v, w, x, y, z);
            state.Monday.minGooey = minGooey;
            let a =
              state.Monday.asiagoData[state.Monday.asiagoData.length - 1].sold;
            let b =
              state.Monday.asiagoData[state.Monday.asiagoData.length - 2].sold;
            let c =
              state.Monday.asiagoData[state.Monday.asiagoData.length - 3].sold;
            let d =
              state.Monday.asiagoData[state.Monday.asiagoData.length - 4].sold;
            let e =
              state.Monday.asiagoData[state.Monday.asiagoData.length - 5].sold;
            let f =
              state.Monday.asiagoData[state.Monday.asiagoData.length - 6].sold;
            const minAsiago = Math.min(a, b, c, d, e, f);
            state.Monday.minAsiago = minAsiago;

            const getAvg = function(num1, num2, num3, num4, num5, num6) {
              let avg = Math.round(
                (num1 + num2 + num3 + num4 + num5 + num6) / 6
              );
              return avg;
            };

            const avgGooey = getAvg(u, v, w, x, y, z);
            state.Monday.avgGooey = avgGooey;
            const avgAsiago = getAvg(a, b, c, d, e, f);
            state.Monday.avgAsiago = avgAsiago;

            const getRate = function(num1, num2, num3, num4, num5, num6) {
              let first = num1 - num2;
              let second = num2 - num3;
              let third = num3 - num4;
              let fourth = num4 - num5;
              let fifth = num5 - num6;
              let rate = (first + second + third + fourth + fifth) / 5;
              if (rate > 0) {
                let pos = ["+", rate.toFixed(2)];
                return pos.join("");
              } else {
                return rate.toFixed(2);
              }
            };

            const gooeyRate = getRate(u, v, w, x, y, z);
            state.Monday.gooeyRate = gooeyRate;
            const asiagoRate = getRate(a, b, c, d, e, f);
            state.Monday.asiagoRate = asiagoRate;

            const gooeyForecast = Math.round(avgGooey + parseInt(gooeyRate));
            state.Monday.gooeyForecast = gooeyForecast;
            const asiagoForecast = Math.round(avgAsiago + parseInt(asiagoRate));
            state.Monday.asiagoForecast = asiagoForecast;

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
            console.log("requestData", requestData);
            window.alert("Your data has been successfully recorded!");
            router.navigate("/Home");
          })
          .catch(error => {
            console.log("It puked", error);
          });
      });
  }
  if (st.page === "Monday") {
    document.querySelector("#mondayForm").addEventListener("submit", event => {
      event.preventDefault();

      const userInput = {
        gooeyPrint: event.target.elements.inputOne.value,
        asiagoPrint: event.target.elements.inputTwo.value
      };
      console.log(userInput);
      state.Print.mondayInputs.push(userInput);
      router.navigate("/Print");
    });
  }
}
