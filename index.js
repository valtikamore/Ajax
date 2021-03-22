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
    promise.then(onTaskReceived)
})
createTasks('hello').then((data) => {
    console.log(data)
})
deleteTasks('id').then((data) => {
    console.log(data)
})

function onTaskReceived(tasks) {
    const result = document.querySelector('#task-result')
    result.innerHTML = ''
    tasks.forEach(task => {
        const li = document.createElement('li')
        li.innerHTML = task.title

        result.appendChild(li)
    })
}

function onDataReceived(array) {
    array.forEach(el => {
        const img = document.createElement('img')
        img.src = el.thumbnail
        document.querySelector('#result').appendChild(img)
    })
}



//types get / post /put /delete /options

//GET when i want to get images / all i need
