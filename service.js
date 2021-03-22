function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page${pageNumber}&count=1`)

    return promise.then((responce) => {
        return responce.data
    })
}

function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetid=5345235`)
    return promise.then((responce) => {
        return responce.data
    })
}


function createTasks(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks?widgetid=5345235&title=${title}`)
    return promise.then((responce) => {
        return responce.data
    })
}

//DAL  Data Access layer
