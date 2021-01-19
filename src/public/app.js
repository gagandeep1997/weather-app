fetch('http://localhost:3000/weather?search=delhi').then((response) => {
    response.json().then((data) => {
        //console.log(data.forecast)
    })
})

const form = document.querySelector('form')
const searchname = document.querySelector('input')
form.addEventListener('submit',(e) => {
    e.preventDefault()
    fetch('http://localhost:3000/weather?search='+searchname.value).then((response) => {
    response.json().then((data) => {
        console.log(data.forecast)
    })
    })
})