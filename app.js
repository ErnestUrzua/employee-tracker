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
    inquirer = inquirer.prompt({
        name: "choices",
        type: "list",
        message: "What would you like to do??",
        choices: ["add employee", "add department", "add role","Exit"]
    }).then(function (userChoice) {
        // depending on the user selection, 
        switch (userChoice.menuChoice) {
            // call on a function to show the quotes
            case "Add employee":
                addEmployee();
                break;
            // call on a function to add a new quote
            case "Add department":
                addDepartment();
                break;
            // call on a function to add a new quote
            case "Add role":
                addRole();
                break;
            // exit the application by not calling on any functions
            case "Exit":
                console.log("\n Goodbye!");
                break;
        }
    })
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

function addDepartment() {

    start();//go back to menu
}

function addRole() {
    start();//go back to menu
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