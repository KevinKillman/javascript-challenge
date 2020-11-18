// from data.js
var tableData = data;

// YOUR CODE HERE!

var inputField = d3.select('input');
var text;
var button = d3.select('#filter-btn');
console.log(d3.select('.form-control').text());





var table = d3.select('#ufo-table')
var body = table.select('tbody')
body.append('tr')

inputField.on('change', function(){
    text = d3.event.target.value    
});
button.on('click', function(){
    body.text('')
    var filteredData = tableData.filter(result => (result.datetime == text))
    filteredData.forEach(result =>{
        body.append('tr')
        body.append('td').text(result.datetime)
        body.append('td').text(result.city)
        body.append('td').text(result.state)
        body.append('td').text(result.country)
        body.append('td').text(result.shape)
        body.append('td').text(result.durationMinutes)
        body.append('td').text(result.comments)

    });
});