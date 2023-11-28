// Import Vega-Lite API if using in a node environment or include it in your HTML

// Random number generator function
function seededRandom(seed) {
    var m = 0x80000000,
        a = 1103515245,
        c = 12345;
    seed = seed && seed % m || Math.random() * m;
    return function() {
        seed = (a * seed + c) % m;
        return seed / m;
    };
}

// Generate data
const random = seededRandom(0);
const data = Array.from({ length: 500 }, () => ({
    AGE: Math.floor(random() * (80 - 18) + 18),
    SEX: random() > 0.5 ? 'Male' : 'Female'
}));

// Define Vega-Lite specification
const vega_lite_spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Age Distribution Across Different Genders",
    "data": { "values": data },
    "mark": "area",
    "encoding": {
        "x": { "field": "AGE", "type": "quantitative", "title": "Age" },
        "y": { "aggregate": "count", "type": "quantitative", "title": "Density" },
        "color": { "field": "SEX", "type": "nominal", "scale": { "scheme": "viridis" }, "title": "Gender" },
        "opacity": { "value": 0.5 }
    },
    "title": "Age Distribution Across Different Genders"
};

// Render the Vega-Lite visualization
vegaEmbed('#vis', vega_lite_spec); // Assuming you have an element with id 'vis' in your HTML

