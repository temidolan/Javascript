var tableData = data;
var tbody = d3.select("tbody");

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
  
//   // Select the button
// var button = d3.select("#filter-btn");

// // Select the form
// var form = d3.select("form");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit", runEnter);

// function runEnter(){
//     d3.preventDefault();

//     var inputElement = d3.select(#"datetime");
//     var inputElement = d3.select()
// }