const connection = mysql.createPool({
  host: "localhost", // Your connection address (localhost).
  user: "huge_admin",
  password: "SPEDUCATE2024",
  database: "my_db",
});

const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get("/", function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query(
      "SELECT * FROM PrefQuestions",
      function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results);
      }
    );
  });
});

// Starting our server.
app.listen(3000, () => {
  console.log("Go to http://localhost:3000/ so you can see the data.");
});
