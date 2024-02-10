function calculateMonthly() {
    const yearlySalary = document.getElementById('yearlySalary').value;
    const monthlyIncome = yearlySalary / 12;
    document.getElementById('monthlyIncome').innerText = monthlyIncome.toFixed(2);
  }
  