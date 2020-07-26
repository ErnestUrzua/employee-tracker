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
    console.log("\n connected as id " + connection.threadId + "\n");

});




//prompt user for information
function start() {
    inquirer.prompt({
        name: "menu",
        type: "list",
        message: "What would you like to do??",
        choices: ["add employee", "add department", "add role", "view employee", "view department", "view role", "update employee", "update role", "exit"]
    }).then(function (answer) {
        switch (answer.menu) {
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
           
            //DELETE BONUS

            //EXIT
            case "exit":
                //exit the prompt
                break;

        }
    })
}

//add departments, roles and employees
//query the db to add an employee
function addEmployee() {

    inquirer.prompt([{
        name: "firstName",
        type: "input",
        message: "first name:"
    },
    {
        name: "lastName",
        type: "input",
        message: "last name:"
    },
    {
        name: "roleID",
        type: "input",
        message: "role id:"
    },
    {
        name: "managerID",
        type: "input",
        message: "managers id:"
    },
    ]).then(function (answer) {
        //console.log(answer);

        var query = "INSERT INTO employee SET ?";
        connection.query(query, {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.roleID,
            manager_id: answer.managerID
        }, function (err) {
            if (err) throw err;
        });


        // logs the actual query being run
        console.log("added Employee\n");
        start();
    });

}

function addRole() {
    
    inquirer.prompt([{
        name: "title",
        type: "input",
        message: "title:"
    },
    {
        name: "salary",
        type: "input",
        message: "salary:"
    },
    {
        name: "departmentID",
        type: "input",
        message: "department id:"
    }
    ]).then(function (answer) {
        //console.log(answer);

        var query = "INSERT INTO role SET ?";
        connection.query(query, {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.departmentID
        }, function (err) {
            if (err) throw err;
        });

        console.log("adding role\n");
        start();
    });
}

function addDepartment() {
    inquirer.prompt([{
        name: "name",
        type: "input",
        message: "name:"
    }
    ]).then(function (answer) {
        //console.log(answer);

        var query = "INSERT INTO department SET ?";
        connection.query(query, {
            name: answer.name
        }, function (err) {
            if (err) throw err;
        });

        console.log("adding department\n");
        start();
    });
}

function viewEmployee(){

}

function viewDepartment(){

}

function viewRole(){

}

function updateEmployee(){

}

function 

start();


//view departments, roles,employess


//update employee roles

/*bonus
-update employee managers
-view employees by manager
-delete departments,roles, and employees
-view the total utilized budget of a department
i.e. the combined saleries of all employees in the department
*/