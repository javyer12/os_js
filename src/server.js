const express = require("express");

const app = express();
const port = 8080;

const routes = require("./routes/monitoring");
app.use(express.static("src/public"));
// app.use("/", routes);
// app.use("/about", routes);
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
