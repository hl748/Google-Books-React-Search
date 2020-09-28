const util = require("util")
class queries 
    {
        constructor (connection) {
         this.query = util.promisify(connection.query).bind(connection)
        }

       selectAllEmployees (){
            return this.query("SELECT * FROM employees")
        } 

        selectAllRoles () {
            return this.query("SELECT * FROM roles")
        }

        selectAllDepartment () {
            return this.query("SELECT * FROM department")
        }

        insertIntoEmployees (answers) {
            return this.query(`INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES ("${answers.employeesId}","${answers.employeesFirstName}","${answers.employeesLastName}","${answers.employeesRoleId}","${answers.employeesManagerId}")`)
           
        }

        insertIntoRole (answers) {
            return this.query(`INSERT INTO roles (id, title, salary, department_id) VALUES ("${answers.roleId}","${answers.roleTitle}","${answers.roleSalary}","${answers.roleDepartmentId}")`)
        }

        insertIntoDepartment (answers) {
            return this.query(`INSERT INTO department (id, names) VALUES (${answers.departmentId},"${answers.departmentName}")`)
        }

        updateEmployeesFirstName (answers) {
            return this.query(`UPDATE employees SET first_name = "${answers.employeesFirstName}" WHERE id = ${answers.employeesId}`)

         
        }

        updateEmployeesLastName (answers) {
        return this.query(`UPDATE employees SET last_name = "${answers.employeesLastName}" WHERE id = ${answers.employeesId}`)
        }
        updateEmployeesRoleId (answers) {
        return this.query(`UPDATE employees SET role_id = "${answers.employeesRoleId}" WHERE id = ${answers.employeesId}`)
        }
        updateEmployeesManagerId (answers) {
        return this.query(`UPDATE employees SET manager_id = "${answers.employeesManagerId}" WHERE id = ${answers.employeesId}`)
        }

        updateRoleTitle (answers) {
        return this.query(`UPDATE roles SET title = "${answers.roleTitle}" WHERE id = ${answers.roleId}`)
        }
        updateRoleSalary (answers) {
        return this.query(`UPDATE roles SET salary = ${answers.roleSalary} WHERE id = ${answers.roleId}`)
        }
        updateRoleDepartmentId (answers) {
        return this.query(`UPDATE roles SET department_id = ${answers.roleDepartmentId} WHERE id = ${answers.roleId}`)
        }
        updateDepartmentName (answers) {
        return this.query(`UPDATE department SET names = "${answers.departmentName}" WHERE id = ${answers.departmentId}`)
        }

    }

module.exports = queries

