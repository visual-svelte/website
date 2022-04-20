import { arc, pie } from "d3";
const scrollyData = [
  "In the starting position, we have a simple bar  with six categoric variables along the x-axis. But what if the user wanted to explore how the categories looked as a pie chart (said no-one ever)? ",
  "At this point, I should make it clear that this was a technical challenge to see what was possible in terms of SVG path manipulation, not what might be best practice in terms of data visualization. Also the axes have been removed to make the code and animations easier to follow. ",
  "The theory goes that by morphing between the different chart types, the user can follow a category and as such make better inferences. Any way.... keep scrolling to see the first animation... ",
  "From the user perspective, each bar magically morphs into an arc in the pie chart. Under the hood, in fact, everything is an SVG path (not SVG rect for the bars).",
  "In the original video, they showed that by staggering the animations with a slight delay between the categories, the user could follow with categories went where better, so I implemented that too.",
  "I used the flubber npm package to perform the interpolation. I tried and tested a number of different interpolation methods (see the implementation tips below). ",
  "Guess what, they may look like circles, but they are actually SVG paths too. ",
  "And finally, we morph back to the starting position. ",
];

let data = [2, 13, 5, 10, 3, 14];

function barsFromData(data) {
  let width = 50;
  let padding = 20;
  let startY = 200;
  let startX = 0;
  let paths = [];
  data.map((d, i) => {
    let localX = (startX + width + padding) * i;
    let height = d * 15;
    let combined = `M${localX},${startY},  ${localX + width},${startY},  ${
      localX + width
    },${startY - height}, ${localX},${startY - height}Z`;

    paths.push(combined);
  });
  return paths;
}
const paths = barsFromData(data);

const arcs = pie()(data); // generate the arc angles from data
const arcGen = arc(); // generate the arcs
const pies = arcs.map((arc) => {
  let input = {
    innerRadius: 50,
    outerRadius: 100,
    startAngle: arc.startAngle,
    endAngle: arc.endAngle,
  };
  return arcGen(input);
});

function constructPointPathList(data) {
  const ellipseAttrsToPath = (rx, cx, ry, cy) =>
    `M${cx - rx},${cy}a${rx},${ry} 0 1,0 ${rx * 2},0a${rx},${ry} 0 1,0 -${
      rx * 2
    },0 Z`;

  let pointsList = [];

  data.map((d, i) => {
    let barWidth = 50;
    let margin = 20;
    let cx = i * 70 + 25;
    let cy = 200 - d * 15;
    let r = 10;

    pointsList.push(ellipseAttrsToPath(r, cx, r, cy));
  });

  return pointsList;
}
const pointsList = constructPointPathList(data);

export { scrollyData, paths, pointsList, pies };
