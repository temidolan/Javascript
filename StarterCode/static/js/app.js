// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
data.forEach(function (UFO) {
  //   console.log(weatherReport);
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(function ([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value").trim();
  //   // var table_columns = ["datetime", "city", "state", "country", "shape", "duratationMinutes", "comments"]

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(datatable => datatable.datetime === inputValue);
  // people.filter(function(person){
  //   return person.bloodType === inputValue;
  // 
  console.log(filteredData);
  tbody.html("");

  let response = {
    filteredData
  }
  if (response.filteredData.length !== 0) {
    addData(filteredData)
  }
  else {
    tbody.append("tr").append("td").text("No sightings")
  }
}


