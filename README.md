# React State — Class Component Documentation

## Overview

This project is a small Create React App that demonstrates **React state in a class-based component** by rendering a person profile that can be toggled on/off, plus a timer that shows the number of seconds since the component mounted.

## Features

- **Class component**: `App` is implemented as `class App extends React.Component`.
- **State shape**:
  - `Person`: `{ fullName, bio, imgSrc, profession }`
  - `shows`: boolean that controls whether the profile is visible
  - `timeInterval`: number of seconds since mount
- **Toggle UI**: a button switches `shows` between `true` and `false`.
- **Lifecycle + interval**: `componentDidMount()` starts a `setInterval()` timer; `componentWillUnmount()` clears it.

## How it works

### 1) Person profile data

The profile information lives in `this.state.Person` (full name, bio, image source, profession). When `shows` is `true`, the UI renders:

- the image (`imgSrc`)
- the full name
- profession
- bio

### 2) Show/Hide toggle

Clicking the button calls `toggleShow()`, which flips the boolean `shows`. The profile section renders conditionally using:

- `shows && (...)`

### 3) Time since mount

When the component mounts:

- `mountedAt` is saved (`Date.now()`)
- `setInterval()` updates `timeInterval` every second

This value is shown as: “Time since component mounted: X seconds”.

## Assets

- Profile image: `public/person.jpg`
- In code: `imgSrc` is set to `process.env.PUBLIC_URL + '/person.jpg'` so it works in dev + production builds.

### Image source

`public/person.jpg` is downloaded from Wikimedia Commons via Special:FilePath (a 512px-wide version of the “Abraham Lincoln O-77 by Gardner, 1863” photograph).

## Project structure (relevant files)

- `src/App.js` — class component, state, lifecycle, toggle logic, UI
- `src/App.css` — basic styles for the profile and image
- `public/person-profile.svg` — local image used by the profile

## Run locally

### Development

- `npm start`

If PowerShell blocks `npm` scripts, use:

- `npm.cmd start`

### Production build

- `npm run build`

Or, if needed:

- `npm.cmd run build`

## Customize

Edit `src/App.js` and update:

- `this.state.Person.fullName`
- `this.state.Person.bio`
- `this.state.Person.profession`
- `this.state.Person.imgSrc` (point it to another file in `public/` if you add one)

---

## Create React App reference

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
