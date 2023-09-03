// const day = document.getElementById("day");
// const month = document.getElementById("month");
// const year = document.getElementById("year");
// const submitBtn = document.querySelector(".submit-btn");
// // const resultBtn = document.querySelector(".result-btn");
// const resultContainer = document.getElementById("resultContainer");

// function findWeekdayOfBirthday() {
//   console.log("findWeekdayOfBirthday function called.");
//   const daysOfWeek = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   //   Get the input values for day, month, and year;
//   const dayValue = parseInt(day.value, 10);
//   const monthValue = parseInt(month.value, 10);
//   const yearValue = parseInt(year.value, 10);

//   // Check if the input values are valid
//   if (
//     isNaN(dayValue) ||
//     isNaN(monthValue) ||
//     isNaN(yearValue) ||
//     monthValue < 1 ||
//     monthValue > 12 ||
//     dayValue < 1 ||
//     dayValue > 31
//   ) {
//     // Display an error message in the result container
//     resultContainer.textContent = "Please enter valid day, month, and year.";
//     return;
//   }

//   // Calculate the day of the week
//   const date = new Date(yearValue, monthValue - 1, day);
//   const daysOfWeekIndex = date.getDay();
//   console.log("daysOfWeekIndex:", daysOfWeekIndex);
//   const dayOfWeek = daysOfWeek[daysOfWeekIndex];

//   // Display the result in the result container
//   resultContainer.textContent = `You were born on a ${dayOfWeek}.`;
// }

// submitBtn.addEventListener("click", findWeekdayOfBirthday);

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const submitBtn = document.querySelector(".submit-btn");
const resultContainer = document.getElementById("resultContainer");

function findWeekdayOfBirthday(e) {
  e.preventDefault();
  console.log("findWeekdayOfBirthday function called.");
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //   Get the input values for day, month, and year;
  const dayValue = parseInt(day.value, 10);
  const monthValue = parseInt(month.value, 10);
  const yearValue = parseInt(year.value, 10);

  // Check if the input values are valid
  if (
    isNaN(dayValue) ||
    isNaN(monthValue) ||
    isNaN(yearValue) ||
    monthValue < 1 ||
    monthValue > 12 ||
    dayValue < 1 ||
    dayValue > 31
  ) {
    // Display an error message in the result container
    resultContainer.textContent = "Please enter valid day, month, and year.";
    return;
  }

  // Calculate the day of the week
  const date = new Date(yearValue, monthValue - 1, dayValue); // Corrected line
  const daysOfWeekIndex = date.getDay();
  console.log("daysOfWeekIndex:", daysOfWeekIndex);
  const dayOfWeek = daysOfWeek[daysOfWeekIndex];

  // Display the result in the result container
  resultContainer.textContent = `You were born on a ${dayOfWeek}.`;
}

submitBtn.addEventListener("click", findWeekdayOfBirthday);
