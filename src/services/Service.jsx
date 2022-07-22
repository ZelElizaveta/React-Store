import {API_URL} from '../config';


export default class Service {

    getResource = async () => {
        const res = await fetch(API_URL, {
            headers: {
                'Authorization': '7d4f8953-510a49c9-0a5df488-559d4550'
            },
        });
        if(!res.ok) {
            throw new Error(`Could not fetch, status: ${res.status}`);
        }
        return await res.json();
        
    }

}


