import groundhog from "../assets/groundhog.jpg";
import html from "html-literal";

export default () => html`
  <header>
    <img id="logo-img" src="${groundhog}" alt="App logo" />
    <div class="header-text">
      <h2>Groundhog</h2>
      <h2>Production Planner</h2>
    </div>
  </header>
`;
