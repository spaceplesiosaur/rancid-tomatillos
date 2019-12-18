export const getMovieData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data;
}

export const fetchUser = async (email, password) => {
    const userLogin = { email: `${email}`, password: `${password}`};
    const options = {
        method: 'POST',
        body: JSON.stringify(userLogin),
        headers: {
            'Content-Type': 'application/json'
        }
    };
        
    const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', options)
    const user = await response.json()
    return user;
}