// Import game questions, answers and photo name from csv file
//parse the data file
var csvfile = "./data/ffquiz.csv";

$.get(csvfile, function (data) {
    var csvdata = Papa.parse(data);
    console.log(csvdata);
});

// loop through data object and append containers with questions to page
for(var i=0; i<data.length; i++)
{
    $("<div class='row'></div>").appendTo("#questions");
}