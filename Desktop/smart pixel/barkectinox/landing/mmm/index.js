const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const userRouter = require("./api/controller/user/router");

require("dotenv").config()
// const useRouter = require("./api/controllers/user/router");

const app = express();
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());



const PORT = process.env.PORT || 2000
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});


const db = mongoose.connection
db.once("open", ()=> console.log("database connected"))



app.use("/user", userRouter);

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));

