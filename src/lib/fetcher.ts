export default function fetcher(url: string, data: undefined | any = undefined, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET'): Promise<any> {
    return fetch(`${process.env.REACT_APP_API_URL}${url}`, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(data),
        }
    ).then((res) => {
        if (res.status > 399 && res.status < 200) {
            throw new Error();
        }
        return res.json()
    }).catch((e) => {
        console.error(e);
        throw new Error();
    })
}