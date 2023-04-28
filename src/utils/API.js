import Static from './staticHelper';

const URL_PREFIX = Static.serverUrl;

const API = {
    // user login
    login: async(userObj) => {
        const res = await fetch(`${URL_PREFIX}/api/users/login`, {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (res.status === 401) {
            return await res.json({ msg: 'invalid login credentials'})
        }

        return await res.json();
    }
}

export default API;