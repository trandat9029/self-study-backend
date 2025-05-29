
const getHomepage = (req, res) =>{
    //process data
    //call model 
    res.send('hello world');
}

const getABC = (req, res) =>{
    res.send('check nodemon');
}

const getTest = (req, res) =>{
    res.render('sample.ejs' )
}

module.exports = {
    getHomepage,
    getABC,
    getTest

}