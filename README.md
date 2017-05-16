# Code Test for Front End Web

This universal rendered mobile-friendly progressive web app(RWD and SPA as well) is deployed at: https://denvercodetestwebfrontend-bxcujkbfpe.now.sh powered by [now: realtime global deployments](https://zeit.co/now).

Or, assuming `yarn`(node package manager locks deps and faster than `npm`) is installed (`npm install yarn -g`),  could be locally tested by:

1. Dev mode. `node server; yarn dev` with *hot reloading* and *hot module replacement* enabled by *webpack dev server*.
2. Prod mode. `yarn start` and then manually navigates to: http://localhost:3000.

## Tech stack

* **React** for universal javascript (client side composition and SSR)
* **React-Router-V4** for client side routering
* **Service Worker** web api for offline first PWA (progressive web app)
* **MDL** (material design lite) and **css-in-js** for quick styling with responsiveness
* **Express** for static file serving and RESTful endpoints

Each step of development can be told by git commit snapshots.

---

## Getting Started

### Pre-Requisites
- An IDE, such as WebStorm, VIM or Atom
- A javascript framework for building SPA's, such as AngularJs, React or Ember
- NodeJs version 0.12.4 or higher
- GIT installed locally
- Any learning resources you have at your disposal --google, books, etc.

### Project Setup

1. Clone the test project to your local machine:
    >```git clone git@github.com:itriage/web-code-test.git```
2. Create a branch for you:
    >```git checkout -b [lastname]_[firstname]_codetest```
3. Install node dependencies:
    >```npm install```
4. Run the Node Express web server:
    >```node server```
5. Test the site in a browser by going to ```http://localhost:3000/mockups```

At this point you will see some static html pages that represent the User Experience (UX) and general flow for the application. 
The next step is to build the features of the application based on the user stories below:

### Submit Your Pull Request
1. Commit your changes to your local repository (if you haven't already):
    >```git add .```
    
    >```git commit -m"[your comments]"```
2. Push your branch up to github:
    >```git push -u origin [lastname]_[firstname]_codetest```
3. Create a Pull Request in Github
