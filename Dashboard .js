const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const data = {
  labels: labels,
  datasets: [{
    label: 'Annual Recurring Revenue',
    data: [64, 58, 51, 43, 36, 48, 58, 62, 54, 45, 51, 64],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  },
  {
    label: 'Profit',
    data: [12, 15, 18, 21, 25, 20, 23, 26, 22, 19, 23, 18],
    backgroundColor: 'rgba(153, 102, 255, 0.2)',
    borderColor: 'rgba(153, 102, 255, 1)',
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);