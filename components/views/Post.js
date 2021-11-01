import html from "html-literal";
export default st => html`
  <form id="sales-poster" method="POST" action="">
    <div>
      <label for="product">Product:</label>
      <select id="product" name="product">
        <option value="">Please select a product</option>
        <option value="gooey">gooey Butter slice</option>
        <option value="asiago">asiago bagel</option>
        <option value="choc">choc. long john</option>
        <option value="pie">apple pie slice</option>
      </select>
    </div>
    <div>
      <label for="date">Date:</label>
      <input type="date" name="date" id="date" required />
    </div>
    <div>
      <label for="day">Day:</label>
      <select id="day" name="day">
        <option value="">Please select a day</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
    </div>
    <div>
      <label for="produced">Amount Produced:</label>
      <input
        type="number"
        name="produced"
        id="produced"
        placeholder="enter amount"
        min="0"
        required
      />
    </div>
    <div>
      <label for="sold">Amount Sold:</label>
      <input
        type="number"
        name="sold"
        id="sold"
        placeholder="enter amount"
        min="0"
        required
      />
    </div>
    <div>
      <label for="leftover">Amount Leftover:</label>
      <input
        type="number"
        name="leftover"
        id="leftover"
        placeholder="enter amount"
        min="0"
        required
      />
    </div>
    <div>
      <input type="submit" name="submit" value="Submit Sales" />
    </div>
  </form>
`;
