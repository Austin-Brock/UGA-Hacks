document.addEventListener('DOMContentLoaded', function () {
  var annualIncome = localStorage.getItem('annualIncome'); // Retrieve the annual income value

  // Assuming you want to calculate the distribution based on the income
  // This is just an example. You'll adjust the percentages as needed
  var data = {
      labels: ['Rent', 'Food', 'Clothing', 'Investments', 'Other'],
      datasets: [{
          label: 'Income Distribution',
          data: [
              annualIncome * 0.4, // 40% for Rent
              annualIncome * 0.2, // 20% for Food
              annualIncome * 0.1, // 10% for Clothing
              annualIncome * 0.15, // 15% for Investments
              annualIncome * 0.15, // 15% for Other
          ],
          backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
          ]
      }]
  };

  var ctx = document.getElementById('pieChart').getContext('2d');
  var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
              title: {
                  display: true,
                  text: 'Income Distribution'
              }
          }
      }
  });
});

  