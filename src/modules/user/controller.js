const nodemailer = require("nodemailer")
const Settings = require("../../utils/settings")


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
async function signup (req, res) {
    try {
        const { name, email } = req.body
        console.log(name, email)
        

        let mailOptions = {
            from: Settings.getUser(),
            to: email,
            subject: 'Welcome',
            text: `Hi ${name} ,
                   Welcome to littledrop. Be sure to recieve regular updates from us.
                   Regards`
          };

        
        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                throw err
            } else {
                console.log("Signup Email sent successfully");
            }
        });
        res.status(200).redirect("/")
        return
    } 
    catch (err) {
        console.log(err)
        
    }
};


async function enquiry (req, res) {
    try {
        const {  name, email, message } = req.body
        
        let mailOptions = {
            from: Settings.getUser(),
            to: "ldecoding1@gmail.com",
            subject: 'Enquiry - LD Website',
            text: `Hi little drop
                  I am ${name} (${email}). This is my message
                  ${message}
                   
                   Regards`
          };

        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                throw err
            } else {
                console.log("Enquiry Email sent successfully");
            }
        });

        res.status(200).redirect("/contact")
        return
    } 
    catch (err) {
        console.log(err)
        
    }
};

module.exports = authRouter = { signup, enquiry }
