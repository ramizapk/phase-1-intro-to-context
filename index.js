// Your code here
function createEmployeeRecord(params) {
    let myObj = {
        firstName: params[0],
        familyName: params[1],
        title: params[2],
        payPerHour: params[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return myObj;

}

function createEmployeeRecords(array) {
    let newArray = [];

    for (const employee of array) {

        newArray.push(createEmployeeRecord(employee));

    }
    return newArray;
}

function createTimeInEvent(recordObj, dataStamp) {
    const [date, hour] = dataStamp.split(" ");
    const newObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date,
    }
    recordObj.timeInEvents.push(newObj);
    return recordObj;
}

function createTimeOutEvent(recordObj, dataStamp) {
    const [date, hour] = dataStamp.split(" ");
    const newObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date,
    }
    recordObj.timeOutEvents.push(newObj);
    return recordObj;
}

function hoursWorkedOnDate(recordObj, dataStamp) {
    const timeIn = recordObj.timeInEvents.find(function (e) {
        return e.date === dataStamp
    });
    const timeOut = recordObj.timeOutEvents.find(function (e) {
        return e.date === dataStamp
    });

    let workedHours = (timeOut.hour - timeIn.hour) / 100;
    // console.log(workedHours);
    return workedHours;
}

function wagesEarnedOnDate(recordObj, dataStamp) {
    let workedHours = hoursWorkedOnDate(recordObj, dataStamp);
    let payPerHour = recordObj.payPerHour;
    let EarnedOnDate = workedHours * payPerHour;
    return EarnedOnDate;

}

function allWagesFor(recordObj) {
    let dates = recordObj.timeInEvents.map(function (e) {
        return e.date;
    });

    let all = dates.reduce(function (acc, value) {
        return acc + wagesEarnedOnDate(recordObj, value);
    }, 0);

    return all;
}

function calculatePayroll(recordObj) {
    let all = recordObj.reduce(function (acc, value) {
        return acc + allWagesFor(value)
    }, 0);

    return all;
}
