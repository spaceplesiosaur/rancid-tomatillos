# Rancid Tomatillos

By Allie McCarthy, Kate Malone, Allison Wagner

This is application designed by was built with `create-react-app`.

### Set Up

Clone the repo. Run npm install to ensure all dependencies are running. Enjoy!

### Expectations / Spec

Build a React App that pulls movie information from an API and uses Redux to store and manage it.  Allow the user to post and remove movie ratings to the API.

-  Create components and pass info between them using React and the Redux Store where approriate.
-  Use an assigned user with a name, email, and password throughout the project. 
-  Create a separate login page (/login) where the user can login
-  After logging in, the user knows they are logged in and they are taken back to the homepage
-  A user should be able to logout, and they are taken to the homepage. The app should should that no one is logged in.
-  Use Router to create a dynamic route for a “show page” for each movie (/movies/5, for instance)
-  A user should be able to see their own movie ratings only when they are logged in to the app.
-  A user should be able to submit a rating for a movie. 
-  Include functionality for the user to remove an existing rating they submitted and then be able to submit a new rating (effectively the user is editing their rating) 
-  Fully test JSX, methods, props, state, redux, and async changes using enzyme and jest

## Learning Goals

-  Become fluent in Redux. 
-  Become comfortable using Fetch
-  Reinforce understanding of React.
-  Expand knowledge of frontend testing to test DOM elements
-  Expand knowledge of async testing


## Built With

- HTML5
- CSS3
- JavaScript
- React
- Redux

## Demo



![Rancid Tomatillos App](https://media.giphy.com/media/W4ztfC4RixiCQhUy4p/giphy.gif)


![Rancid Tomatillos App](https://media.giphy.com/media/SvM8n3rwxeBRuMrVJ9/giphy.gif)


## License

All credit goes to Turing School of Software for providing the project specifications and website design.


----



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
