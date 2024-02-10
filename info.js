document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // You can include any validation or processing here
    
    // Redirect to spending.html upon form submission
    window.location.href = 'spending.html';
});
