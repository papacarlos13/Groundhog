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
  </section>
  Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
  like ${kelvinToFahrenheit(st.weather.feelsLike)}F
`;
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
