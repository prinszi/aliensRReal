var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach((sightingsData) => {
  var row = tbody.append("tr");
  Object.entries(sightingsData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");
var reply = d3.select("#response");

button.on("click", () => {
    var inputField = d3.select("#datetime");
    var dateSearch = inputField.property("value");
    console.log(dateSearch);
    if (tableData.map(td => td.datetime).includes(dateSearch) === true ) {
        var filteredData = tableData.filter(search => search.datetime === dateSearch);
        console.log(filteredData)
        reply.text("Sightings found! See your results below.")
        d3.selectAll("#table-content tr").remove();
        filteredData.forEach((dateData) => {
            var row = tbody.append("tr");
            Object.entries(dateData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
      });
    } else {
        reply.text("Sorry, there is no data available for the date you entered. Please enter another date.")
        d3.selectAll("#table-content tr").remove();
        tableData.forEach((sightingsData) => {
            var row = tbody.append("tr");
            Object.entries(sightingsData).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
        console.log("no data available")
    }
  });





  