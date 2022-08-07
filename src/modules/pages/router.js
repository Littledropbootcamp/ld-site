const Router = require("express").Router()

const PagesRouter = (app) => {
    Router.get('/', (req, res) => {
        res.render("index")
    })
    Router.get('/About', (req, res) => {
        res.render("About")
    })
    Router.get('/blog', (req, res) => {
        res.render("blog")
    })
    Router.get('/Business', (req, res) => {
        res.render("Business")
    })
    Router.get('/contact', (req, res) => {
        res.render("contact")
    })
    Router.get('/course', (req, res) => {
        res.render("course")
    })
    Router.get('/coding', (req, res) => {
        res.render("coding")
    })
    
    Router.get('/Datascience', (req, res) => {
        res.render("Datascience")
    })
    Router.get('/Employability', (req, res) => {
        res.render("Employability")
    })
   
    Router.get('/non-coding', (req, res) => {
        res.render("non-coding")
    })
    Router.get('/Socialmedia', (req, res) => {
        res.render("Socialmedia")
    })
    Router.get('/webdev', (req, res) => {
        res.render("webdev")
    })
    app.use(Router)
}

module.exports = PagesRouter