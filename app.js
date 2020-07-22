var mysql = require("mysql");
var inquirer = require("requirer");

// add connection to mysql server
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3300,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "employeesDB"
});


//connect to server
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createProduct();

});
//add departments, toles and employees


//view departments, roles,employess

//update employee roles

/*bonus
-update employee managers
-view employees by manager
-delete departments,roles, and employees
-view the total utilized budget of a department
i.e. the combined saleries of all employees in the department
*/