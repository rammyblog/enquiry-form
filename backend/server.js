require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/EnquiryRoutes");
const morgan = require("morgan");
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// logger
app.use(morgan("tiny"));

app.use("/api/enquiry", enquiryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
