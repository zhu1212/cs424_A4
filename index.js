function searchVisualization() {
    var searchTerm = document.getElementById('searchBar').value;
    var targetElement = document.getElementById('visualization' + searchTerm);

    if(targetElement) {
        targetElement.scrollIntoView();
    } else {
        alert('Visualization not found!');
    }
}