# Code Test for Front End Web

This code test will evaluate your abilities to develop a Single Page Application (SPA) using web technologies such as Javascript, HTML5 and CSS3. 

While it is recommended that you develop this solution using AngularJs, you may choose a different Javascript framework, such as ReactJs or EmberJs. However, please bear in mind that we'd still like to see a fully working SPA solution. Therefore, your framework should have components for client-side routing, HTTP communication and DOM manipulation.

The test consists of a partially completed solution containing static html mockups. The mockups serve as a guide for the user experience. You must turn the static mocks into a working SPA by by following the instructions below.

## Getting Started

### Pre-Requisites
- An IDE, such as WebStorm, VIM or Atom
- A javascript framework for building SPA's, such as AngularJs, React or Ember
- NodeJs version 0.12.4 or higher
- GIT installed locally
- Any learning resources you have at your disposal --google, books, etc.

### Project Setup

1. Clone the test project to your local machine:
    >```git clone ssh://git@stash.itriagehealth.com/ct/code_test_web_frontend.git```
2. Create a branch for you:
    >```git checkout -b [lastname]_[firstname]_codetest```
3. Install node dependencies:
    >```npm install```
4. Run the Node Express web server:
    >```node server```
5. Test the site in a browser by going to ```http://localhost:3000/mockups```

At this point you will see some static html pages that represent the User Experience (UX) and general flow for the application. 
The next step is to build the features of the application based on the user stories below:

### User Stories

- As a consumer, I would like to be able to browse a list of article categories so I can find articles I'm interested in reading.
    - Acceptance Criteria: 
        - Use the template ```client\mockups\index.html``` as a guide for the html and user experience for this view.
        - The Article Categories view should be served from the default route ```http://localhost:3000/#/```
        - The Categories data should be retrieved from the following REST endpoint ```http://localhost:3000/api/categories``` 
        - Each of the Articles displayed in the list should link to Articles list view (see below).
- As a consumer, I would like to see a list of articles for a category I have selected. 
    - Acceptance Criteria: 
        - Use the template ```client\mockups\articles.html``` as a guide for the html and user experience for this view.
        - The Article Categories view should be served from the route ```http://localhost:3000/#/{categoryId}/articles```
        - The Articles should be retrieved from the following REST endpoint ```http://localhost:3000/api/categories/{categoryId}/articles``` 
        - Each of the Articles displayed in the list should link to Article contents view (see below).
- As a consumer, I would like to click on an article and see its full contents.
    - Acceptance Criteria: 
        - Use the template ```client\mockups\article.html``` as a guide for the html and user experience for this view.
        - The Article contents view should be served from the route ```http://localhost:3000/#/articles/{articleId}```
        - The Articles contents be retrieved from the following REST endpoint ```http://localhost:3000/api/articles/{articleId}``` 
- As a consumer, I would like some indication that I have read the article so I don't try to read the same article again.
    - Acceptance Criteria: 
        - Use localStorage to store data on which articles are read by the consumer
        - If the article was read, the checkbox should appear in the article detail view, otherwise nothing should appear
- As a consumer, I would like to submit new article requests
    - Acceptance Criteria: 
        - Use the template ```client\mockups\suggestions.html``` as a guide for the html and user experience for this view.
        - The Article suggestions view should be served from the route ```http://localhost:3000/#/suggestions```
        - To submit a suggestion, send a POST to the following endpoint ```http://localhost:3000/api/suggestions``` 
        - After submitting the suggestion, you should display a label under the header for "Suggestions" saying, "Thanks! Your suggestion has been submitted"
        - Client-Side Validation:
            - All fields with "*" are required
            - Email field should be a valid email format
            - Validation messages (span's with class "validation-msg") should appear next to the fields only if validation rules did not pass. 

### Submit Your Pull Request
1. Commit your changes to your local repository (if you haven't already):
    >```git add .```
    
    >```git commit -m"[your comments]"```
2. Push your branch up to Stash:
    >```git push -u origin [lastname]_[firstname]_codetest```
3. Create a Pull Request in Stash by following these instructions https://confluence.atlassian.com/display/STASH/Using+pull+requests+in+Stash#UsingpullrequestsinStash-Creatingapullrequest.

