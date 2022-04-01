<script>
  import * as d3 from "d3";

  //   specify some data
  const data = [
    { date: new Date(2007, 3, 24), value: 91 },
    { date: new Date(2007, 3, 25), value: 98 },
    { date: new Date(2007, 3, 26), value: 93 },
    { date: new Date(2007, 3, 27), value: 91 },
    { date: new Date(2007, 3, 30), value: 99 },
    { date: new Date(2007, 4, 1), value: 95 },
  ];

  let pinZoom, pinXAxis;
  let margin = 40;
  let height = 400;
  let width = 600;
</script>
