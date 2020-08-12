const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

routes;
const coursesRouter = require("./routes/courses");
const usersRouter = require("./routes/users");

app.use("/api/courses", coursesRouter);
app.use("/api/users", usersRouter);

// end of server

// from user routes

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
let User = require("../models/user.model");
// const { registervalidation, loginvalidation } = require("../validation");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// register route
router.route("/signup").post((req, res) => {
  // validating user data
  // const { error } = registervalidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  // check if user exist in db
  // const emailExist = User.findone({ email: req.body.email });
  // if (emailExist) return res.status(400).send("Email already exists");
  // hashing passwords
  // const salt = bcrypt.gentSalt(10);
  // const hashedPassword = bcrypt.hash(req.body.password, salt);
  // create user
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const newUser = new User({ username, email, password });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// login
router.route("/login").post((req, res) => {
  // validating user data
  const { error } = loginvalidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // check if email exist in db
  const user = user.findone({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exists");
  // check if password is valid
  const validPass = bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("invalid password");
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
  // res.send('logged in');
});
module.exports = router;

// end of user routes
// .bird {
//   z-index: 1;
//   position: relative;
//   overflow: hidden;
//   justify-content: center;

//   background: url(./images/university-1.jpg) no-repeat;
//   height: 400px;

//   // background-blend-mode: soft-light;
//   background-size: cover;
//   background-position: center center;
//   padding: 2rem;

//   h1 {
//     font-family: "Arima Madurai, curve";
//     color: #000000;
//     font-size: 4rem;
//     letter-spacing: -3px;
//     text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.1);
//     position: relative;
//     z-index: 3;
//   }
//   .bird-container {
//     position: absolute;
//     top: 20px;
//     left: -10%;
//     transform: scale(0) translateX(-10vw);
//     will-change: transform;
//     animation-name: fly-right-one;
//     animation-timing-function: linear;
//     animation-iteration-count: infinite;
//     animation-duration: 15s;
//     animation-delay: 0;
//   }

//   .bird-logo {
//     background-size: auto 100%;
//     width: 110px;
//     height: 140px;
//     will-change: background-position;
//     animation-name: fly-circle;
//     animation-timing-function: steps(12);
//     animation-iteration-count: infinite;
//     animation-duration: 1s;
//     animation-delay: -0.5s;
//   }
//   @keyframes fly-circle {
//     100% {
//       background-position: -900px 0;
//     }
//   }
//   @keyframes fly-right-one {
//     0% {
//       transform: scale(0.3) translateX(-10vw);
//     }
//     10% {
//       transform: translateY(2vh) translateX(10vw) scale(0.4);
//     }
//     20% {
//       transform: translateY(0vh) translateX(30vw) scale(0.5);
//     }
//     30% {
//       transform: translateY(4vh) translateX(50vw) scale(0.6);
//     }
//     40% {
//       transform: translateY(2vh) translateX(70vw) scale(0.6);
//     }
//     50% {
//       transform: translateY(0vh) translateX(90vw) scale(0.6);
//     }
//     60% {
//       transform: translateY(0vh) translateX(110vw) scale(0.6);
//     }
//     100% {
//       transform: translateY(0vh) translateX(110vw) scale(0.6);
//     }
//   }
// }
