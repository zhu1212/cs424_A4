const ageData = [
  {ZIPCODE: '60629', Age_range: '20' },
  {ZIPCODE: '60636', Age_range: '30' },
  {ZIPCODE: '60620', Age_range: '40' },
  {ZIPCODE: '60617', Age_range: '50' },
  {ZIPCODE: '60638', Age_range: '60' },
  {ZIPCODE: '60625', Age_range: '70' },
  {ZIPCODE: '60624', Age_range: '80' },
  {ZIPCODE: '60623', Age_range: '40' },
  {ZIPCODE: '60619', Age_range: '30' },
  {ZIPCODE: '60651', Age_range: '40' },
//   {ZIPCODE: '60632', Age_range: '50-59' },
//   {ZIPCODE: '60630', Age_range: '20-29' },
//   {ZIPCODE: '60645', Age_range: '40-49' },
//   {ZIPCODE: '60628', Age_range: '20-29' },
//   {ZIPCODE: '60641', Age_range: '40-49' },
//   {ZIPCODE: '60601', Age_range: '30-39' },
//   {ZIPCODE: '60602', Age_range: '40-49' },
//   {ZIPCODE: '60630', Age_range: '50-59' },
//   {ZIPCODE: '60604', Age_range: '60-69' },
//   {ZIPCODE: '60605', Age_range: '40-49' },
];

const crashesData = [
  { ZIPCODE: '60629', Crashes: 4096 },
  { ZIPCODE: '60636', Crashes: 1150 },
  { ZIPCODE: '60620', Crashes: 3089 },
  { ZIPCODE: '60617', Crashes: 2982 },
  { ZIPCODE: '60638', Crashes: 2000 },
  { ZIPCODE: '60625', Crashes: 2501 },
  { ZIPCODE: '60624', Crashes: 6933 },
  { ZIPCODE: '60623', Crashes: 2891 },
  { ZIPCODE: '60619', Crashes: 2797 },
  { ZIPCODE: '60651', Crashes: 2725 },
  { ZIPCODE: '60632', Crashes: 2716 },
  { ZIPCODE: '60630', Crashes: 3009 },
//   { ZIPCODE: '60645', Crashes: 5011 },
//   { ZIPCODE: '60628,', Crashes: 2624 },
//   { ZIPCODE: '60641', Crashes: 2281 },
//   { ZIPCODE: '60601', Crashes: 4869 },
//   { ZIPCODE: '60602', Crashes: 8607 },
//   { ZIPCODE: '60630', Crashes: 2501 },
//   { ZIPCODE: '60604', Crashes: 8045 },
//   { ZIPCODE: '60605', Crashes: 4147 },

];

// Function to create bar charts
// function createBarChart(data, elementId, valueField, valueLabel) {
//     // Define dimensions
//     const margin = { top: 20, right: 30, bottom: 40, left: 50 },
//           width = 500 - margin.left - margin.right,
//           height = 300 - margin.top - margin.bottom;
  
//     // Create SVG element
//     const svg = d3.select(elementId)
//       .append("svg")
//         .attr("width", width + margin.left + margin.right)
//         .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//         .attr("transform", `translate(${margin.left},${margin.top})`);
  
//     // Set up the scales
//     const xScale = d3.scaleBand()
//       .rangeRound([0, width])
//       .padding(0.1)
//       .domain(data.map(d => d.ZIPCODE));
  
//     const yScale = d3.scaleLinear()
//       .range([height, 0])
//       .domain([0, d3.max(data, d => d[valueField])]);
  
//     // Add the X axis
//     svg.append("g")
//       .attr("transform", `translate(0,${height})`)
//       .call(d3.axisBottom(xScale));
  
//     // Add the Y axis
//     svg.append("g")
//       .call(d3.axisLeft(yScale));
  
