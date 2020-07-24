var mysql = require("mysql");
var inquirer = require("inquirer");

// add connection to mysql server
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

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

});

//prompt user for information
function start() {
var inquirer = inquirer.prompt({
    name: "choices",
    type: "rawlist",
    message: "What would you like to do??",
    choices: ["add employee", "add department", "add role"]
}).then(answer => {

});
}

start();

//add departments, roles and employees
//query the db to add an employee
function addEmployee() {
    console.log("adding Employee\n");
    connection.query("INSERT INTO employee (first_name) VALUES (?)", [req.body.first_name], function (err, results) {
        if (err) throw err;
    });

    connection.query("INSERT INTO employee (last_name) VALUES (?)", [req.body.last_name], function (err, results) {
        if (err) throw err;
    });

    // logs the actual query being run
    console.log(query.sql);
}

//view departments, roles,employess

//update employee roles

/*bonus
-update employee managers
-view employees by manager
-delete departments,roles, and employees
-view the total utilized budget of a department
i.e. the combined saleries of all employees in the department
*/