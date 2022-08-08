const nodemailer = require("nodemailer")
const Settings = require("../../utils/settings")

const { validateData } = require("../../utils/validator")

const { signupSchemaValidator, enquirySchemaValidator } = require('./schema')

async function emailTemplate (name){
    const emailBody = `<h4>Hi ${name}</h4><h3>Welcome to Little Drop Education Bootcamp</h3> <p>An online not-for-profit organization tackling computer illiteracy and youth unemployment rates.</p> <p>We will keep updating you on events such as new cohort form opening, newsletters, fantastic articles and lots more</p><p>Kindly follow us on our social media pages</p><p><a href='https://www.linkedin.com/in/little-drop-430106210'>LinkedIn</a></p><p><a href='https://twitter.com/DropEducation?s=08'>Twitter</a></p>`
    return emailBody
}


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
        const user = req.body
        
        const data = await validateData(user, signupSchemaValidator);
        console.log(data)
        if (!data.isValid) {
            throw data.err;
        }

        let userMail = await emailTemplate(name)
        let mailOptions = {
            from: Settings.getUser(),
            to: email,
            subject: 'Welcome',
            html: userMail,
          };

        
        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log("Signup Email sent successfully");
            }
        });
        let msg = 'alert("Email sent successfully)'
        res.render("index")
        return
    } 
    catch (err) {
        console.log(err)
        let msg =  'alert("Error! Try  again")'
        res.render("index")
    }
};


async function enquiry (req, res) {
    try {
        const {  name, email, message } = req.body
        
        const user = req.body
        const data = await validateData(user, enquirySchemaValidator);
        if (!data.isValid) {
            throw data.err;
        }

        let mailOptions = {
            from: Settings.getUser(),
            to: "ldecoding1@gmail.com",
            subject: 'Contact Us - LD Website',
            html: `<h2>From ${name} ${email} </h2> <p>${message}</p>`
          };

        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log("Enquiry Email sent successfully");
            }
        });
        let msg = 'alert("Email sent successfully)'
        res.render("contact")
        return
    } 
    catch (err) {
        console.log(err)
        let msg = 'alert("Error! Try again")'
        res.render("contact")
        
    }
};

module.exports = authRouter = { signup, enquiry }
