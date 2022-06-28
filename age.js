let example = "1990-01-01"; // 32
let example2 = "1972-12-04"; // 48

function age(input) {
  let result;

  // Get dates
  let test = new Date();
  let currentMonth = +test.getMonth() + 1;
  let currentDay = +test.getDate();
  test.setTime(Date.parse(Date()) - Date.parse(input));
  let year = +test.getFullYear();
  let month = +test.getMonth() + 1;
  let day = +test.getDate();

  // Calculate time
  if (month > currentMonth || (month == currentMonth && day > currentDay)) {
    result = year - 1971;
  } else {
    result = year - 1970;
  }
  console.log(result);
}

// Run
age(example);
