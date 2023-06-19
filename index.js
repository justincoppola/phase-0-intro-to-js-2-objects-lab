// Write your solution in this file!
// Initialize employee Object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St",
  };
  
  // Function to update employee Object with a new key-value pair (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  // Function to update employee Object with a new key-value pair (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key-value pair from employee Object (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key-value pair from employee Object (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage:
  
  // Updating employee Object using updateEmployeeWithKeyAndValue()
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
  console.log(updatedEmployee);
  
  // Updating employee Object using destructivelyUpdateEmployeeWithKeyAndValue()
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "salary", 50000);
  console.log(employee);
  
  // Deleting a key-value pair from employee Object using deleteFromEmployeeByKey()
  const newEmployee = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log(newEmployee);
  
  // Deleting a key-value pair from employee Object using destructivelyDeleteFromEmployeeByKey()
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log(employee);