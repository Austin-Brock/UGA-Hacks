document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('pieChart').getContext('2d');
    
    var data = {
      labels: ['Rent', 'Food', 'Clothing', 'Investments', 'Other'],
      datasets: [{
        label: 'Income Distribution',
        data: [50000, 20000, 10000, 12000, 15000], // Example data, replace with your actual income distribution
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)' ,
        ]
      }]
    };
    
    var options = {
      responsive: false, // Set to true if you want the chart to be responsive
      maintainAspectRatio: false // Set to true if you want to maintain aspect ratio
    };
    
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options
    });
  });
  