# Instructions

1. Open A6 link on mobile device
2. Login
3. Open Hiro.png on desktop (or print out)
4. Point camera at Hiro marker
5. View 3d model and learn facts about giraffes
6. After viewing the model, Join Game to take the quiz

# Links

A6 hosting @ https://a6-armuseum.herokuapp.com

A5 hosting @ https://cogs120-armuseum.web.app

Most up-to-date app hosted @ https://ar-museum.herokuapp.com

# How we use json and handlebars
We used json to get the questions for the quiz and handle whether the user selected the correct answer or not. As you can see in game.json, we have a list of questions with answers. This information is used in `quiz.hbs`, `correct.hbs`, `incorrect.hbs`, `routes/quiz.js`, `routes/correct.js`, and `routes/incorrect.js`
