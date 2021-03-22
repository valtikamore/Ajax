const resultBlock = document.querySelector('#result')
const pageNumber = document.querySelector('#page-number')
const clickMeButton = document.querySelector('#click-me')

clickMeButton.addEventListener('click', makeRequest)

function makeRequest() {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`, {
        success: function (data) {
            data.forEach(el => {
                const img = document.createElement('img')
                img.src = el.thumbnail
                document.querySelector('#result').appendChild(img)
            })
        }
    })
}


//types get / post /put /delete /options

//GET when i want to get images / all i need
