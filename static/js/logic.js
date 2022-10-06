// STEP 1a: Create a new map object, titled myMap
var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 4,
});

// Step 1b: Add the tile layer (the background map image)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// STEP 2a: Load data with D3
d3.csv("linkedin.csv").then(function(linkedinData){
    
    // STEP 2b: Loop through the linkedinData
    for (var i = 0; i < linkedinData.length; i++) {
        jobTitle = linkedinData[i].job_title;
        jobLoc = linkedinData[i].job_location;
        lat = linkedinData[i].latitude;
        lon = linkedinData[i].longitude;

        // STEP 3a: Create a new marker with the appropriate coordinates
        var newMarker = L.marker([lat,lon]);

        // STEP 3b: Add the new marker to my map
        newMarker.addTo(myMap);

        // STEP 5: Bind a popup to the marker that will display on being clicked. This will be rendered as HTML.
        newMarker.bindPopup("Job Title: " + jobTitle + "<br>Job Location: " + jobLoc);
    }

});






// // STEP 6a: Create a legend to display information about our map.
// let legend = L.control({
//     position: "bottomright"
//   });

// // STEP 6b: Add the properties for the legend
// legend.onAdd = function() {
//     // Create a div for the legend to appear on the page
//     let div = L.DomUtil.create("div", "info legend");
    
//     // Set up intervals for the legend
//     let intervals = [-10, 10, 30, 50, 70, 90]; // (-10-10,10-30,30-50,50-70,70-90,90+)
    
//     // Set up colors for the intervals
//     let colors = ["red", "orangered", "orange", "gold", "yellow", "lightgreen"];

//     // Loop through the intervals and colors
//     // Generate a label with a colored square for each interval
//     for(var i = 0; i < intervals.length; i++)
//     {
//         // Div.innerHTML references the "info legend" div that we created
//         // This allows us to set the square for each interval and label
//         div.innerHTML += "<i style = 'background: "
//             + colors[i]
//             + "'></i>"
//             + intervals[i]
//             + (intervals[i+1]? "km - " + intervals[i+1]+"km<br>" : "+");
//             // If there is another element in the list of intervals,
//             // This code adds a dash, followed by the next interval.
//             // Otherwise, this code adds a plus sign.
//             // Format: (Boolean? ReturnIfTrue : ReturnIfFalse)
//     }

//     return div;
// };

// // STEP 6c: Add the legend to the map.
// legend.addTo(myMap);