import html from "html-literal";

export default st =>
  html`
    <p id="print-title">Monday's Forecast</p>

    <table id="prnt-table">
      <tr>
        <td>Gooey Butter:</td>
        <td>${st.mondayInputs[0].gooeyPrint}</td>
      </tr>
      <tr>
        <td>Asiago Bagel:</td>
        <td>${st.mondayInputs[0].asiagoPrint}</td>
      </tr>
      <tr>
        <td>Choc Long John:</td>
        <td>no data</td>
      </tr>
      <tr>
        <td>Apple Pie slice:</td>
        <td>no data</td>
      </tr>
    </table>

    <div id="prnt-bttn">
      <button onclick="window.print()">Print</button>
    </div>
  `;
