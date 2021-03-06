import html from "html-literal";

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
                min="${st.minGooey}"
                max="99"
              />
            </td>
            <td id="avg-a" colspan="2">
              Avg. Sale: ${st.avgGooey}, Rate: ${st.gooeyRate}
            </td>
          </tr>
          <tr>
            <td class="prediction" colspan="4">
              Groundhog's prediction for this Monday: ${st.gooeyForecast} gooey
              butter.
            </td>
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
            <td id="testme">${st.asiagoData[st.asiagoData.length - 6].sold}</td>
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
                min="${st.minAsiago}"
                max="99"
              />
            </td>
            <td id="avg-b" colspan="2">
              Avg. Sale: ${st.avgAsiago}, Rate: ${st.asiagoRate}
            </td>
          </tr>
          <tr>
            <td class="prediction" colspan="4">
              Groundhog's prediction for this Monday: ${st.asiagoForecast}
              asiago bagels.
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="save-bttn">
      <input type="submit" name="submit" id="save-bttn" value="Save & Print" />
    </div>
  </form>
`;
