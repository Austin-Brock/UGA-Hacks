document.getElementById('goalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Get user input
    var goalName = document.getElementById('goalName').value;
    var goalAmount = document.getElementById('goalAmount').value;

    // Create a new div element for the goal
    var goalItem = document.createElement('div');
    goalItem.classList.add('goal-item');
    goalItem.innerHTML = `<p>${goalName}: $${goalAmount}</p>`;

    // Append the new goal to the goals container
    document.getElementById('goalsContainer').appendChild(goalItem);

    // Reset the form fields
    document.getElementById('goalName').value = '';
    document.getElementById('goalAmount').value = '';
});