import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhigyanchakraborty61:VYJAtIELhGjHkI9L@cluster0.4ixhrs5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error to Database"));
db.once("open", () => {
  console.log("DATABASE CONNECTED SUCCESSFULLY");
});

app.get('/home', (req, res) => {
  res.send("This is the home page");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
