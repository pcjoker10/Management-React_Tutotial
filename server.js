<<<<<<< HEAD
const express = require('express');
const budyParser = require('body-parser');
=======
const fs = require('fs');
const express = require('express');
>>>>>>> 51b002e8d95b791de7bf354eddfdce8bcadc7c04
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

<<<<<<< HEAD
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
=======
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.get('/api/customers', (req, res) => {
>>>>>>> 51b002e8d95b791de7bf354eddfdce8bcadc7c04
    connection.query(
        "SELECT * FROM CUSTOMER",
        (err, rows, fields) => {
            res.send(rows);
<<<<<<< HEAD
>>>>>>> 51b002e (Create Customer Database Table & Node.js Database Connection Settings)
        }
    ])
=======
        }
    );
>>>>>>> 51b002e8d95b791de7bf354eddfdce8bcadc7c04
});

app.listen(port, () => console.log(`Listening on port ${port}`));