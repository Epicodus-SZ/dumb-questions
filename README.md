# dumb-questions

A website that shows questions, and allows you to answer them.  Written in JavaScript.

## Installation

* `git clone https://github.com/Epicodus-SZ/dumb-questions` this repository
* `cd dumb-questions`
* `npm install`

## Running / Development

* `ember serve`
* then browse to [http://localhost:4200](http://localhost:4200).

## Planning

1. Configuration/dependencies
* [Git](https://git-scm.com/) - source code management
* [Node.js](https://nodejs.org/) (with NPM) - local JS framework.
* [Ember CLI](https://ember-cli.com/) - core Ember functionality
* [Firebase](firebase.google.com) - our database.

2. Specs
  * Questions should include the content of the question itself, an author, and additional notes.
  * Answers should include the content of the answer and the author.
  * Include a header and/or navbar that appears on all pages. It should contain the name of your site and a link to the home page, and other content such as social media, LinkedIn, etc.
  * List all questions on the homepage, displaying only the question and the name of the author.
  * Allow users to click a question, to be routed to another page containing additional information and question details.
  * Allow users to add and edit questions.
  * Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.

3. Integration
  * index Route. series of Components: Question-tile
  * Question Route. Components: Question-details, answer-form (dynamic route)

4. UX/UI
  * Bootstrap
  * And my own custom stylesheet

5. Polish
  * Make an awesome README
  * if I get to anything else.
