var data = {
  labels: ['January', 'February', 'March'],

  datasets: [
    {
      fillColor:"rgba(391,117,205,0.8)",
      data: [100,168,70],
      pointColor:"#00ccff"

    },
     {
      fillColor:"#ff3399",
      data: [09,118,70],
      pointColor:"#00ccff"

    }
  ]
}
var context = document.querySelector('#graph').getContext('2d');
new Chart(context).Bar(data);
