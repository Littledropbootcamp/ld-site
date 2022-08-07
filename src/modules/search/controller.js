
const courses = {
    // "mobile app development" : "MD",
    "web development" : "WD",
    // "data analysis" : "DA",
    "datascience" : "DS",
    "data analysis with business intelligence" : "BI",
    // "digital marketing" : "DM",
    // "project management" : "PM",
    "social media marketing" : "SM",
    "employability skills" : "ES"

}

async function searchCourse (req, res)  {
    try {
        const query = req.body.query;
        let paths = []
        for ( const [course, path] of Object.entries(courses)) {
            let re = new RegExp(query, "i");
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