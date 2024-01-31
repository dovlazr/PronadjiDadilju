const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 4000;

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Alice' },
];

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'admin',
  password: 'admin',
  database: 'pronadji_lako'
});

// connection.query('query example here', (err, results) => {
//   if (err) {
//     console.error('Error executing query:', err);
//     return;
//   }

//   // Print the query results to the console
//   console.log('Query results:');
//   console.log(results);

//   // Close the connection
//   connection.end((err) => {
//     if (err) {
//       console.error('Error closing database connection:', err);
//       return;
//     }
//     console.log('Database connection closed');
//   });
// });

connection.query('SELECT * FROM Users', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }

  // Print the query results to the console
  console.log('Query results:');
  console.log(results);

  // Close the connection
  connection.end((err) => {
    if (err) {
      console.error('Error closing database connection:', err);
      return;
    }
    console.log('Database connection closed');
  });
});

app.get('/', (req, res) => {
    res.send("nodejs works")
  });

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});