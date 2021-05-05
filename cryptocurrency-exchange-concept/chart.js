var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

  var options2 = {
        chart:{
            type:'donut'
        },
        series:[48,24,13,8,7],
        labels:['BTC','ETH','ETC','EOS','BTS']
  }

  var chart2 = new ApexCharts(document.querySelector("#donut-chart"),options2);
  chart2.render();