const Router = require('express').Router()
const { searchCourse } = require('./controller')

const SearchRouter = (app) => {
    Router.get("/search/:query", searchCourse);
    app.use(Router)
}

module.exports = SearchRouter