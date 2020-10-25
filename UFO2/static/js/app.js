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

  function buildTable(data){
    data.forEach((analysis) => {
        var row = tbody.append("tr");
        Object.values(analysis).forEach((value) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });

}
  
  // Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(){
    d3.event.preventDefault();

    var inputElement1 = d3.select("#datetime").property("value");
    var inputElement2 = d3.select("#city").property("value");
    var inputElement3 = d3.select("#state").property("value");
    var inputElement4 = d3.select("#country").property("value");
    var inputElement5 = d3.select("#shape").property("value");

    var filteredData = tableData;
    tbody.html("");
    
    if(inputElement1){
        var filteredData = filteredData.filter(datatable => datatable.datetime === inputElement1);
    }
    if(inputElement2){
        var filteredData = filteredData.filter(datatable => datatable.city === inputElement2);
    }
    if(inputElement3){
        var filteredData = filteredData.filter(datatable => datatable.state === inputElement3);
    }
    if (input){
        var filteredData = filteredData.filter(datatable => datatable.state === inputElement4);
    }
    if(input){
        var filteredData = filteredData.filter(datatable => datatable.state === inputElement5);
    }
    buildTable(filteredData)
}


