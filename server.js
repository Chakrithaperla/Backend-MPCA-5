const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("API Running");
});

const PORT = process.env.PORT;

app.post("/tasks", createTask);

app.get("/tasks", getTasks);

app.get("/tasks/:id", getTask);

app.put("/tasks/:id", updateTask);

app.delete("/tasks/:id", deleteTask);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});