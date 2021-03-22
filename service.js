function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page${pageNumber}&count=1`)

    return promise.then((responce) => {
        return responce.data
    })
}

function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetid=5345235&count=30`)
    return promise.then((responce) => {
        return responce.data
    })
}


function createTasks(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`,{
        widgetid:5345235,
        title : title
    })
    return promise.then((responce) => {
        return responce.data
    })
}

function updateTasks(title) {
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks/update`,{
        widgetid:5345235,
        title : title
    })
    return promise.then((responce) => {
        return responce.data
    })
}
function deleteTasks(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=5345235&taskId=${id}`)
    return promise.then((responce) => {
        return responce.data
    })
}

//DAL  Data Access layer
//idempotent || without dependencies of which request i send on server
// => server response my request without changes
// get request dont change server status
