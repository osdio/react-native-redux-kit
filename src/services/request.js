import queryString from 'query-string';


export function get(url, params) {
    if (params) {
        url += '?' + queryString.stringify(params);
    }
    return fetch(url)
        .then(res=>res.json());
}


export function post(url, body) {
    let fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    return fetch(url, fetchOptions)
        .then(res=>res.json());
}
