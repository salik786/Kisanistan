
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Rice', 11],
    ['Wheat', 2],
    ['Sugarcane', 2],
    ['Barley', 2],
    ['Weed', 7]
  ]);

  var options = {
    title: 'Crop Along with Population Of Pakistan'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
google.charts.load('current', {
  'packages': ['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Wheat', 'Rice', 'Barley'],
    ['2014', 1000, 400, 200,],
    ['2015', 1170, 460, 250,],
    ['2016', 660, 1120, 300,],
    ['2017', 1030, 540, 350,]
  ]);

  var options = {
    chart: {
      title: 'Sales Of Crops With Respect to Years',
      subtitle: 'Wheat, Rice, and Barley: 2014-2017',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
