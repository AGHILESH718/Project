const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);

    if (isNaN(inputDate.getTime())) {
        alert("Invalid Date. Please enter a valid date.");
        displayResult("-", "-", "-");
        return;
    }

    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth(),
        year: inputDate.getFullYear(),
    };

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDate = today.getDate();

    // Adjust February for leap years
    adjustLeapYear(currentYear);

    // Check if the date is valid
    if (
        birthDetails.year > currentYear ||
        (birthDetails.year === currentYear && birthDetails.month > currentMonth) ||
        (birthDetails.year === currentYear &&
            birthDetails.month === currentMonth &&
            birthDetails.date > currentDate)
    ) {
        alert("Not Born Yet");
        displayResult("-", "-", "-");
        return;
    }

    let birthYear = currentYear - birthDetails.year;
    let birthMonth, birthDate;

    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    } else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    } else {
        birthMonth--;
        let daysInPreviousMonth =
            currentMonth - 1 >= 0 ? months[currentMonth - 1] : months[11];
        birthDate = daysInPreviousMonth + currentDate - birthDetails.date;
        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }
    }

    displayResult(birthDate, birthMonth, birthYear);
}

function displayResult(birthDate, birthMonth, birthYear) {
    document.getElementById("years").textContent = birthYear;
    document.getElementById("months").textContent = birthMonth;
    document.getElementById("days").textContent = birthDate;
}

function adjustLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        months[1] = 29;
    } else {
        months[1] = 28;
    }
}