//     // Add bars
//     svg.selectAll(".bar")
//       .data(data)
//       .enter().append("rect")
//         .attr("class", "bar")
//         .attr("x", d => xScale(d.ZIPCODE))
//         .attr("y", d => yScale(d[valueField]))
//         .attr("width", xScale.bandwidth())
//         .attr("height", d => height - yScale(d[valueField]))
//         .attr("fill", "#69b3a2");
  
//     // Add labels
//     svg.selectAll(".label")
//       .data(data)
//       .enter().append("text")
//         .attr("class", "label")
//         .attr("x", (d) => xScale(d.ZIPCODE) + xScale.bandwidth() / 2)
//         .attr("y", (d) => yScale(d[valueField]) - 5)
//         .attr("text-anchor", "middle")
//         .text((d) => {
//             // Check if the valueLabel is defined in the data object
//             return d[valueLabel] !== undefined ? d[valueLabel] : '';
//           });
//   }
//   function updateVisualizations(zipCode) {
//     // Filter data based on selected ZIP code
//     const selectedAgeData = ageData.filter(d => d.ZIPCODE === zipCode);
//     const selectedCrashesData = crashesData.filter(d => d.ZIPCODE === zipCode);

//     // Clear previous visualizations
//     d3.select("#age-vis svg").remove();
//     d3.select("#crashes-vis svg").remove();

//     // Create new visualizations
//     createBarChart(selectedAgeData, "#age-vis", "Age_range");
//     createBarChart(selectedCrashesData, "#crashes-vis", "Crashes");
//   }

//   // Populate dropdown with ZIP codes
//   const select = d3.select("#zip-select");
//   select.selectAll("option.zip")
//     .data(ageData)
//     .enter()
//     .append("option")
//     .classed("zip", true)
//     .attr("value", d => d.ZIPCODE)
//     .text(d => d.ZIPCODE);

//   // Event listener for the dropdown
//   select.on("change", function() {
//     const zipCode = d3.select(this).property("value");
//     updateVisualizations(zipCode);
//   });

//   // Initial visualization setup
//   createBarChart(ageData, "#age-vis", "Age_range");
//   createBarChart(crashesData, "#crashes-vis", "Crashes");
// This function creates a bar chart for given data in the specified element.
function createBarChart(data, elementId, valueField) {
    // Define the dimensions and margins of the graph
    const margin = { top: 30, right: 30, bottom: 70, left: 60 },
          width = 460 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;
  
    // Append the svg object to the body of the page
    const svg = d3.select(elementId)
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
  
    // X axis
    const x = d3.scaleBand()
      .range([0, width])
      .domain(data.map(d => d.ZIPCODE))
      .padding(0.2);
  
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
  
    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d[valueField])])
      .range([height, 0]);
  
    svg.append("g")
      .call(d3.axisLeft(y));
  
    // Bars
    svg.selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
        .attr("x", d => x(d.ZIPCODE))
        .attr("y", d => y(d[valueField]))
        
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d[valueField]))
        .attr("fill", "#69b3a2");
  }
  
  // This function will be called when the dropdown selection changes.
  function updateVisualizations(selectedZIP) {
    // Filter the data based on the selected ZIP code
    const filteredAgeData = ageData.filter(d => d.ZIPCODE === selectedZIP);
    const filteredCrashesData = crashesData.filter(d => d.ZIPCODE === selectedZIP);
  
    // Remove the old svg elements
    d3.select("#age-vis svg").remove();
    d3.select("#crashes-vis svg").remove();
  
    // Create the new bar charts with the filtered data
    createBarChart(filteredAgeData, "#age-vis", "Age_range");
    createBarChart(filteredCrashesData, "#crashes-vis", "Crashes");
  }
  
  // Set up the initial charts
  createBarChart(ageData, "#age-vis", "Age_range");
  createBarChart(crashesData, "#crashes-vis", "Crashes");
  
  // Set up the event listener for the dropdown
  d3.select("#zip-select").on("change", function() {
    const selectedZIP = d3.select(this).property("value");
    updateVisualizations(selectedZIP);
  });
  