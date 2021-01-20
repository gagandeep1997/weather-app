const path=require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const geocode = require('./utiles/geocode')
const forecast = require('./utiles/forecast')
const port = process.env.PORT || 3000


const dirname=path.join(__dirname,'../src')
app.set('view engine','hbs')
hbs.registerPartials('partials')
app.use(express.static(dirname))
app.set('views', path.join(__dirname, 'views'));

app.get('/weather',(req,res) => {
    if(!req.query.search)
    {
        return res.send("please provide a search term")
    }
    geocode(req.query.search,(error,response) => {
        if(error)
        {
            return res.send({error})
        }
        const location=response;
        forecast(location,(error,forecastresponse) => {
            if(error)
            {
                return res.send({error})
            }
            res.send({
                place:req.query.search,
                forecast:forecastresponse
            })
        })
    })
})

app.get('',(req,res) => {
    res.render('index')
})

app.get('/about',(req,res) => {
    res.render('about')
})

app.get('/help',(req,res) => {
    res.render('help')
})

app.listen(port,() => {
    console.log('server is running')
})