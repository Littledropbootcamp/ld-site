
const courses = {
    "mobile app development" : "MD",
    "web development" : "WD",
    "data analysis" : "DA",
    "datascience" : "DS",
    "business intelligence" : "BI",
    "digital marketing" : "DM",
    "project management" : "PM",
    "social media marketing" : "SM",
    "employability skills" : "ES"

}

async function searchCourse (req, res)  {
    try {
        let query = req.params.query;
        for ( const [course, path] of Object.entries(courses)) {
            let re = new RegExp(query, "i");
            if (!course.match(re)) {
                const error = new Error("Course not available")
                error.code = 400
                throw error
            }
            course.match(re)
            res.send(path)
            return
        }
    } 
    catch (error) {
        res.send(error.message)
    }
}

module.exports = { searchCourse }