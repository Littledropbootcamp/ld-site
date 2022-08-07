const Router = require("express").Router()
const { signup, enquiry } = require("./controller")

const UserRouter = (app) => {
    Router.post('/signup', signup)
    Router.post('/enquiry', enquiry)
    app.use(Router)
}

module.exports = UserRouter