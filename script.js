document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the username and password from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // You can add your login logic here, such as making API calls to verify credentials
    // For this example, let's just log the credentials to the console
    console.log('Username:', username);
    console.log('Password:', password);
    
    // After successful login, you can redirect the user to another page
    // window.location.href = 'dashboard.html';
  });
  