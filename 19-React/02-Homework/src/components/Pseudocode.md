* 1. Get the employees from the back-end
    - Make our get request with axios
    - Store the employee data in the state as results

* 2. Filter the employees by the search term
    - The user types into the search bar
    - onInput get the event.target.value
    - Store the value into the state property search
    - If the value is not empty string, then we map only the employees that have the search term in their name
    - If the value is an empty string, then just show all the employees 

* 3. Sort the employees by name