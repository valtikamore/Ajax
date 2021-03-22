const resultBlock = document.querySelector('#result')
const pageNumber = document.querySelector('#page-number')
const clickMeButton = document.querySelector('#click-me')
const getTasksButton = document.querySelector('#get-task')

clickMeButton.addEventListener('click', () => {
    const promise = getImages(pageNumber.value)
    promise.then(onDataReceived)
})
getTasksButton.addEventListener('click', () => {
    const promise = getTasks()
    promise.then(onDataReceived)
})

function onDataReceived(array) {
    array.forEach(el => {
        const img = document.createElement('img')
        img.src = el.thumbnail
        document.querySelector('#result').appendChild(img)
    })
}

createTasks('hello').then((data) => {
    debugger
    console.log(data)
})

function onTaskReceived(tasks) {
    tasks.forEach(task => {
        const li = document.createElement('li')
        li.innerHTML = task
        document.querySelector('#task-result').appendChild(li)
    })
}


//types get / post /put /delete /options

//GET when i want to get images / all i need
