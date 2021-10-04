import html from "html-literal";
export default () =>
  `<main>
<div class="tagline">
    <p>"Let's plan for 6 more days of spring!"</p>
</div>
       <div class="main-content">
        <label for="day-select"><em>What's the forecast for:</em></label>
        <select name="day" id="day-select" onchange="location = this.value;">
            <option value=""> --Please choose a day-- </option>
            <option value="Plan">Monday</option>
            <option value="tues">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thur">Thursday</option>
            <option value="fri">Friday</option>
            <option value="sat">Saturday</option>
            <option value="sun">Sunday</option>
        </select>
    </div>
</main>`;
