
const courses = {
    // "mobile app development" : "MD",
    "web development" : "wd",
    // "data analysis" : "DA",
    "data science" : "ds",
    "data analysis with business intelligence" : "bi",
    // "digital marketing" : "DM",
    // "project management" : "PM",
    "social media marketing" : "sm",
    "employability skills" : "es"

}

async function searchCourse (req, res)  {
    try {
        const query = req.body.query.toLowerCase();
        let paths = []
        for ( const [course, path] of Object.entries(courses)) {
            let re = new RegExp(query, "ig");
            if (course.match(re)) {
                paths.push(path)
               
            }
        }
        if (paths.length < 1){
            throw error
        }
        res.render("search", { paths })
        return
    } 
    catch (error) {
        error.message = "Course not available"
        res.render("not-found")
    }
}

module.exports = { searchCourse }