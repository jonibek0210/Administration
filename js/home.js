var trace1 = {
   x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
   y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
   type: 'bar',
   name: 'Primary Product',
   marker: {
      color: '#1665D8',
      opacity: 0.7,
   }
};

var trace2 = {
   x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
   y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
   type: 'bar',
   name: 'Secondary Product',
   marker: {
      color: '#EDF0F2',
      opacity: 0.5
   }
};

var data = [trace1, trace2];

var layout = {
   title: '2013 Sales Report',
   xaxis: {
      tickangle: -45
   },
   barmode: 'group'
};

Plotly.newPlot('myDiv', data, layout);


data = {
   datasets: [{
      data: [10, 20, 30]
   }],

   // These labels appear in the legend and in the tooltips when hovering different arcs
   labels: [
      'Red',
      'Yellow',
      'Blue'
   ]
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
   type: 'doughnut',
   data: {
      labels: ['#F7D154', '#EC4C47', '#1070CA'],
      datasets: [{
         label: '# of Votes',
         data: [ 19, 10, 5],
         backgroundColor: [
            '#1070CA',
            '#EC4C47',
            '#F7D154',
         ],
         borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
         ],
         borderWidth: 1
      }]
   },
   options: {
      scales: {
         y: {
            beginAtZero: true
         }
      }
   }
});