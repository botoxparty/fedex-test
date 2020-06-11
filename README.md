# Fedex Test - Adam Hammad

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development

### Setup

Clone the repository `git clone https://github.com/botoxparty/fedex-test`

Install the NPM dependencies `npm install`

### Dev

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Testing

I have included both unit and e2e tests.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## UX

The interface is made up of 3 components: Search, Pagination, Grid

I have chosen to use the [Angular Material](https://material.angular.io/) component library.
The grid is responsive for mobile, tablet and desktop devices.

![Basic wireframe](./wireframe.png)

### Potential Improvements

#### Infinite scroll & Virtual scroll

You could implement infinite scroll with the pagination, but it would also need to be a virtual scroll.

Otherwise if you scroll down a few pages you can have hundreds of elements loaded in your DOM which will eventually cause the browser to crash.

#### Skeleton loaders

To reduce friction when searching and navigating between pages skeleton loaders could be added. This will benefit the perceived speed of the application.

## Technical considerations

- The GIPHY API cannot paginate beyond 5,000 items.
- The GIPHY API does not always return a preview URL
- When you started adding functionality to the grid you would extract it to its own compoment.

### State Managament

I am using the URL query parameters to manage the application state. It makes search results easy for users to save and share.

Try it out: [http://localhost:4200/?q=puppies&page=20&size=50](http://localhost:4200/?q=puppies&page=20&size=50)

### Third Party Libraries

#### [simple-profanity-filter](https://badge.fury.io/js/simple-profanity-filter)

[![npm version](https://badge.fury.io/js/simple-profanity-filter.svg)](https://badge.fury.io/js/simple-profanity-filter)

- No dependencies
- Uses Google's swear word list (was previously an API but is now closed)
- Tests included
- Lightweight and expandable

#### [@giphy/js-fetch-api](https://github.com/Giphy/giphy-js/blob/master/packages/fetch-api/README.md)

[![npm version](https://badge.fury.io/js/%40giphy%2Fjs-fetch-api.svg)](https://github.com/Giphy/giphy-js/blob/master/packages/fetch-api/README.md)

I have included this as a devDependency because i'm only using the typings from the library. When using the official library there were incompatibilies using switchMap to cancel previous requests (e.g. if the user clicks through pages very fast).

I implemented my own service, using the offical typings. Looking further down the line, if I needed to use more of the API's features it could be worth switching to the official library as this will have an impact on maintainability. The official library comes fully tested and it would be good to leverage that.

I would potentially fork the official library and allow it to take in an HTTP client to perform the request, that way I could override the fetch request that currently gets called.

_Preview of my implementation working correctly with switchMap to cancel previous requests_

![User making a lot of requests](./cancel-reqs.gif)
