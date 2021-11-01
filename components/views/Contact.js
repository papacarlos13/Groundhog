import html from "html-literal";

export default () =>
  html`
    <div class="contact-content">
      <div class="question">
        <p>
          How can the Groundhog help forecast your business better?
        </p>
      </div>
      <form
        class="contact-form"
        action="https://formspree.io/f/mqkwnwvv"
        method="POST"
      >
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First, Last"
          required
        />

        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com"
          required
        />

        <div>
          <textarea
            name="message"
            id="message"
            cols="67"
            rows="5"
            placeholder="Please provide a brief description of the problem you would like the Groundhog to help your business solve."
            required
          ></textarea>
        </div>
        <input type="submit" value="Send" id="submit" />
      </form>
    </div>
  `;
