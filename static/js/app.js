// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    var filteredData = tableData;

    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    var inputElement_date = d3.select("#datetime");
    var inputValue_date = inputElement_date.property("value");
    // filter the data for display based on the filtered element
    if(inputValue_date){
        console.log(inputValue_date);
        filteredData = filteredData.filter(UFO_sighting => UFO_sighting.datetime === inputValue_date);
    }

    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    var inputElement_city = d3.select("#city");
    var inputValue_city = inputElement_city.property("value");
    // filter the data for display based on the filtered element
    if(inputValue_city){
        console.log(inputValue_city);
        filteredData = filteredData.filter(UFO_sighting => UFO_sighting.city === inputValue_city);
    }

    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    var inputElement_state = d3.select("#state");
    var inputValue_state = inputElement_state.property("value");
    // filter the data for display based on the filtered element
    if(inputValue_state){
        console.log(inputValue_state);
        filteredData = filteredData.filter(UFO_sighting => UFO_sighting.state === inputValue_state);
    }

    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    var inputElement_country = d3.select("#country");
    var inputValue_country = inputElement_country.property("value");
    // filter the data for display based on the filtered element
    if(inputValue_country){
        console.log(inputValue_state);
        filteredData = filteredData.filter(UFO_sighting => UFO_sighting.country === inputValue_country);
    }

    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    var inputElement_shape = d3.select("#shape");
    var inputValue_shape = inputElement_shape.property("value");
    // filter the data for display based on the filtered element
    if(inputValue_shape){
        console.log(inputValue_shape);
        filteredData = filteredData.filter(UFO_sighting => UFO_sighting.shape === inputValue_shape);
    }


    var tbody = d3.select("tbody");

    tbody.html("");

    filteredData.forEach((UFO_sighting) => {
        var row = tbody.append("tr");
        Object.entries(UFO_sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });


});