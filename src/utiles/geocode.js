const request = require('postman-request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYXNmYXNmYXMiLCJhIjoiY2tqemFid3h4MDVuMTJ2cnVpY2l0ZWFkYyJ9.IkCWpL9X4EzEr1DsHdnURA&limit=1'

    request({ url , json:true },(error,response) => {
    if(error)
    {
        callback("internet connection problem",undefined)
    }
    else if(response.body.features.length===0)
    {
        callback("wrong input",undefined)
    }
    else
    {
        const location = {
            longitude:response.body.features[0].center[0],
            latitude:response.body.features[0].center[1]
        }
        callback(undefined,location)
    }
    })
}

module.exports=geocode