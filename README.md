# Instructions

1. Open appropriate link on mobile device
2. Login
3. Print Hiro.png Marker (or open on desktop)
4. Point camera at Hiro marker
5. View 3d model and learn facts about giraffes
6. After viewing the model, press Join Game to test what you learned.

# Links

A7 hosting @ https://a7-armuseum.herokuapp.com

A6 hosting @ https://a6-armuseum.herokuapp.com

A5 hosting @ https://cogs120-armuseum.web.app

Most up-to-date app hosted @ https://ar-museum.herokuapp.com

# How we use json and handlebars

We used JSON to get the questions for the quiz and handle whether the user selected the correct answer or not. As you can see in game.json, we have a list of questions with answers. This information is used in `quiz.hbs`, `correct.hbs`, `incorrect.hbs`, `routes/quiz.js`, `routes/correct.js`, and `routes/incorrect.js`

We also use JSON and Handlebars to dynamically create all the buttons on the AR segment of the app.
Each button is populated with information from the pages corresponding JSON page.
