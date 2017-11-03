class SessionApi {
    static login(credentials) {
        //debugger;
        var apiBaseUrl = "https://......";
        const request = new Request(apiBaseUrl + `/login`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(credentials)
        });


        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default SessionApi;