const mysql = require("mysql")
const inquirer = require("inquirer")
const consoleTable = require("console.table")
const Queries = require("./queries.js")
const util = require("util")



const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Regular855!",
    database: "EMS"
  });

  connection.connect(function(err) {
    if (err) {
     throw err;
    }
  });

  const newQuery = new Queries (connection)

const questions = () => {return inquirer.prompt(
    [
        {
            name: "starter",
            type: "list",
            message: "What would you like to do?",
            choices: ["Create an employee","Create a role", "Create a department",
        "Update an employee","Update a role","Update a department","Find an employee","Find a role","Find a department"]
        },
        {
            name: "employeesId",
            type: "input",
            message: "Please enter an id for this employee (10 characters or less)",
            when: function (answers) {
                return answers.starter === "Create an employee" || answers.starter === "Update an employee"
            }
        },
        {
            name: "employeesFirstName",
            type: "input",
            message: "Please enter a first name for this employee (10 characters or less)",
            when: function (answers) {
                return answers.starter === "Create an employee" || answers.starter === "Update an employee"  || answers.starter === "Find an employee"
            }
        },
        {
            name: "employeesLastName",
            type: "input",
            message: "Please enter a last name for this employee (10 characters or less)",
            when: function (answers) {
                return answers.starter === "Create an employee" || answers.starter === "Update an employee"  || answers.starter === "Find an employee"
            }
        },
        {
            name: "employeesRoleId",
            type: "input", 
            message: "Please enter a role id for this employee (10 characters or less)",
            when: function (answers) {
                return answers.starter === "Create an employee" || answers.starter === "Update an employee"
            }
        },
        {
            name: "employeesManagerId",
            type: "input",
            message: "Please enter a manager id for this employee (10 characters or less)",
            when: function (answers) {
                return answers.starter === "Create an employee" || answers.starter === "Update an employee"
            }
        },
        {
            name: "roleId",
            type: "input",
            message: "Please enter an id for this role (10 characters or less)",
            when: function (answers) {
                return answers.starter === "Create a role" || answers.starter === "Update a role" 
            }
        },
        {
            name: "roleTitle",
            type: "input",
            message: "Please enter a title for this role (10 characters or less)",
            when: function (answers) {
                return answers.starter === "Create a role" || answers.starter === "Update a role" || answers.starter === "Find a role"
            }
        },
        {
            name: "roleSalary",
            type: "input",
            message: "Please enter a salary for this role (10 characters or less)",
            when: function (answers) {
                return answers.starter === "Create a role" || answers.starter === "Update a role" 
            }
        },
        {
            name: "roleDepartmentId",
            type: "input",
            message: "Please enter a department id for this role (10 characters or less)",
            when: function (answers) {
                return answers.starter === "Create a role" || answers.starter === "Update a role"
            }
        },
        {
            name: "departmentId",
            type: "input",
            message: "Please enter an id for this department (10 characters or less)",
            when: function (answers) {
                return answers.starter === "Create a department" || answers.starter === "Update a department"
            }
        },
        {
            name: "departmentName",
            type: "input",
            message: "Please enter a name for this department (10 characters or less)",
            when: function (answers) {
                return answers.starter === "Create a department" || answers.starter === "Update a department"  || answers.starter === "Find a department"
            }
        },
        {
            name: "final",
            type: "list",
            message: "Would you like to continue?",
            choices: ["Yes","No"]
        }
    ]

)
.then(
    
    async function queryNew (answers) {
    if (answers.starter === "Create an employee") {
    newQuery.insertIntoEmployees(answers)
    }
    if (answers.starter === "Create a role") {
    newQuery.insertIntoRole(answers)
    }
    if (answers.starter === "Create a department") {
    newQuery.insertIntoDepartment(answers)
    }
    if( answers.starter ===  "Update an employee") {
    newQuery.updateEmployeesFirstName(answers)
    newQuery.updateEmployeesLastName(answers)
    newQuery.updateEmployeesRoleId(answers)
    newQuery.updateEmployeesManagerId(answers)
    }
    if(answers.starter === "Update a role") {
    newQuery.updateRoleTitle(answers)
    
    newQuery.updateRoleSalary(answers)
    newQuery.updateRoleDepartmentId(answers)
    }
    if (answers.starter === "Update a department"){
    newQuery.updateDepartmentName(answers)
    }
    
    if(answers.starter === "Find an employee") {
      const findEmployees = await newQuery.selectAllEmployees(answers)
      console.table(findEmployees)
      
    }
    if(answers.starter === "Find a role") {
        const findRole = await newQuery.selectAllRoles(answers)
        console.table(findRole)
    }
    if(answers.starter === "Find a department") {
        const findDepartment = await newQuery.selectAllDepartment(answers)
        console.table(findDepartment)
    }
    return answers;
})

}
function loop () {
    questions()
    .then(function (answers) {

        if (answers.final === "Yes") {
           loop();
     
        }
        console.log(answers.final)
        return answers.final
    })
}

loop();