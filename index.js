// Your code here
function createEmployeeRecord(array) {
    const employeeObject = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    }
    return employeeObject
  };

function createEmployeeRecords(array2) {
    const map1 = array2.map(a => createEmployeeRecord(a));
    return map1
}