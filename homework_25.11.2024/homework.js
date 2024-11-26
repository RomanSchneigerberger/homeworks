const requestURL = 'https://jsonplaceholder.typicode.com/usersjjjjjj';

function sendRequestGET(method, url) {
    try {
        return fetch(url, { 
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(responce => {  
            if(!responce.ok) {
                throw new Error('сервер не доступен');
            }
            return responce.json();
        })
        .then((data) => {
            console.log("data from server: ", data);
        })
    } catch (e) {
        console.error(e.name)
        console.error(e.message)
    }

}

sendRequestGET("GET", requestURL);
