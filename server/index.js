const express = require("express");
const app = express();
//middleware 4-10
const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

app.use(express.json());
app.use(logging);

app
  .route("/status")
  .get((request, response) => {
    response.status(200).json({ message: "Service A-OK" });
  })
  .post((request, response) => {
    response.json({ requestBody: request.body });
  });

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
