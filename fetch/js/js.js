fetch('style.css', {
    method: 'POST'
})
    .then(response => {
        if (response.status  === 404) {
            return Promise.reject();
        }
        return response.text()
    })
    .then(text => content.innerText = text)
    .catch(() => console.log('ошибка'));

fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
    .then(response => {
        if (response.status  === 404) {
            return Promise.reject();
        }
        return response.json()
    })
    .then(cities => console.log(cities))
    .catch(() => console.log('ошибка'));