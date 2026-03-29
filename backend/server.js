const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

console.log("Server file is running...");

app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});


app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.send("Form received successfully!");
});