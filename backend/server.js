require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/EnquiryRoutes");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// logger
app.use(morgan("tiny"));

app.use("/api/enquiry", enquiryRoutes);

app.use(express.static("frontend/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
