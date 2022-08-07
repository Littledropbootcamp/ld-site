const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path")
const Settings = require("./src/utils/settings");
const UserRouter = require("./src/modules/user/router")
const SearchRouter= require("./src/modules/search/router")
const PagesRouter= require("./src/modules/pages/router")
const nodemailer = require("nodemailer")


// const { connectDatabase } = require("./src/utils/database");

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


// connectDatabase()
//   .then(() => {
//     console.log("database connected successfully");
//     const PORT = Settings.getPort() || 5000;
//     app.listen(PORT, () => {
//       console.log(`app started on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });



let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: Settings.getUser(),
    pass: Settings.getPassword(),
    clientId: Settings.getClientID(),
    clientSecret: Settings.getClientSecret(),
    refreshToken: Settings.getRefreshToken()
  }
});




let mailOptions = {
  from: 'rtosi@gmail.com',
  to: 'blinkode@gmail.com',
  subject: 'Nodemailer Project',
  text: 'Hi from your nodemailer project'
};

// transporter.sendMail(mailOptions, function(err, data) {
//   if (err) {
//     console.log("Error " + err);
//   } else {
//     console.log("Email sent successfully");
//   }
// });


const PORT = Settings.getPort() || 8000
  app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`);
  });