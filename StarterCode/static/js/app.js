// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
data.forEach(function(UFO) {
//   console.log(weatherReport);
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(function([key,value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});
