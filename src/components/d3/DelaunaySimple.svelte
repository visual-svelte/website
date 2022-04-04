<script>
  import * as d3 from "d3";
  const points = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  const delaunay = d3.Delaunay.from(points);
  const voronoi = delaunay.voronoi([0, 0, 960, 500]);
  console.log("del", delaunay);
  console.log("vor", voronoi);
</script>

;
