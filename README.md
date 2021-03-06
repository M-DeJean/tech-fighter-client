## TechFIghter

[Live App](https://tech-fighter-client.vercel.app)

![Screenshot1](https://i.ibb.co/HFdQQhL/Screen-Shot-2020-11-10-at-8-49-09-PM.png)
![Screenshot2](https://i.ibb.co/Q6GbDfp/Screen-Shot-2020-11-10-at-8-58-27-PM.png)
![Screenshot3](https://i.ibb.co/r5WX6yM/Screen-Shot-2020-11-10-at-8-58-59-PM.png)

## How To Play 

TechFighter is a turn-based fighting game inspired by classic arcade games from the 80s and 90s. <br/> There are 6 different characters to choose from, all with their own fighting styles and attacks. Each character has 3 attacks:

Light(L) Medium(M) Special(S)

Each attack deals a certain amount of damage and costs a certain amount of stamina. Each fighter also has the option to Defend(D), which restores a small amount of health and stamina. After the player attacks, the computer generated opponent will perform a random attack(or defend) and the match will continue until either the player or computer's health reaches 0.

## API Documentation

`/api/fighters`
- GET - Fetches a list of each character

`/api/fighters:fighter_id`
- GET - Fetches the selected fighter based upon the requested ID

`/api/fighters/random/:fighter_id`
- GET - Fetches a random character that doesnt match the requested ID

`/api/attacks`
- GET - Fetches all available attacks

`/api/attacks/:attack_id`
- GET - Fetches specific attack based upon requested ID

`api/fighting-styles`
- GET - Fetches all available fighting styles

`api/fighting-styles/:fighting_style_id`
- GET -Fetches specific style besed upon requested ID

## STACK

* JavaScript
* Node
* React
* Express
* HTML
* CSS

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

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
