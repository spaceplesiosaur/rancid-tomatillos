export const getMovieData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data;
};


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
    if(!response.ok){
        throw new Error('oops! please check your username and password are correct. ')
    }
    return response.json();
};

export const postRating = async (userRating, userID) => {
  const options = {
      method: 'POST',
      body: JSON.stringify(userRating),
      headers: {
          'Content-Type': 'application/json'
      }
  };

  const post = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userID}/ratings`, options)
  const rating = await post.json()
  return rating;
};

export const fetchRatings = userID => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userID}/ratings`).then(response => {
      if (!response.ok) {
        throw Error('There was a problem fetching all ratings');
      }
      return response.json();
    });
};


export const removeRating = async (userID, ratingID) => {
    const url = `https://the-screening-room-db.herokuapp.com/api/v1/users/${userID}/moviefavorites/${ratingID}`;
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        };
        const response = await fetch(url, options);
        if (!response.ok) {
            throw Error('There was changing your rate')
        }
        return response.json()

};
