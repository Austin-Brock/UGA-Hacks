function calculateMonthly() {
    const yearlySalary = document.getElementById('yearlySalary').value;
    const monthlyIncome = yearlySalary / 12;
    document.getElementById('monthlyIncome').innerText = monthlyIncome.toFixed(2);

    const weeklyIncome = yearlySalary / 52;
    document.getElementById('weeklyIncome').innerText = weeklyIncome.toFixed(2);
  }
  