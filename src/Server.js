const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3333;

app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL host
    user: 'root', // Replace with your MySQL username
    password: 'athira@1', // Replace with your MySQL password
    database: 'myevent',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

// Get all events
app.get('/api/events', (req, res) => {
    db.query('SELECT * FROM Events', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new event
app.post('/api/events', (req, res) => {
    const { name, date, time, location, description } = req.body;
    const sql = 'INSERT INTO Events (name, date, time, location, description) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, date, time, location, description], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, ...req.body });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
