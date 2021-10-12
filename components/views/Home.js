import html from "html-literal";
export default st => html`
  <section>
    <div class="tagline">
      <p>"Let's plan for 6 more days of spring!"</p>
    </div>
    <div class="main-content">
      <label for="day-select"><em>What's the forecast for:</em></label>
      <select name="day" id="day-select" onchange="location = this.value;">
        <option value=""> --Please choose a day-- </option>
        <option value="Monday">Monday</option>
        <option value="">Tuesday</option>
        <option value="">Wednesday</option>
        <option value="">Thursday</option>
        <option value="">Friday</option>
        <option value="">Saturday</option>
        <option value="">Sunday</option>
      </select>
    </div>
    <div class="temp">
      <p>
        Today is ${todayName}. Expect a high of
        ${kelvinToFahrenheit(st.weather.today)}&deg;F., and
        ${st.weather.todaydescript}.
      </p>
      <p>
        ${weekdayName[numofDay(tomorrowNum)]} will be
        ${st.weather.tomorrowdescript}, with a high of
        ${kelvinToFahrenheit(st.weather.tomorrowhigh)}&deg;F., and a low of
        ${kelvinToFahrenheit(st.weather.tomorrowlow)}&deg;F.
      </p>
      <p>
        ${weekdayName[numofDay(twodaysNum)]} will be
        ${st.weather.twodaysdescript}, with a high of
        ${kelvinToFahrenheit(st.weather.twodayshigh)}&deg;F., and a low of
        ${kelvinToFahrenheit(st.weather.twodayslow)}&deg;F.
      </p>
      <p>
        ${weekdayName[numofDay(threedaysNum)]} will be
        ${st.weather.threedaysdescript}, with a high of
        ${kelvinToFahrenheit(st.weather.threedayshigh)}&deg;F., and a low of
        ${kelvinToFahrenheit(st.weather.threedayslow)}&deg;F.
      </p>
      <p>
        ${weekdayName[numofDay(fourdaysNum)]} will be
        ${st.weather.fourdaysdescript}, with a high of
        ${kelvinToFahrenheit(st.weather.fourdayshigh)}&deg;F., and a low of
        ${kelvinToFahrenheit(st.weather.fourdayslow)}&deg;F.
      </p>
      <p>
        ${weekdayName[numofDay(fivedaysNum)]} will be
        ${st.weather.fivedaysdescript}, with a high of
        ${kelvinToFahrenheit(st.weather.fivedayshigh)}&deg;F., and a low of
        ${kelvinToFahrenheit(st.weather.fivedayslow)}&deg;F.
      </p>
      <p>
        ${weekdayName[numofDay(sixdaysNum)]} will be
        ${st.weather.sixdaysdescript}, with a high of
        ${kelvinToFahrenheit(st.weather.sixdayshigh)}&deg;F., and a low of
        ${kelvinToFahrenheit(st.weather.sixdayslow)}&deg;F.
      </p>
    </div>
  </section>
`;
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

const theDate = new Date();
const weekdayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const todayName = weekdayName[theDate.getDay()];
const tomorrowNum = theDate.getDay() + 1;
const twodaysNum = theDate.getDay() + 2;
const threedaysNum = theDate.getDay() + 3;
const fourdaysNum = theDate.getDay() + 4;
const fivedaysNum = theDate.getDay() + 5;
const sixdaysNum = theDate.getDay() + 6;

function numofDay(val) {
  if (val < 7) {
    return val;
  }
  if (val >= 7) {
    return val - 7;
  }
}
