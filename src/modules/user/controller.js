
async function signup (req, res) {
    try {
        const {  name, email } = req.body
        const data  = { name, email};

        function sendEmail(){
            //email function
            return
        }
        res.status(200).redirect("/")
        return
    } 
    catch (err) {
        console.log(err)
        
    }
};


async function enquiry (req, res) {
    try {
        const {  name, email } = req.body
        const data  = { name, email};

        function sendEmail(){
            //email function
            return
        }
        res.status(200).redirect("/contact")
        return
    } 
    catch (err) {
        console.log(err)
        
    }
};

module.exports = authRouter = { signup, enquiry }
