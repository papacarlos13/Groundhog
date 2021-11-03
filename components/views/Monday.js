import html from "html-literal";
// for loop
export default st => html`
  <p id="monday-title">Monday's Forecast</p>
  <br />
  <form id="mondayForm" method="POST" action="">
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
            <td>${st.gooeyData[st.gooeyData.length - 6].produced}</td>
            <td>${st.gooeyData[st.gooeyData.length - 6].sold}</td>
            <td>${st.gooeyData[st.gooeyData.length - 6].leftover}</td>
          </tr>
          <tr>
            <th scope="row">5 weeks ago</th>
            <td>${st.gooeyData[st.gooeyData.length - 5].produced}</td>
            <td>${st.gooeyData[st.gooeyData.length - 5].sold}</td>
            <td>${st.gooeyData[st.gooeyData.length - 5].leftover}</td>
          </tr>
          <tr>
            <th scope="row">4 weeks ago</th>
            <td>${st.gooeyData[st.gooeyData.length - 4].produced}</td>
            <td>${st.gooeyData[st.gooeyData.length - 4].sold}</td>
            <td>${st.gooeyData[st.gooeyData.length - 4].leftover}</td>
          </tr>
          <tr>
            <th scope="row">3 weeks ago</th>
            <td>${st.gooeyData[st.gooeyData.length - 3].produced}</td>
            <td>${st.gooeyData[st.gooeyData.length - 3].sold}</td>
            <td>${st.gooeyData[st.gooeyData.length - 3].leftover}</td>
          </tr>
          <tr>
            <th scope="row">2 weeks ago</th>
            <td>${st.gooeyData[st.gooeyData.length - 2].produced}</td>
            <td>${st.gooeyData[st.gooeyData.length - 2].sold}</td>
            <td>${st.gooeyData[st.gooeyData.length - 2].leftover}</td>
          </tr>
          <tr>
            <th scope="row">Last Week</th>
            <td>${st.gooeyData[st.gooeyData.length - 1].produced}</td>
            <td>${st.gooeyData[st.gooeyData.length - 1].sold}</td>
            <td>${st.gooeyData[st.gooeyData.length - 1].leftover}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">This Week</th>
            <td>
              <input
                type="number"
                id="inputOne"
                name="inputOne"
                step="1"
                min="8"
                max="99"
              />
            </td>
            <td id="avg-a">Avg.Sale:</td>
            <td>Target: 2</td>
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
            <td>${st.asiagoData[st.asiagoData.length - 6].produced}</td>
            <td>${st.asiagoData[st.asiagoData.length - 6].sold}</td>
            <td>${st.asiagoData[st.asiagoData.length - 6].leftover}</td>
          </tr>
          <tr>
            <th scope="row">5 weeks ago</th>
            <td>${st.asiagoData[st.asiagoData.length - 5].produced}</td>
            <td>${st.asiagoData[st.asiagoData.length - 5].sold}</td>
            <td>${st.asiagoData[st.asiagoData.length - 5].leftover}</td>
          </tr>
          <tr>
            <th scope="row">4 weeks ago</th>
            <td>${st.asiagoData[st.asiagoData.length - 4].produced}</td>
            <td>${st.asiagoData[st.asiagoData.length - 4].sold}</td>
            <td>${st.asiagoData[st.asiagoData.length - 4].leftover}</td>
          </tr>
          <tr>
            <th scope="row">3 weeks ago</th>
            <td>${st.asiagoData[st.asiagoData.length - 3].produced}</td>
            <td>${st.asiagoData[st.asiagoData.length - 3].sold}</td>
            <td>${st.asiagoData[st.asiagoData.length - 3].leftover}</td>
          </tr>
          <tr>
            <th scope="row">2 weeks ago</th>
            <td>${st.asiagoData[st.asiagoData.length - 2].produced}</td>
            <td>${st.asiagoData[st.asiagoData.length - 2].sold}</td>
            <td>${st.asiagoData[st.asiagoData.length - 2].leftover}</td>
          </tr>
          <tr>
            <th scope="row">Last Week</th>
            <td>${st.asiagoData[st.asiagoData.length - 1].produced}</td>
            <td>${st.asiagoData[st.asiagoData.length - 1].sold}</td>
            <td>${st.asiagoData[st.asiagoData.length - 1].leftover}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">This Week</th>
            <td>
              <input
                type="number"
                id="inputTwo"
                name="inputTwo"
                step="1"
                min="8"
                max="99"
              />
            </td>
            <td id="avg-b">Avg.Sale:</td>
            <td>Target: 4</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="save-bttn">
      <input type="submit" name="submit" id="save-bttn" value="Save & Print" />
    </div>
  </form>
`;
