const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
// db role
const db = require("./models");
const Role = db.role;

const app = express();
const port = process.env.PORT || 5000;
var corsOptions = {
  origin: "http://localhost:5001",
};

app.use(cors(corsOptions));
app.use(express.json());

// db connection
const uri = process.env.ATLAS_URI;
db.mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
// initial function
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
