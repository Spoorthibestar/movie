const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = 5000;

app.post("/api/book", (req, res) => {
  const { movieTitle, row, col } = req.body;

  if (!movieTitle || !row || !col) {
    return res.status(400).json({ message: "Missing booking information." });
  }

  // Simulate a successful booking response
  console.log(`Booking successful for ${movieTitle}, Row: ${row}, Col: ${col}`);
  res.status(200).json({ message: "Booking successful!" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
