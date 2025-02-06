const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})
