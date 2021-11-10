# Product Autocomplete

The following code autocompletes a product search, displaying the relevant
result. It also provides search filter to make the results more filtered.

## Deployment
### `yarn run start:dev`
After deploying, you should see the app running on:

[http://localhost:3000](http://localhost:3000)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the unit test runner in the interactive watch mode using jest.

### `yarn cypress:open`

Launches the end-to-end test runner in browser using cypress.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Used libraries

- [Create React App](create-react-app.dev): For bootstrapping the react project.
- [Material-UI](https://material-ui.com/): For Theming and design system.
- [Redux/Redux Toolkit](https://redux-toolkit.js.org/): For creating store and slices, reducers and action.
- [PapaParse](https://www.papaparse.com/): For parsing product csv file.
- [comlink-loader](https://github.com/GoogleChromeLabs/comlink-loader): For creating web worker to do filtering process on background thread and context without ejecting app.
- [workbox](https://developers.google.com/web/tools/workbox/): For creating service worker and caching system without ejecting app.
- [Cypress](https://www.cypress.io/): For End-To-End tests.
- [Jest](https://jestjs.io/): For Unit tests.
- [Testing Library](https://testing-library.com/): For Test utilities.