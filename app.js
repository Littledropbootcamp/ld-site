const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path")
const Settings = require("./src/utils/settings");
const UserRouter = require("./src/modules/user/router")
const SearchRouter= require("./src/modules/search/router")
const PagesRouter= require("./src/modules/pages/router")


const { connectDatabase } = require("./src/utils/database");

const app = express();
app.set("view engine", "ejs")
// app.use(express.static("public"))
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));

PagesRouter(app);
UserRouter(app);
SearchRouter(app)


connectDatabase()
  .then(() => {
    console.log("database connected successfully");
    const PORT = Settings.getPort() || 5000;
    app.listen(PORT, () => {
      console.log(`app started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });