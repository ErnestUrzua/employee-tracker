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
    database: "employees_db"
});


//connect to server
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

});

//prompt user for information
function start() {
    inquirer.prompt({
        name: "choices",
        type: "list",
        message: "What would you like to do??",
        choices: ["add employee", "add department", "add role", "exit"]
    }).then(function (answer) {
        switch (answer.choices) {
            //CREATE
            case "add employee":
                addEmployee();
                break;
            case "add department":
                addDepartment();
                break;
            case "add role":
                addRole();
                break;
            //Read
            case "view employee":
                viewEmployee();
                break;
            case "view department":
                viewDepartment();
                break;
            case "view role":
                viewRole();
                break;
            //Update
            case "update employee":
                updateEmployee();
                break;
            case "update role":
                viewRole();
                break;
            //DELETE BONUS

            case "exit":
                //exit the prompt
                break;

        }
    })
}

start();

//add departments, roles and employees
//query the db to add an employee
function addEmployee() {

    inquirer.prompt([{
        name: "firstName",
        type: "list",
        message: "first name:"
    },
    {
        name: "lastName",
        type: "list",
        message: " last name:"
    },
    {
        name: "roleID",
        type: "list",
        message: "role id:"
    },
    {
        name: "managersID",
        type: "list",
        message: "managers id:"
    },

    ]);
    console.log("adding Employee\n");
    connection.query("INSERT INTO employee (first_name) VALUES (?)", [req.body.first_name], function (err, results) {
        if (err) throw err;
    });
    connection.query("INSERT INTO employee (last_name) VALUES (?)", [req.body.last_name], function (err, results) {
        if (err) throw err;
    });
    connection.query("INSERT INTO employee (roleID) VALUES (?)", [req.body.role_id], function (err, results) {
        if (err) throw err;
    });
    connection.query("INSERT INTO employee (managersID) VALUES (?)", [req.body.manager_id], function (err, results) {
        if (err) throw err;
    });

    // logs the actual query being run
    console.log(query.sql);
    start();
}

function addRole() {
    console.log("adding Employee\n");
    connection.query("INSERT INTO employee (first_name) VALUES (?)", [req.body.first_name], function (err, results) {
        if (err) throw err;
    });

    connection.query("INSERT INTO employee (last_name) VALUES (?)", [req.body.last_name], function (err, results) {
        if (err) throw err;
    });

    // logs the actual query being run
    console.log(query.sql);
    start();
}

function addDepartment() {
    console.log("adding Employee\n");
    connection.query("INSERT INTO employee (first_name) VALUES (?)", [req.body.first_name], function (err, results) {
        if (err) throw err;
    });

    connection.query("INSERT INTO employee (last_name) VALUES (?)", [req.body.last_name], function (err, results) {
        if (err) throw err;
    });

    // logs the actual query being run
    console.log(query.sql);
    start();
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