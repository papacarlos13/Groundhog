import html from "html-literal";

export default () =>
  html`
    <p id="print-title">Monday's Forecast</p>

    <table id="prnt-table">
      <tr>
        <td>Gooey Butter:</td>
        <td id="gooeyPrint"></td>
      </tr>
      <tr>
        <td>Asiago Bagel:</td>
        <td id="asiagoPrint"></td>
      </tr>
      <tr>
        <td>Choc Long John:</td>
        <td>#</td>
      </tr>
      <tr>
        <td>Apple Pie slice:</td>
        <td>#</td>
      </tr>
    </table>

    <div id="prnt-bttn">
      <button onclick="window.print()">Print</button>
    </div>
  `;

// let gooeyInput = document.querySelector("#input-a").innerHTML;
// let asiagoInput = document.querySelector("#input-b").innerHTML;
