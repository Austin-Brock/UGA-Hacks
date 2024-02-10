document.getElementById('debtForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var totalDebt = parseFloat(document.getElementById('totalDebt').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    var monthlyPayment = parseFloat(document.getElementById('monthlyPayment').value);

    var months = Math.ceil(totalDebt / monthlyPayment);
    var years = Math.floor(months / 12);
    months %= 12; // Remaining months after dividing by 12

    var resultText = `Based on your inputs, it will take approximately ${years} years and ${months} months to be debt-free.`;
    document.getElementById('result').innerText = resultText;
});
