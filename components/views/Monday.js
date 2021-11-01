import html from "html-literal";
export default st => html`
  <p>Current state of the api call... ${st.sales}</p>
  <p id="monday-title">Monday's Forecast</p>
  <br />
  <div class="monday-content">
    <table id="gooey-table">
      <label>
        Gooey butter:
      </label>
      <tbody>
        <tr>
          <th></th>
          <th scope="col">Produced</th>
          <th scope="col">Sold</th>
          <th scope="col">Leftover</th>
        </tr>
        <tr>
          <th scope="row">6 weeks ago</th>
          <td>10</td>
          <td>8</td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">5 weeks ago</th>
          <td>16</td>
          <td>14</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">4 weeks ago</th>
          <td>30</td>
          <td>22</td>
          <td>8</td>
        </tr>
        <tr>
          <th scope="row">3 weeks ago</th>
          <td>26</td>
          <td>25</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">2 weeks ago</th>
          <td>30</td>
          <td>26</td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">Last Week</th>
          <td>32</td>
          <td>28</td>
          <td>4</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">This Week</th>
          <td id="input-a">
            <input type="number" step="1" min="8" max="99" />
          </td>
          <td id="avg-a">Avg.Sale:</td>
          <td>Target Leftover: 2</td>
        </tr>
      </tfoot>
    </table>

    <table id="asiago-table">
      <label>
        Asiago bagel:
      </label>
      <tbody>
        <tr>
          <th></th>
          <th scope="col">Produced</th>
          <th scope="col">Sold</th>
          <th scope="col">Leftover</th>
        </tr>
        <tr>
          <th scope="row">6 weeks ago</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">5 weeks ago</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">4 weeks ago</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">3 weeks ago</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">2 weeks ago</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Last Week</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">This Week</th>
          <td id="input-b">
            <input type="number" step="1" min="8" max="99" />
          </td>
          <td id="avg-b">Avg.Sale:</td>
          <td>Target Leftover:</td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="save-bttn">
    <button onclick="${saveInput}" id="save-bttn">Save & Print</button>
  </div>
`;
function saveInput() {
  const gooeyInput = document.getElementById("#input-a").textContent;
  const asiagoInput = document.getElementById("#input-b").value;
  console.log(gooeyInput);
  console.log(asiagoInput);
}
