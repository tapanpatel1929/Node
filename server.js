const express = require("express");
const mongoose = require('mongoose');
const app = express();
var cors = require('cors')
const productsRoute = require("./Routes/products.route")
const authRoute = require("./Routes/auth.route")
const userRoute = require("./Routes/user.route")

const port = 3000;

main().catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb+srv://tapanpatel1929:tapanpatel1929@cluster0.5v2ak7l.mongodb.net/');
    console.log("database connected");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

var allowlist = ['http://example1.com', 'http://example2.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate))
app.use(express.json());


app.get("/", (req, res, next) => {
    // data base
    res.send("Hello World!");
});

app.use("/products", productsRoute)
app.use("/auth", authRoute)
app.use("/users", userRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
