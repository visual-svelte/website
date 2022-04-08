import * as d3 from "d3";
const scrollyData = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, odio rem! Id magnam magni omnis, debitis ut tempore optio ullam tempora velit rerum voluptate quia a corrupti, odio reprehenderit. Delectus.",
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
  console.log("oaths", paths);
  return paths;
}
const paths = barsFromData(data);

const arcs = d3.pie()(data); // generate the arc angles from data
const arcGen = d3.arc(); // generate the arcs
const pies = arcs.map((arc) => {
  let input = {
    innerRadius: 10,
    outerRadius: 100,
    startAngle: arc.startAngle,
    endAngle: arc.endAngle,
  };
  console.log("svg?", arcGen(input));
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
