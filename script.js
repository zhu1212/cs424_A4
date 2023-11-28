function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Function to show Task 4
function showTask4() {
    // Assume the visualization container for Task 4 has the id 'visTask4'
    document.getElementById('visTask4').style.display = 'block';
    document.getElementById('visTask5').style.display = 'none';

    // Call the function from task_4.js to update and display the visualization
    populateDropdownAndAddListener();
    updateVisualization(document.getElementById('ageRangeSelect').value);
}

// Function to show Task 5
function showTask5() {
    document.getElementById('visTask4').style.display = 'none';
    // Assume the visualization container for Task 5 has the id 'visTask5'
    document.getElementById('visTask5').style.display = 'block';
    // Here you would call the function to update and display the visualization for Task 5
}

// Modify the dropdown to call these functions
document.getElementById('task4Link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showTask4();
});

document.getElementById('task5Link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showTask5();
});


document.addEventListener('DOMContentLoaded', function() {
    var bgContainer = document.getElementById('background-image-container');
    bgContainer.style.backgroundImage = "url('path-to-new-image.jpg')"; // Update with the new image path
  });