
// // Call the render function on load
// document.addEventListener('DOMContentLoaded', renderSpatialVisualization);
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map on the Chicago coordinates
    var mymap = L.map('mapid').setView([41.8781, -87.6298], 10);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(mymap);

    // Your data for crashes per ZIP code
    const zipCodeData = [{ 'ZIPCODE': 60629, 'CRASHES': 40967, 'latitude': 41.7750, 'longitude': -87.7089 },
    { 'ZIPCODE': 60618, 'CRASHES': 3967, 'latitude': 41.9449, 'longitude': -87.7024 },
    { 'ZIPCODE': 60636, 'CRASHES': 11500, 'latitude': 41.7725, 'longitude': -87.6692 },
    { 'ZIPCODE': 60620, 'CRASHES': 3089, 'latitude': 41.7413, 'longitude': -87.6632 },
    { 'ZIPCODE': 60617, 'CRASHES': 29824, 'latitude': 41.7062, 'longitude': -87.5552 },
    { 'ZIPCODE': 60638, 'CRASHES': 4000, 'latitude': 41.7836, 'longitude': -87.7712 },
    { 'ZIPCODE': 60625, 'CRASHES': 2501, 'latitude': 41.9758, 'longitude': -87.6985},
    { 'ZIPCODE': 60624, 'CRASHES': 6933, 'latitude': 41.8771, 'longitude': -87.72465 },
    { 'ZIPCODE': 60623, 'CRASHES': 28918, 'latitude': 41.8449, 'longitude': -87.7213 },
    { 'ZIPCODE': 60619, 'CRASHES': 27970, 'latitude': 41.7433, 'longitude': -87.60537 },
    { 'ZIPCODE': 60651, 'CRASHES': 27250, 'latitude': 41.9018, 'longitude': -87.7412 },
    { 'ZIPCODE': 60632, 'CRASHES': 27167, 'latitude': 41.8131, 'longitude': -87.7143 },
    { 'ZIPCODE': 60630, 'CRASHES': 8009, 'latitude': 41.9725, 'longitude': -87.7441 },
    { 'ZIPCODE': 60645, 'CRASHES': 5011, 'latitude': 41.0085, 'longitude': -87.6948 },
    { 'ZIPCODE': 60628, 'CRASHES': 26245, 'latitude': 41.6887, 'longitude': -87.6100 },
    { 'ZIPCODE': 60641, 'CRASHES': 22812, 'latitude': 41.9479, 'longitude': -87.7468 },
    { 'ZIPCODE': 60601, 'CRASHES': 4869, 'latitude': 41.8856, 'longitude': -87.6233 },
    { 'ZIPCODE': 60602, 'CRASHES': 8607, 'latitude': 41.8826, 'longitude': -87.6291 },
    { 'ZIPCODE': 60630, 'CRASHES': 25014, 'latitude': 41.9725, 'longitude': -87.7471},
    { 'ZIPCODE': 60604, 'CRASHES': 8045, 'latitude': 41.8776, 'longitude': -87.6290},
    { 'ZIPCODE': 60605, 'CRASHES': 4147, 'latitude': 41.8630, 'longitude': -87.6253 },
    { 'ZIPCODE': 60606, 'CRASHES': 2048, 'latitude': 41.8817, 'longitude': -87.6360 },
    { 'ZIPCODE': 60607, 'CRASHES': 5114, 'latitude': 41.8741, 'longitude': -87.6475 },
    { 'ZIPCODE': 60634, 'CRASHES': 11150, 'latitude': 41.9465, 'longitude': -87.8014 },
    { 'ZIPCODE': 60609, 'CRASHES': 9034, 'latitude': 41.8140, 'longitude': -87.6582 },
    { 'ZIPCODE': 60611, 'CRASHES': 5008, 'latitude': 41.8958, 'longitude': -87.76219 },
    { 'ZIPCODE': 60631, 'CRASHES': 7807, 'latitude': 41.9967, 'longitude': -87.8084 },
    { 'ZIPCODE': 60643, 'CRASHES': 5806, 'latitude': 41.7029, 'longitude': -87.6628},
    { 'ZIPCODE': 60647, 'CRASHES': 5080, 'latitude': 41.9208, 'longitude': -87.7019 },
    { 'ZIPCODE': 60649, 'CRASHES': 6005, 'latitude': 41.7656, 'longitude': -87.5738 },
    { 'ZIPCODE': 60642, 'CRASHES': 5896, 'latitude': 41.9032, 'longitude': -87.6565 },
    { 'ZIPCODE': 60652, 'CRASHES': 3091, 'latitude': 41.7460, 'longitude': -87.7123 },
    { 'ZIPCODE': 60653, 'CRASHES': 25820, 'latitude': 41.8194, 'longitude': -87.61129 },
    { 'ZIPCODE': 60655, 'CRASHES': 10582, 'latitude': 41.6945, 'longitude': -87.7012 },
    { 'ZIPCODE': 60657, 'CRASHES': 9987, 'latitude': 41.9409, 'longitude': -87.6580},
    { 'ZIPCODE': 60659, 'CRASHES': 7041, 'latitude': 41.9905, 'longitude': -87.7092 },
    { 'ZIPCODE': 60661, 'CRASHES': 5831, 'latitude': 41.8831, 'longitude': -87.6438 },
    { 'ZIPCODE': 60664, 'CRASHES': 1580, 'latitude': 41.8749, 'longitude': -87.6515},
    { 'ZIPCODE': 60668, 'CRASHES': 4875, 'latitude': 41.8815, 'longitude': -87.6269},
    { 'ZIPCODE': 60669, 'CRASHES': 2872, 'latitude': 41.8748, 'longitude': -87.6513},
    { 'ZIPCODE': 60673, 'CRASHES': 8704, 'latitude': 41.8865, 'longitude': -87.6229 },
    { 'ZIPCODE': 60675, 'CRASHES': 6514, 'latitude': 41.8812, 'longitude': -87.6232 },
    { 'ZIPCODE': 60672, 'CRASHES': 4872, 'latitude': 41.9479, 'longitude': -87.6268 },
    { 'ZIPCODE': 60674, 'CRASHES': 5871, 'latitude': 41.8797, 'longitude': -87.6346 },
    { 'ZIPCODE': 60677, 'CRASHES': 8541, 'latitude': 41.8348, 'longitude': -87.6823 },
    { 'ZIPCODE': 60678, 'CRASHES': 2857, 'latitude': 41.8812, 'longitude': -87.6256 },
    { 'ZIPCODE': 60680, 'CRASHES': 6812, 'latitude': 41.8836, 'longitude': -87.6415 },
    { 'ZIPCODE': 60682, 'CRASHES': 5401, 'latitude': 41.8798, 'longitude': -87.6323 },
    { 'ZIPCODE': 60684, 'CRASHES': 7058, 'latitude': 41.8821, 'longitude': -87.6368 },
    { 'ZIPCODE': 60685, 'CRASHES': 2214, 'latitude': 41.8863, 'longitude': -87.6232 },
    { 'ZIPCODE': 60687, 'CRASHES': 3325, 'latitude': 41.8810, 'longitude': -87.6270 },
    { 'ZIPCODE': 60689, 'CRASHES': 5412, 'latitude': 41.8741, 'longitude': -87.6380 },
    { 'ZIPCODE': 60690, 'CRASHES': 4624, 'latitude': 41.8780, 'longitude': -87.6174 },
    { 'ZIPCODE': 60693, 'CRASHES': 8578, 'latitude': 41.8778, 'longitude': -87.6174 },
    { 'ZIPCODE': 60696, 'CRASHES': 8571, 'latitude': 41.8739, 'longitude': -87.6379 },
    { 'ZIPCODE': 60695, 'CRASHES': 7543, 'latitude': 41.8740, 'longitude': -87.6382 },
    { 'ZIPCODE': 60699, 'CRASHES': 6658, 'latitude': 41.8732, 'longitude': -87.6402 },
    { 'ZIPCODE': 60701, 'CRASHES': 7778, 'latitude': 41.9550, 'longitude': -87.6445 },       
    ];

    // Add markers to the map for each ZIP code
    zipCodeData.forEach(function(item) {
        var marker = L.marker([item.latitude, item.longitude]).addTo(mymap);
        marker.bindPopup("<b>ZIP Code:</b> " + item.ZIPCODE + "<br><b>Crashes:</b> " + item.CRASHES);
    });
});
