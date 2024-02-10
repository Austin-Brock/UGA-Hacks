document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // You can include any validation or processing here
    var income = document.getElementById('income').value; // Get the income value
    localStorage.setItem('annualIncome', income); // Store it in local storage
    // Redirect to spending.html upon form submission
    window.location.href = 'spending.html';
});
