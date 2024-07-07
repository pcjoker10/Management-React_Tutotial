const express = require('express');
const budyParser = require('body-parser');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
<<<<<<< HEAD
    res.send([
        {
            'id': 1,
            'image': 'https://picsum.photos/id/1/64/64',
            'name': '전우치',
            'birthday': '961222',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': 'https://picsum.photos/id/2/64/64',
            'name': '홍길동',
            'birthday': '961225',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 3,
            'image': 'https://picsum.photos/id/3/64/64',
            'name': '춘향이',
            'birthday': '961223',
            'gender': '여자',
            'job': '연예인'
=======
    connection.query(
        "SELECT * FROM CUSTOMER",
        (err, rows, fields) => {
            res.send(rows);
>>>>>>> 51b002e (Create Customer Database Table & Node.js Database Connection Settings)
        }
    ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));