import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect( () => {
        if (user) {
            const userEmail = user?.user?.email;

            fetch('https://desolate-cliffs-76740.herokuapp.com/user', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({user: userEmail})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const accessToken = data.accessToken;
                localStorage.setItem('ACCESS_TOKEN', accessToken);
                setToken(accessToken);
            })
        }
    }, [user]);

    return [token];
}

export default useToken;