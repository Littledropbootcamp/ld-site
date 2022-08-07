const Router = require('express').Router()
const { searchCourse } = require('./controller')

const SearchRouter = (app) => {
    Router.post("/search", searchCourse);
    app.use(Router)
}

module.exports = SearchRouter