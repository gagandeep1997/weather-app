const request = require('postman-request')

const forecast = (location,callback) => {

const url = 'http://api.weatherstack.com/current?access_key=3621d8c3a24c914c62d03c49fe0c2586&query='+location.latitude+','+location.longitude

request({url,json:true},(error,response) => {
    if(error)
    {
        callback("weather api not connected to internet",undefined)
    }
    else if(response.body.error)
    {
        callback("wrong input",undefined)
    }
    else
    {
        const t=response.body.current
        const message = "it is currently "+t.temperature+" degree out.it feels like "+t.feelslike+" degree out."
        callback(undefined,message)
    }
})
}

module.exports = forecast