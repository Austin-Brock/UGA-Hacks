document.getElementById('goalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    
    // Get user input
    const goalName = document.getElementById('goalName').value;
    const goalAmount = document.getElementById('goalAmount').value;

    // Create a new div element for the goal and its progress input
    const goalItem = document.createElement('div');
    goalItem.classList.add('goal-item');
    goalItem.innerHTML = `
        <p>${goalName}: $${goalAmount}</p>
        <input type="number" class="progress-input" placeholder="Saved amount" min="0" max="${goalAmount}" step="any" value="0">
        <span class="progress-display">0%</span>
    `;

    // Append the new goal to the goals container
    document.getElementById('goalsContainer').appendChild(goalItem);

    // Add an event listener to the progress input
    const progressInput = goalItem.querySelector('.progress-input');
    progressInput.addEventListener('input', function() {
        const savedAmount = parseFloat(this.value);
        const totalAmount = parseFloat(goalAmount);
        const progressPercent = (savedAmount / totalAmount * 100).toFixed(2);
        goalItem.querySelector('.progress-display').innerText = `${progressPercent}%`;
    });

    // Reset the form fields
    document.getElementById('goalName').value = '';
    document.getElementById('goalAmount').value = '';
});