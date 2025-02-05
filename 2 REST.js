// Tasks

// get /user - returns a list of all users
// get api/user - returns a list of all users
// get /user/:id - returns details of a specific user

// post /user - creates a new user

// patch /user/1 - updates a user

// delete /user/1 - deletes a user

const express = require('express');
const users = require('./users.json');

const app = express();

app.get('/', (req, res) => res.send('Homepage'));

app.get('/user', (req, res) => {
    const html = `
        <ul>
            ${users.map(user => `<li>${user.first_name}</li>`).join('')}
        </ul>
    `
    res.send(html);
});

app.route('/api/user')
    .get((req, res) => {
        res.json(users);
    })
    .post((req, res) => {
        return res.send("post")
    })

app.route('/api/user/:id')
    .get((req, res) => {
        const id = req.params.id;
        const user = users.find(user => user.id == id);
        return res.send(user)
    })
    .patch((req, res) => {

    })
    .delete((req, res) => {

    })


app.listen(3000, () =>
    console.log('Server is running on http://localhost:3000')
);