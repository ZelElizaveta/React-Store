import {API_URL, API_KEY} from '../config';


export default class Service {

    getResource = async () => {
        const res = await fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            },
        });
        if(!res.ok) {
            throw new Error(`Could not fetch, status: ${res.status}`);
        }
        return await res.json();
        
    }

}


