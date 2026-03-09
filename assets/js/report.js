// Vẽ biểu đồ tiền phạt bằng Chart.js
const ctx = document.getElementById('fineChart').getContext('2d');
const fineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
    datasets: [{
      label: 'Tiền phạt (nghìn VND)',
      data: [25, 30, 45, 35, 40],
      backgroundColor: '#3498db'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
