import { c as create_ssr_component, b as each, a as add_attribute, i as spread, j as escape_object, e as escape, v as validate_component } from "./index-0bcf38cf.js";
import { S as Scrolly, C as CodeVisual } from "./CodeVisual-c88bf6c4.js";
import * as d3 from "d3";
import feather from "feather-icons";
const scrollyData = [
  "In the starting position, we have a simple bar  with six categoric variables along the x-axis. But what if the user wanted to explore how the categories looked as a pie chart (said no-one ever)? ",
  "At this point, I should make it clear that this was a technical challenge to see what was possible in terms of SVG path manipulation, not what might be best practice in terms of data visualization. Also the axes have been removed to make the code and animations easier to follow. ",
  "The theory goes that by morphing between the different chart types, the user can follow a category and as such make better inferences. Any way.... keep scrolling to see the first animation... ",
  "From the user perspective, each bar magically morphs into an arc in the pie chart. Under the hood, in fact, everything is an SVG path (not SVG rect for the bars).",
  "In the original video, they showed that by staggering the animations with a slight delay between the categories, the user could follow with categories went where better, so I implemented that too.",
  "I used the flubber npm package to perform the interpolation. I tried and tested a number of different interpolation methods (see the implementation tips below). ",
  "Guess what, they may look like circles, but they are actually SVG paths too. ",
  "And finally, we morph back to the starting position. "
];
let data = [2, 13, 5, 10, 3, 14];
function barsFromData(data2) {
  let width = 50;
  let padding = 20;
  let startY = 200;
  let startX = 0;
  let paths2 = [];
  data2.map((d, i) => {
    let localX = (startX + width + padding) * i;
    let height = d * 15;
    let combined = `M${localX},${startY},  ${localX + width},${startY},  ${localX + width},${startY - height}, ${localX},${startY - height}Z`;
    paths2.push(combined);
  });
  return paths2;
}
const paths = barsFromData(data);
const arcs = d3.pie()(data);
const arcGen = d3.arc();
const pies = arcs.map((arc) => {
  let input = {
    innerRadius: 50,
    outerRadius: 100,
    startAngle: arc.startAngle,
    endAngle: arc.endAngle
  };
  return arcGen(input);
});
function constructPointPathList(data2) {
  const ellipseAttrsToPath = (rx, cx, ry, cy) => `M${cx - rx},${cy}a${rx},${ry} 0 1,0 ${rx * 2},0a${rx},${ry} 0 1,0 -${rx * 2},0 Z`;
  let pointsList2 = [];
  data2.map((d, i) => {
    let cx = i * 70 + 25;
    let cy = 200 - d * 15;
    let r = 10;
    pointsList2.push(ellipseAttrsToPath(r, cx, r, cy));
  });
  return pointsList2;
}
const pointsList = constructPointPathList(data);
function polygonArea(polygon) {
  var i = -1, n = polygon.length, a, b = polygon[n - 1], area2 = 0;
  while (++i < n) {
    a = b;
    b = polygon[i];
    area2 += a[1] * b[0] - a[0] * b[1];
  }
  return area2 / 2;
}
function d3Centroid(polygon) {
  var i = -1, n = polygon.length, x = 0, y = 0, a, b = polygon[n - 1], c, k = 0;
  while (++i < n) {
    a = b;
    b = polygon[i];
    k += c = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * c;
    y += (a[1] + b[1]) * c;
  }
  return k *= 3, [x / k, y / k];
}
function polygonLength(polygon) {
  var i = -1, n = polygon.length, b = polygon[n - 1], xa, ya, xb = b[0], yb = b[1], perimeter = 0;
  while (++i < n) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.sqrt(xa * xa + ya * ya);
  }
  return perimeter;
}
var paramCounts = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 };
var SPECIAL_SPACES = [
  5760,
  6158,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8239,
  8287,
  12288,
  65279
];
function isSpace(ch) {
  return ch === 10 || ch === 13 || ch === 8232 || ch === 8233 || ch === 32 || ch === 9 || ch === 11 || ch === 12 || ch === 160 || ch >= 5760 && SPECIAL_SPACES.indexOf(ch) >= 0;
}
function isCommand(code) {
  switch (code | 32) {
    case 109:
    case 122:
    case 108:
    case 104:
    case 118:
    case 99:
    case 115:
    case 113:
    case 116:
    case 97:
    case 114:
      return true;
  }
  return false;
}
function isArc(code) {
  return (code | 32) === 97;
}
function isDigit(code) {
  return code >= 48 && code <= 57;
}
function isDigitStart(code) {
  return code >= 48 && code <= 57 || code === 43 || code === 45 || code === 46;
}
function State(path) {
  this.index = 0;
  this.path = path;
  this.max = path.length;
  this.result = [];
  this.param = 0;
  this.err = "";
  this.segmentStart = 0;
  this.data = [];
}
function skipSpaces(state) {
  while (state.index < state.max && isSpace(state.path.charCodeAt(state.index))) {
    state.index++;
  }
}
function scanFlag(state) {
  var ch = state.path.charCodeAt(state.index);
  if (ch === 48) {
    state.param = 0;
    state.index++;
    return;
  }
  if (ch === 49) {
    state.param = 1;
    state.index++;
    return;
  }
  state.err = "SvgPath: arc flag can be 0 or 1 only (at pos " + state.index + ")";
}
function scanParam(state) {
  var start = state.index, index = start, max = state.max, zeroFirst = false, hasCeiling = false, hasDecimal = false, hasDot = false, ch;
  if (index >= max) {
    state.err = "SvgPath: missed param (at pos " + index + ")";
    return;
  }
  ch = state.path.charCodeAt(index);
  if (ch === 43 || ch === 45) {
    index++;
    ch = index < max ? state.path.charCodeAt(index) : 0;
  }
  if (!isDigit(ch) && ch !== 46) {
    state.err = "SvgPath: param should start with 0..9 or `.` (at pos " + index + ")";
    return;
  }
  if (ch !== 46) {
    zeroFirst = ch === 48;
    index++;
    ch = index < max ? state.path.charCodeAt(index) : 0;
    if (zeroFirst && index < max) {
      if (ch && isDigit(ch)) {
        state.err = "SvgPath: numbers started with `0` such as `09` are illegal (at pos " + start + ")";
        return;
      }
    }
    while (index < max && isDigit(state.path.charCodeAt(index))) {
      index++;
      hasCeiling = true;
    }
    ch = index < max ? state.path.charCodeAt(index) : 0;
  }
  if (ch === 46) {
    hasDot = true;
    index++;
    while (isDigit(state.path.charCodeAt(index))) {
      index++;
      hasDecimal = true;
    }
    ch = index < max ? state.path.charCodeAt(index) : 0;
  }
  if (ch === 101 || ch === 69) {
    if (hasDot && !hasCeiling && !hasDecimal) {
      state.err = "SvgPath: invalid float exponent (at pos " + index + ")";
      return;
    }
    index++;
    ch = index < max ? state.path.charCodeAt(index) : 0;
    if (ch === 43 || ch === 45) {
      index++;
    }
    if (index < max && isDigit(state.path.charCodeAt(index))) {
      while (index < max && isDigit(state.path.charCodeAt(index))) {
        index++;
      }
    } else {
      state.err = "SvgPath: invalid float exponent (at pos " + index + ")";
      return;
    }
  }
  state.index = index;
  state.param = parseFloat(state.path.slice(start, index)) + 0;
}
function finalizeSegment(state) {
  var cmd, cmdLC;
  cmd = state.path[state.segmentStart];
  cmdLC = cmd.toLowerCase();
  var params = state.data;
  if (cmdLC === "m" && params.length > 2) {
    state.result.push([cmd, params[0], params[1]]);
    params = params.slice(2);
    cmdLC = "l";
    cmd = cmd === "m" ? "l" : "L";
  }
  if (cmdLC === "r") {
    state.result.push([cmd].concat(params));
  } else {
    while (params.length >= paramCounts[cmdLC]) {
      state.result.push([cmd].concat(params.splice(0, paramCounts[cmdLC])));
      if (!paramCounts[cmdLC]) {
        break;
      }
    }
  }
}
function scanSegment(state) {
  var max = state.max, cmdCode, is_arc, comma_found, need_params, i;
  state.segmentStart = state.index;
  cmdCode = state.path.charCodeAt(state.index);
  is_arc = isArc(cmdCode);
  if (!isCommand(cmdCode)) {
    state.err = "SvgPath: bad command " + state.path[state.index] + " (at pos " + state.index + ")";
    return;
  }
  need_params = paramCounts[state.path[state.index].toLowerCase()];
  state.index++;
  skipSpaces(state);
  state.data = [];
  if (!need_params) {
    finalizeSegment(state);
    return;
  }
  comma_found = false;
  for (; ; ) {
    for (i = need_params; i > 0; i--) {
      if (is_arc && (i === 3 || i === 4))
        scanFlag(state);
      else
        scanParam(state);
      if (state.err.length) {
        return;
      }
      state.data.push(state.param);
      skipSpaces(state);
      comma_found = false;
      if (state.index < max && state.path.charCodeAt(state.index) === 44) {
        state.index++;
        skipSpaces(state);
        comma_found = true;
      }
    }
    if (comma_found) {
      continue;
    }
    if (state.index >= state.max) {
      break;
    }
    if (!isDigitStart(state.path.charCodeAt(state.index))) {
      break;
    }
  }
  finalizeSegment(state);
}
var path_parse = function pathParse(svgPath) {
  var state = new State(svgPath);
  var max = state.max;
  skipSpaces(state);
  while (state.index < max && !state.err.length) {
    scanSegment(state);
  }
  if (state.err.length) {
    state.result = [];
  } else if (state.result.length) {
    if ("mM".indexOf(state.result[0][0]) < 0) {
      state.err = "SvgPath: string should start with `M` or `m`";
      state.result = [];
    } else {
      state.result[0][0] = "M";
    }
  }
  return {
    err: state.err,
    segments: state.result
  };
};
function combine(m1, m2) {
  return [
    m1[0] * m2[0] + m1[2] * m2[1],
    m1[1] * m2[0] + m1[3] * m2[1],
    m1[0] * m2[2] + m1[2] * m2[3],
    m1[1] * m2[2] + m1[3] * m2[3],
    m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
    m1[1] * m2[4] + m1[3] * m2[5] + m1[5]
  ];
}
function Matrix$1() {
  if (!(this instanceof Matrix$1)) {
    return new Matrix$1();
  }
  this.queue = [];
  this.cache = null;
}
Matrix$1.prototype.matrix = function(m) {
  if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1 && m[4] === 0 && m[5] === 0) {
    return this;
  }
  this.cache = null;
  this.queue.push(m);
  return this;
};
Matrix$1.prototype.translate = function(tx, ty) {
  if (tx !== 0 || ty !== 0) {
    this.cache = null;
    this.queue.push([1, 0, 0, 1, tx, ty]);
  }
  return this;
};
Matrix$1.prototype.scale = function(sx, sy) {
  if (sx !== 1 || sy !== 1) {
    this.cache = null;
    this.queue.push([sx, 0, 0, sy, 0, 0]);
  }
  return this;
};
Matrix$1.prototype.rotate = function(angle, rx, ry) {
  var rad, cos, sin;
  if (angle !== 0) {
    this.translate(rx, ry);
    rad = angle * Math.PI / 180;
    cos = Math.cos(rad);
    sin = Math.sin(rad);
    this.queue.push([cos, sin, -sin, cos, 0, 0]);
    this.cache = null;
    this.translate(-rx, -ry);
  }
  return this;
};
Matrix$1.prototype.skewX = function(angle) {
  if (angle !== 0) {
    this.cache = null;
    this.queue.push([1, 0, Math.tan(angle * Math.PI / 180), 1, 0, 0]);
  }
  return this;
};
Matrix$1.prototype.skewY = function(angle) {
  if (angle !== 0) {
    this.cache = null;
    this.queue.push([1, Math.tan(angle * Math.PI / 180), 0, 1, 0, 0]);
  }
  return this;
};
Matrix$1.prototype.toArray = function() {
  if (this.cache) {
    return this.cache;
  }
  if (!this.queue.length) {
    this.cache = [1, 0, 0, 1, 0, 0];
    return this.cache;
  }
  this.cache = this.queue[0];
  if (this.queue.length === 1) {
    return this.cache;
  }
  for (var i = 1; i < this.queue.length; i++) {
    this.cache = combine(this.cache, this.queue[i]);
  }
  return this.cache;
};
Matrix$1.prototype.calc = function(x, y, isRelative) {
  var m;
  if (!this.queue.length) {
    return [x, y];
  }
  if (!this.cache) {
    this.cache = this.toArray();
  }
  m = this.cache;
  return [
    x * m[0] + y * m[2] + (isRelative ? 0 : m[4]),
    x * m[1] + y * m[3] + (isRelative ? 0 : m[5])
  ];
};
var matrix$1 = Matrix$1;
var Matrix = matrix$1;
var operations = {
  matrix: true,
  scale: true,
  rotate: true,
  translate: true,
  skewX: true,
  skewY: true
};
var CMD_SPLIT_RE = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/;
var PARAMS_SPLIT_RE = /[\s,]+/;
var transform_parse = function transformParse(transformString) {
  var matrix2 = new Matrix();
  var cmd, params;
  transformString.split(CMD_SPLIT_RE).forEach(function(item) {
    if (!item.length) {
      return;
    }
    if (typeof operations[item] !== "undefined") {
      cmd = item;
      return;
    }
    params = item.split(PARAMS_SPLIT_RE).map(function(i) {
      return +i || 0;
    });
    switch (cmd) {
      case "matrix":
        if (params.length === 6) {
          matrix2.matrix(params);
        }
        return;
      case "scale":
        if (params.length === 1) {
          matrix2.scale(params[0], params[0]);
        } else if (params.length === 2) {
          matrix2.scale(params[0], params[1]);
        }
        return;
      case "rotate":
        if (params.length === 1) {
          matrix2.rotate(params[0], 0, 0);
        } else if (params.length === 3) {
          matrix2.rotate(params[0], params[1], params[2]);
        }
        return;
      case "translate":
        if (params.length === 1) {
          matrix2.translate(params[0], 0);
        } else if (params.length === 2) {
          matrix2.translate(params[0], params[1]);
        }
        return;
      case "skewX":
        if (params.length === 1) {
          matrix2.skewX(params[0]);
        }
        return;
      case "skewY":
        if (params.length === 1) {
          matrix2.skewY(params[0]);
        }
        return;
    }
  });
  return matrix2;
};
var TAU$1 = Math.PI * 2;
function unit_vector_angle$1(ux, uy, vx, vy) {
  var sign2 = ux * vy - uy * vx < 0 ? -1 : 1;
  var dot = ux * vx + uy * vy;
  if (dot > 1) {
    dot = 1;
  }
  if (dot < -1) {
    dot = -1;
  }
  return sign2 * Math.acos(dot);
}
function get_arc_center$1(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi) {
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;
  var rx_sq = rx * rx;
  var ry_sq = ry * ry;
  var x1p_sq = x1p * x1p;
  var y1p_sq = y1p * y1p;
  var radicant = rx_sq * ry_sq - rx_sq * y1p_sq - ry_sq * x1p_sq;
  if (radicant < 0) {
    radicant = 0;
  }
  radicant /= rx_sq * y1p_sq + ry_sq * x1p_sq;
  radicant = Math.sqrt(radicant) * (fa === fs ? -1 : 1);
  var cxp = radicant * rx / ry * y1p;
  var cyp = radicant * -ry / rx * x1p;
  var cx = cos_phi * cxp - sin_phi * cyp + (x1 + x2) / 2;
  var cy = sin_phi * cxp + cos_phi * cyp + (y1 + y2) / 2;
  var v1x = (x1p - cxp) / rx;
  var v1y = (y1p - cyp) / ry;
  var v2x = (-x1p - cxp) / rx;
  var v2y = (-y1p - cyp) / ry;
  var theta1 = unit_vector_angle$1(1, 0, v1x, v1y);
  var delta_theta = unit_vector_angle$1(v1x, v1y, v2x, v2y);
  if (fs === 0 && delta_theta > 0) {
    delta_theta -= TAU$1;
  }
  if (fs === 1 && delta_theta < 0) {
    delta_theta += TAU$1;
  }
  return [cx, cy, theta1, delta_theta];
}
function approximate_unit_arc$1(theta1, delta_theta) {
  var alpha = 4 / 3 * Math.tan(delta_theta / 4);
  var x1 = Math.cos(theta1);
  var y1 = Math.sin(theta1);
  var x2 = Math.cos(theta1 + delta_theta);
  var y2 = Math.sin(theta1 + delta_theta);
  return [x1, y1, x1 - y1 * alpha, y1 + x1 * alpha, x2 + y2 * alpha, y2 - x2 * alpha, x2, y2];
}
var a2c$2 = function a2c(x1, y1, x2, y2, fa, fs, rx, ry, phi) {
  var sin_phi = Math.sin(phi * TAU$1 / 360);
  var cos_phi = Math.cos(phi * TAU$1 / 360);
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;
  if (x1p === 0 && y1p === 0) {
    return [];
  }
  if (rx === 0 || ry === 0) {
    return [];
  }
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  var lambda = x1p * x1p / (rx * rx) + y1p * y1p / (ry * ry);
  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }
  var cc = get_arc_center$1(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);
  var result = [];
  var theta1 = cc[2];
  var delta_theta = cc[3];
  var segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU$1 / 4)), 1);
  delta_theta /= segments;
  for (var i = 0; i < segments; i++) {
    result.push(approximate_unit_arc$1(theta1, delta_theta));
    theta1 += delta_theta;
  }
  return result.map(function(curve) {
    for (var i2 = 0; i2 < curve.length; i2 += 2) {
      var x = curve[i2 + 0];
      var y = curve[i2 + 1];
      x *= rx;
      y *= ry;
      var xp = cos_phi * x - sin_phi * y;
      var yp = sin_phi * x + cos_phi * y;
      curve[i2 + 0] = xp + cc[0];
      curve[i2 + 1] = yp + cc[1];
    }
    return curve;
  });
};
var epsilon = 1e-10;
var torad = Math.PI / 180;
function Ellipse(rx, ry, ax) {
  if (!(this instanceof Ellipse)) {
    return new Ellipse(rx, ry, ax);
  }
  this.rx = rx;
  this.ry = ry;
  this.ax = ax;
}
Ellipse.prototype.transform = function(m) {
  var c = Math.cos(this.ax * torad), s = Math.sin(this.ax * torad);
  var ma = [
    this.rx * (m[0] * c + m[2] * s),
    this.rx * (m[1] * c + m[3] * s),
    this.ry * (-m[0] * s + m[2] * c),
    this.ry * (-m[1] * s + m[3] * c)
  ];
  var J = ma[0] * ma[0] + ma[2] * ma[2], K = ma[1] * ma[1] + ma[3] * ma[3];
  var D = ((ma[0] - ma[3]) * (ma[0] - ma[3]) + (ma[2] + ma[1]) * (ma[2] + ma[1])) * ((ma[0] + ma[3]) * (ma[0] + ma[3]) + (ma[2] - ma[1]) * (ma[2] - ma[1]));
  var JK = (J + K) / 2;
  if (D < epsilon * JK) {
    this.rx = this.ry = Math.sqrt(JK);
    this.ax = 0;
    return this;
  }
  var L = ma[0] * ma[1] + ma[2] * ma[3];
  D = Math.sqrt(D);
  var l1 = JK + D / 2, l2 = JK - D / 2;
  this.ax = Math.abs(L) < epsilon && Math.abs(l1 - K) < epsilon ? 90 : Math.atan(Math.abs(L) > Math.abs(l1 - K) ? (l1 - J) / L : L / (l1 - K)) * 180 / Math.PI;
  if (this.ax >= 0) {
    this.rx = Math.sqrt(l1);
    this.ry = Math.sqrt(l2);
  } else {
    this.ax += 90;
    this.rx = Math.sqrt(l2);
    this.ry = Math.sqrt(l1);
  }
  return this;
};
Ellipse.prototype.isDegenerate = function() {
  return this.rx < epsilon * this.ry || this.ry < epsilon * this.rx;
};
var ellipse$1 = Ellipse;
var pathParse2 = path_parse;
var transformParse2 = transform_parse;
var matrix = matrix$1;
var a2c$1 = a2c$2;
var ellipse = ellipse$1;
function SvgPath(path) {
  if (!(this instanceof SvgPath)) {
    return new SvgPath(path);
  }
  var pstate = pathParse2(path);
  this.segments = pstate.segments;
  this.err = pstate.err;
  this.__stack = [];
}
SvgPath.from = function(src) {
  if (typeof src === "string")
    return new SvgPath(src);
  if (src instanceof SvgPath) {
    var s = new SvgPath("");
    s.err = src.err;
    s.segments = src.segments.map(function(sgm) {
      return sgm.slice();
    });
    s.__stack = src.__stack.map(function(m) {
      return matrix().matrix(m.toArray());
    });
    return s;
  }
  throw new Error("SvgPath.from: invalid param type " + src);
};
SvgPath.prototype.__matrix = function(m) {
  var self = this, i;
  if (!m.queue.length) {
    return;
  }
  this.iterate(function(s, index, x, y) {
    var p, result, name, isRelative;
    switch (s[0]) {
      case "v":
        p = m.calc(0, s[1], true);
        result = p[0] === 0 ? ["v", p[1]] : ["l", p[0], p[1]];
        break;
      case "V":
        p = m.calc(x, s[1], false);
        result = p[0] === m.calc(x, y, false)[0] ? ["V", p[1]] : ["L", p[0], p[1]];
        break;
      case "h":
        p = m.calc(s[1], 0, true);
        result = p[1] === 0 ? ["h", p[0]] : ["l", p[0], p[1]];
        break;
      case "H":
        p = m.calc(s[1], y, false);
        result = p[1] === m.calc(x, y, false)[1] ? ["H", p[0]] : ["L", p[0], p[1]];
        break;
      case "a":
      case "A":
        var ma = m.toArray();
        var e = ellipse(s[1], s[2], s[3]).transform(ma);
        if (ma[0] * ma[3] - ma[1] * ma[2] < 0) {
          s[5] = s[5] ? "0" : "1";
        }
        p = m.calc(s[6], s[7], s[0] === "a");
        if (s[0] === "A" && s[6] === x && s[7] === y || s[0] === "a" && s[6] === 0 && s[7] === 0) {
          result = [s[0] === "a" ? "l" : "L", p[0], p[1]];
          break;
        }
        if (e.isDegenerate()) {
          result = [s[0] === "a" ? "l" : "L", p[0], p[1]];
        } else {
          result = [s[0], e.rx, e.ry, e.ax, s[4], s[5], p[0], p[1]];
        }
        break;
      case "m":
        isRelative = index > 0;
        p = m.calc(s[1], s[2], isRelative);
        result = ["m", p[0], p[1]];
        break;
      default:
        name = s[0];
        result = [name];
        isRelative = name.toLowerCase() === name;
        for (i = 1; i < s.length; i += 2) {
          p = m.calc(s[i], s[i + 1], isRelative);
          result.push(p[0], p[1]);
        }
    }
    self.segments[index] = result;
  }, true);
};
SvgPath.prototype.__evaluateStack = function() {
  var m, i;
  if (!this.__stack.length) {
    return;
  }
  if (this.__stack.length === 1) {
    this.__matrix(this.__stack[0]);
    this.__stack = [];
    return;
  }
  m = matrix();
  i = this.__stack.length;
  while (--i >= 0) {
    m.matrix(this.__stack[i].toArray());
  }
  this.__matrix(m);
  this.__stack = [];
};
SvgPath.prototype.toString = function() {
  var result = "", prevCmd = "", cmdSkipped = false;
  this.__evaluateStack();
  for (var i = 0, len = this.segments.length; i < len; i++) {
    var segment2 = this.segments[i];
    var cmd = segment2[0];
    if (cmd !== prevCmd || cmd === "m" || cmd === "M") {
      if (cmd === "m" && prevCmd === "z")
        result += " ";
      result += cmd;
      cmdSkipped = false;
    } else {
      cmdSkipped = true;
    }
    for (var pos = 1; pos < segment2.length; pos++) {
      var val = segment2[pos];
      if (pos === 1) {
        if (cmdSkipped && val >= 0)
          result += " ";
      } else if (val >= 0)
        result += " ";
      result += val;
    }
    prevCmd = cmd;
  }
  return result;
};
SvgPath.prototype.translate = function(x, y) {
  this.__stack.push(matrix().translate(x, y || 0));
  return this;
};
SvgPath.prototype.scale = function(sx, sy) {
  this.__stack.push(matrix().scale(sx, !sy && sy !== 0 ? sx : sy));
  return this;
};
SvgPath.prototype.rotate = function(angle, rx, ry) {
  this.__stack.push(matrix().rotate(angle, rx || 0, ry || 0));
  return this;
};
SvgPath.prototype.skewX = function(degrees) {
  this.__stack.push(matrix().skewX(degrees));
  return this;
};
SvgPath.prototype.skewY = function(degrees) {
  this.__stack.push(matrix().skewY(degrees));
  return this;
};
SvgPath.prototype.matrix = function(m) {
  this.__stack.push(matrix().matrix(m));
  return this;
};
SvgPath.prototype.transform = function(transformString) {
  if (!transformString.trim()) {
    return this;
  }
  this.__stack.push(transformParse2(transformString));
  return this;
};
SvgPath.prototype.round = function(d) {
  var contourStartDeltaX = 0, contourStartDeltaY = 0, deltaX = 0, deltaY = 0, l;
  d = d || 0;
  this.__evaluateStack();
  this.segments.forEach(function(s) {
    var isRelative = s[0].toLowerCase() === s[0];
    switch (s[0]) {
      case "H":
      case "h":
        if (isRelative) {
          s[1] += deltaX;
        }
        deltaX = s[1] - s[1].toFixed(d);
        s[1] = +s[1].toFixed(d);
        return;
      case "V":
      case "v":
        if (isRelative) {
          s[1] += deltaY;
        }
        deltaY = s[1] - s[1].toFixed(d);
        s[1] = +s[1].toFixed(d);
        return;
      case "Z":
      case "z":
        deltaX = contourStartDeltaX;
        deltaY = contourStartDeltaY;
        return;
      case "M":
      case "m":
        if (isRelative) {
          s[1] += deltaX;
          s[2] += deltaY;
        }
        deltaX = s[1] - s[1].toFixed(d);
        deltaY = s[2] - s[2].toFixed(d);
        contourStartDeltaX = deltaX;
        contourStartDeltaY = deltaY;
        s[1] = +s[1].toFixed(d);
        s[2] = +s[2].toFixed(d);
        return;
      case "A":
      case "a":
        if (isRelative) {
          s[6] += deltaX;
          s[7] += deltaY;
        }
        deltaX = s[6] - s[6].toFixed(d);
        deltaY = s[7] - s[7].toFixed(d);
        s[1] = +s[1].toFixed(d);
        s[2] = +s[2].toFixed(d);
        s[3] = +s[3].toFixed(d + 2);
        s[6] = +s[6].toFixed(d);
        s[7] = +s[7].toFixed(d);
        return;
      default:
        l = s.length;
        if (isRelative) {
          s[l - 2] += deltaX;
          s[l - 1] += deltaY;
        }
        deltaX = s[l - 2] - s[l - 2].toFixed(d);
        deltaY = s[l - 1] - s[l - 1].toFixed(d);
        s.forEach(function(val, i) {
          if (!i) {
            return;
          }
          s[i] = +s[i].toFixed(d);
        });
        return;
    }
  });
  return this;
};
SvgPath.prototype.iterate = function(iterator, keepLazyStack) {
  var segments = this.segments, replacements = {}, needReplace = false, lastX = 0, lastY = 0, countourStartX = 0, countourStartY = 0;
  var i, j, newSegments;
  if (!keepLazyStack) {
    this.__evaluateStack();
  }
  segments.forEach(function(s, index) {
    var res = iterator(s, index, lastX, lastY);
    if (Array.isArray(res)) {
      replacements[index] = res;
      needReplace = true;
    }
    var isRelative = s[0] === s[0].toLowerCase();
    switch (s[0]) {
      case "m":
      case "M":
        lastX = s[1] + (isRelative ? lastX : 0);
        lastY = s[2] + (isRelative ? lastY : 0);
        countourStartX = lastX;
        countourStartY = lastY;
        return;
      case "h":
      case "H":
        lastX = s[1] + (isRelative ? lastX : 0);
        return;
      case "v":
      case "V":
        lastY = s[1] + (isRelative ? lastY : 0);
        return;
      case "z":
      case "Z":
        lastX = countourStartX;
        lastY = countourStartY;
        return;
      default:
        lastX = s[s.length - 2] + (isRelative ? lastX : 0);
        lastY = s[s.length - 1] + (isRelative ? lastY : 0);
    }
  });
  if (!needReplace) {
    return this;
  }
  newSegments = [];
  for (i = 0; i < segments.length; i++) {
    if (typeof replacements[i] !== "undefined") {
      for (j = 0; j < replacements[i].length; j++) {
        newSegments.push(replacements[i][j]);
      }
    } else {
      newSegments.push(segments[i]);
    }
  }
  this.segments = newSegments;
  return this;
};
SvgPath.prototype.abs = function() {
  this.iterate(function(s, index, x, y) {
    var name = s[0], nameUC = name.toUpperCase(), i;
    if (name === nameUC) {
      return;
    }
    s[0] = nameUC;
    switch (name) {
      case "v":
        s[1] += y;
        return;
      case "a":
        s[6] += x;
        s[7] += y;
        return;
      default:
        for (i = 1; i < s.length; i++) {
          s[i] += i % 2 ? x : y;
        }
    }
  }, true);
  return this;
};
SvgPath.prototype.rel = function() {
  this.iterate(function(s, index, x, y) {
    var name = s[0], nameLC = name.toLowerCase(), i;
    if (name === nameLC) {
      return;
    }
    if (index === 0 && name === "M") {
      return;
    }
    s[0] = nameLC;
    switch (name) {
      case "V":
        s[1] -= y;
        return;
      case "A":
        s[6] -= x;
        s[7] -= y;
        return;
      default:
        for (i = 1; i < s.length; i++) {
          s[i] -= i % 2 ? x : y;
        }
    }
  }, true);
  return this;
};
SvgPath.prototype.unarc = function() {
  this.iterate(function(s, index, x, y) {
    var new_segments, nextX, nextY, result = [], name = s[0];
    if (name !== "A" && name !== "a") {
      return null;
    }
    if (name === "a") {
      nextX = x + s[6];
      nextY = y + s[7];
    } else {
      nextX = s[6];
      nextY = s[7];
    }
    new_segments = a2c$1(x, y, nextX, nextY, s[4], s[5], s[1], s[2], s[3]);
    if (new_segments.length === 0) {
      return [[s[0] === "a" ? "l" : "L", s[6], s[7]]];
    }
    new_segments.forEach(function(s2) {
      result.push(["C", s2[2], s2[3], s2[4], s2[5], s2[6], s2[7]]);
    });
    return result;
  });
  return this;
};
SvgPath.prototype.unshort = function() {
  var segments = this.segments;
  var prevControlX, prevControlY, prevSegment;
  var curControlX, curControlY;
  this.iterate(function(s, idx, x, y) {
    var name = s[0], nameUC = name.toUpperCase(), isRelative;
    if (!idx) {
      return;
    }
    if (nameUC === "T") {
      isRelative = name === "t";
      prevSegment = segments[idx - 1];
      if (prevSegment[0] === "Q") {
        prevControlX = prevSegment[1] - x;
        prevControlY = prevSegment[2] - y;
      } else if (prevSegment[0] === "q") {
        prevControlX = prevSegment[1] - prevSegment[3];
        prevControlY = prevSegment[2] - prevSegment[4];
      } else {
        prevControlX = 0;
        prevControlY = 0;
      }
      curControlX = -prevControlX;
      curControlY = -prevControlY;
      if (!isRelative) {
        curControlX += x;
        curControlY += y;
      }
      segments[idx] = [
        isRelative ? "q" : "Q",
        curControlX,
        curControlY,
        s[1],
        s[2]
      ];
    } else if (nameUC === "S") {
      isRelative = name === "s";
      prevSegment = segments[idx - 1];
      if (prevSegment[0] === "C") {
        prevControlX = prevSegment[3] - x;
        prevControlY = prevSegment[4] - y;
      } else if (prevSegment[0] === "c") {
        prevControlX = prevSegment[3] - prevSegment[5];
        prevControlY = prevSegment[4] - prevSegment[6];
      } else {
        prevControlX = 0;
        prevControlY = 0;
      }
      curControlX = -prevControlX;
      curControlY = -prevControlY;
      if (!isRelative) {
        curControlX += x;
        curControlY += y;
      }
      segments[idx] = [
        isRelative ? "c" : "C",
        curControlX,
        curControlY,
        s[1],
        s[2],
        s[3],
        s[4]
      ];
    }
  });
  return this;
};
var svgpath$1 = SvgPath;
var svgpath = svgpath$1;
var length = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 };
var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
function parse$1(path) {
  var data2 = [];
  path.replace(segment, function(_, command, args) {
    var type = command.toLowerCase();
    args = parseValues(args);
    if (type === "m" && args.length > 2) {
      data2.push([command].concat(args.splice(0, 2)));
      type = "l";
      command = command === "m" ? "l" : "L";
    }
    while (args.length >= 0) {
      if (args.length === length[type]) {
        args.unshift(command);
        return data2.push(args);
      }
      if (args.length < length[type]) {
        throw new Error("malformed path data");
      }
      data2.push([command].concat(args.splice(0, length[type])));
    }
  });
  return data2;
}
var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
function parseValues(args) {
  var numbers = args.match(number);
  return numbers ? numbers.map(Number) : [];
}
function Bezier(ax, ay, bx, by, cx, cy, dx, dy) {
  return new Bezier$1(ax, ay, bx, by, cx, cy, dx, dy);
}
function Bezier$1(ax, ay, bx, by, cx, cy, dx, dy) {
  this.a = { x: ax, y: ay };
  this.b = { x: bx, y: by };
  this.c = { x: cx, y: cy };
  this.d = { x: dx, y: dy };
  if (dx !== null && dx !== void 0 && dy !== null && dy !== void 0) {
    this.getArcLength = getCubicArcLength;
    this.getPoint = cubicPoint;
    this.getDerivative = cubicDerivative;
  } else {
    this.getArcLength = getQuadraticArcLength;
    this.getPoint = quadraticPoint;
    this.getDerivative = quadraticDerivative;
  }
  this.init();
}
Bezier$1.prototype = {
  constructor: Bezier$1,
  init: function() {
    this.length = this.getArcLength([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
  },
  getTotalLength: function() {
    return this.length;
  },
  getPointAtLength: function(length2) {
    var t = t2length(length2, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
    return this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t);
  },
  getTangentAtLength: function(length2) {
    var t = t2length(length2, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
    var derivative = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t);
    var mdl = Math.sqrt(derivative.x * derivative.x + derivative.y * derivative.y);
    var tangent;
    if (mdl > 0) {
      tangent = { x: derivative.x / mdl, y: derivative.y / mdl };
    } else {
      tangent = { x: 0, y: 0 };
    }
    return tangent;
  },
  getPropertiesAtLength: function(length2) {
    var t = t2length(length2, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
    var derivative = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t);
    var mdl = Math.sqrt(derivative.x * derivative.x + derivative.y * derivative.y);
    var tangent;
    if (mdl > 0) {
      tangent = { x: derivative.x / mdl, y: derivative.y / mdl };
    } else {
      tangent = { x: 0, y: 0 };
    }
    var point = this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t);
    return { x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y };
  }
};
function quadraticDerivative(xs, ys, t) {
  return {
    x: (1 - t) * 2 * (xs[1] - xs[0]) + t * 2 * (xs[2] - xs[1]),
    y: (1 - t) * 2 * (ys[1] - ys[0]) + t * 2 * (ys[2] - ys[1])
  };
}
function cubicDerivative(xs, ys, t) {
  var derivative = quadraticPoint([3 * (xs[1] - xs[0]), 3 * (xs[2] - xs[1]), 3 * (xs[3] - xs[2])], [3 * (ys[1] - ys[0]), 3 * (ys[2] - ys[1]), 3 * (ys[3] - ys[2])], t);
  return derivative;
}
function t2length(length2, total_length, func, xs, ys) {
  var error = 1;
  var t = length2 / total_length;
  var step = (length2 - func(xs, ys, t)) / total_length;
  while (error > 1e-3) {
    var increasedTLength = func(xs, ys, t + step);
    var decreasedTLength = func(xs, ys, t - step);
    var increasedTError = Math.abs(length2 - increasedTLength) / total_length;
    var decreasedTError = Math.abs(length2 - decreasedTLength) / total_length;
    if (increasedTError < error) {
      error = increasedTError;
      t += step;
    } else if (decreasedTError < error) {
      error = decreasedTError;
      t -= step;
    } else {
      step /= 2;
    }
  }
  return t;
}
function quadraticPoint(xs, ys, t) {
  var x = (1 - t) * (1 - t) * xs[0] + 2 * (1 - t) * t * xs[1] + t * t * xs[2];
  var y = (1 - t) * (1 - t) * ys[0] + 2 * (1 - t) * t * ys[1] + t * t * ys[2];
  return { x, y };
}
function cubicPoint(xs, ys, t) {
  var x = (1 - t) * (1 - t) * (1 - t) * xs[0] + 3 * (1 - t) * (1 - t) * t * xs[1] + 3 * (1 - t) * t * t * xs[2] + t * t * t * xs[3];
  var y = (1 - t) * (1 - t) * (1 - t) * ys[0] + 3 * (1 - t) * (1 - t) * t * ys[1] + 3 * (1 - t) * t * t * ys[2] + t * t * t * ys[3];
  return { x, y };
}
function getQuadraticArcLength(xs, ys, t) {
  if (t === void 0) {
    t = 1;
  }
  var ax = xs[0] - 2 * xs[1] + xs[2];
  var ay = ys[0] - 2 * ys[1] + ys[2];
  var bx = 2 * xs[1] - 2 * xs[0];
  var by = 2 * ys[1] - 2 * ys[0];
  var A = 4 * (ax * ax + ay * ay);
  var B2 = 4 * (ax * bx + ay * by);
  var C = bx * bx + by * by;
  if (A === 0) {
    return t * Math.sqrt(Math.pow(xs[2] - xs[0], 2) + Math.pow(ys[2] - ys[0], 2));
  }
  var b = B2 / (2 * A);
  var c = C / A;
  var u = t + b;
  var k = c - b * b;
  return Math.sqrt(A) / 2 * (u * Math.sqrt(u * u + k) - b * Math.sqrt(b * b + k) + k * Math.log(Math.abs((u + Math.sqrt(u * u + k)) / (b + Math.sqrt(b * b + k)))));
}
var tValues = [
  [],
  [],
  [-0.5773502691896257, 0.5773502691896257],
  [0, -0.7745966692414834, 0.7745966692414834],
  [-0.33998104358485626, 0.33998104358485626, -0.8611363115940526, 0.8611363115940526],
  [0, -0.5384693101056831, 0.5384693101056831, -0.906179845938664, 0.906179845938664],
  [0.6612093864662645, -0.6612093864662645, -0.2386191860831969, 0.2386191860831969, -0.932469514203152, 0.932469514203152],
  [0, 0.4058451513773972, -0.4058451513773972, -0.7415311855993945, 0.7415311855993945, -0.9491079123427585, 0.9491079123427585],
  [-0.1834346424956498, 0.1834346424956498, -0.525532409916329, 0.525532409916329, -0.7966664774136267, 0.7966664774136267, -0.9602898564975363, 0.9602898564975363],
  [0, -0.8360311073266358, 0.8360311073266358, -0.9681602395076261, 0.9681602395076261, -0.3242534234038089, 0.3242534234038089, -0.6133714327005904, 0.6133714327005904],
  [-0.14887433898163122, 0.14887433898163122, -0.4333953941292472, 0.4333953941292472, -0.6794095682990244, 0.6794095682990244, -0.8650633666889845, 0.8650633666889845, -0.9739065285171717, 0.9739065285171717],
  [0, -0.26954315595234496, 0.26954315595234496, -0.5190961292068118, 0.5190961292068118, -0.7301520055740494, 0.7301520055740494, -0.8870625997680953, 0.8870625997680953, -0.978228658146057, 0.978228658146057],
  [-0.1252334085114689, 0.1252334085114689, -0.3678314989981802, 0.3678314989981802, -0.5873179542866175, 0.5873179542866175, -0.7699026741943047, 0.7699026741943047, -0.9041172563704749, 0.9041172563704749, -0.9815606342467192, 0.9815606342467192],
  [0, -0.2304583159551348, 0.2304583159551348, -0.44849275103644687, 0.44849275103644687, -0.6423493394403402, 0.6423493394403402, -0.8015780907333099, 0.8015780907333099, -0.9175983992229779, 0.9175983992229779, -0.9841830547185881, 0.9841830547185881],
  [-0.10805494870734367, 0.10805494870734367, -0.31911236892788974, 0.31911236892788974, -0.5152486363581541, 0.5152486363581541, -0.6872929048116855, 0.6872929048116855, -0.827201315069765, 0.827201315069765, -0.9284348836635735, 0.9284348836635735, -0.9862838086968123, 0.9862838086968123],
  [0, -0.20119409399743451, 0.20119409399743451, -0.3941513470775634, 0.3941513470775634, -0.5709721726085388, 0.5709721726085388, -0.7244177313601701, 0.7244177313601701, -0.8482065834104272, 0.8482065834104272, -0.937273392400706, 0.937273392400706, -0.9879925180204854, 0.9879925180204854],
  [-0.09501250983763744, 0.09501250983763744, -0.2816035507792589, 0.2816035507792589, -0.45801677765722737, 0.45801677765722737, -0.6178762444026438, 0.6178762444026438, -0.755404408355003, 0.755404408355003, -0.8656312023878318, 0.8656312023878318, -0.9445750230732326, 0.9445750230732326, -0.9894009349916499, 0.9894009349916499],
  [0, -0.17848418149584785, 0.17848418149584785, -0.3512317634538763, 0.3512317634538763, -0.5126905370864769, 0.5126905370864769, -0.6576711592166907, 0.6576711592166907, -0.7815140038968014, 0.7815140038968014, -0.8802391537269859, 0.8802391537269859, -0.9506755217687678, 0.9506755217687678, -0.9905754753144174, 0.9905754753144174],
  [-0.0847750130417353, 0.0847750130417353, -0.2518862256915055, 0.2518862256915055, -0.41175116146284263, 0.41175116146284263, -0.5597708310739475, 0.5597708310739475, -0.6916870430603532, 0.6916870430603532, -0.8037049589725231, 0.8037049589725231, -0.8926024664975557, 0.8926024664975557, -0.9558239495713977, 0.9558239495713977, -0.9915651684209309, 0.9915651684209309],
  [0, -0.16035864564022537, 0.16035864564022537, -0.31656409996362983, 0.31656409996362983, -0.46457074137596094, 0.46457074137596094, -0.600545304661681, 0.600545304661681, -0.7209661773352294, 0.7209661773352294, -0.8227146565371428, 0.8227146565371428, -0.9031559036148179, 0.9031559036148179, -0.96020815213483, 0.96020815213483, -0.9924068438435844, 0.9924068438435844],
  [-0.07652652113349734, 0.07652652113349734, -0.22778585114164507, 0.22778585114164507, -0.37370608871541955, 0.37370608871541955, -0.5108670019508271, 0.5108670019508271, -0.636053680726515, 0.636053680726515, -0.7463319064601508, 0.7463319064601508, -0.8391169718222188, 0.8391169718222188, -0.912234428251326, 0.912234428251326, -0.9639719272779138, 0.9639719272779138, -0.9931285991850949, 0.9931285991850949],
  [0, -0.1455618541608951, 0.1455618541608951, -0.2880213168024011, 0.2880213168024011, -0.4243421202074388, 0.4243421202074388, -0.5516188358872198, 0.5516188358872198, -0.6671388041974123, 0.6671388041974123, -0.7684399634756779, 0.7684399634756779, -0.8533633645833173, 0.8533633645833173, -0.9200993341504008, 0.9200993341504008, -0.9672268385663063, 0.9672268385663063, -0.9937521706203895, 0.9937521706203895],
  [-0.06973927331972223, 0.06973927331972223, -0.20786042668822127, 0.20786042668822127, -0.34193582089208424, 0.34193582089208424, -0.469355837986757, 0.469355837986757, -0.5876404035069116, 0.5876404035069116, -0.6944872631866827, 0.6944872631866827, -0.7878168059792081, 0.7878168059792081, -0.8658125777203002, 0.8658125777203002, -0.926956772187174, 0.926956772187174, -0.9700604978354287, 0.9700604978354287, -0.9942945854823992, 0.9942945854823992],
  [0, -0.1332568242984661, 0.1332568242984661, -0.26413568097034495, 0.26413568097034495, -0.3903010380302908, 0.3903010380302908, -0.5095014778460075, 0.5095014778460075, -0.6196098757636461, 0.6196098757636461, -0.7186613631319502, 0.7186613631319502, -0.8048884016188399, 0.8048884016188399, -0.8767523582704416, 0.8767523582704416, -0.9329710868260161, 0.9329710868260161, -0.9725424712181152, 0.9725424712181152, -0.9947693349975522, 0.9947693349975522],
  [-0.06405689286260563, 0.06405689286260563, -0.1911188674736163, 0.1911188674736163, -0.3150426796961634, 0.3150426796961634, -0.4337935076260451, 0.4337935076260451, -0.5454214713888396, 0.5454214713888396, -0.6480936519369755, 0.6480936519369755, -0.7401241915785544, 0.7401241915785544, -0.820001985973903, 0.820001985973903, -0.8864155270044011, 0.8864155270044011, -0.9382745520027328, 0.9382745520027328, -0.9747285559713095, 0.9747285559713095, -0.9951872199970213, 0.9951872199970213]
];
var cValues = [
  [],
  [],
  [1, 1],
  [0.8888888888888888, 0.5555555555555556, 0.5555555555555556],
  [0.6521451548625461, 0.6521451548625461, 0.34785484513745385, 0.34785484513745385],
  [0.5688888888888889, 0.47862867049936647, 0.47862867049936647, 0.23692688505618908, 0.23692688505618908],
  [0.3607615730481386, 0.3607615730481386, 0.46791393457269104, 0.46791393457269104, 0.17132449237917036, 0.17132449237917036],
  [0.4179591836734694, 0.3818300505051189, 0.3818300505051189, 0.27970539148927664, 0.27970539148927664, 0.1294849661688697, 0.1294849661688697],
  [0.362683783378362, 0.362683783378362, 0.31370664587788727, 0.31370664587788727, 0.22238103445337448, 0.22238103445337448, 0.10122853629037626, 0.10122853629037626],
  [0.3302393550012598, 0.1806481606948574, 0.1806481606948574, 0.08127438836157441, 0.08127438836157441, 0.31234707704000286, 0.31234707704000286, 0.26061069640293544, 0.26061069640293544],
  [0.29552422471475287, 0.29552422471475287, 0.26926671930999635, 0.26926671930999635, 0.21908636251598204, 0.21908636251598204, 0.1494513491505806, 0.1494513491505806, 0.06667134430868814, 0.06667134430868814],
  [0.2729250867779006, 0.26280454451024665, 0.26280454451024665, 0.23319376459199048, 0.23319376459199048, 0.18629021092773426, 0.18629021092773426, 0.1255803694649046, 0.1255803694649046, 0.05566856711617366, 0.05566856711617366],
  [0.24914704581340277, 0.24914704581340277, 0.2334925365383548, 0.2334925365383548, 0.20316742672306592, 0.20316742672306592, 0.16007832854334622, 0.16007832854334622, 0.10693932599531843, 0.10693932599531843, 0.04717533638651183, 0.04717533638651183],
  [0.2325515532308739, 0.22628318026289723, 0.22628318026289723, 0.2078160475368885, 0.2078160475368885, 0.17814598076194574, 0.17814598076194574, 0.13887351021978725, 0.13887351021978725, 0.09212149983772845, 0.09212149983772845, 0.04048400476531588, 0.04048400476531588],
  [0.2152638534631578, 0.2152638534631578, 0.2051984637212956, 0.2051984637212956, 0.18553839747793782, 0.18553839747793782, 0.15720316715819355, 0.15720316715819355, 0.12151857068790319, 0.12151857068790319, 0.08015808715976021, 0.08015808715976021, 0.03511946033175186, 0.03511946033175186],
  [0.2025782419255613, 0.19843148532711158, 0.19843148532711158, 0.1861610000155622, 0.1861610000155622, 0.16626920581699392, 0.16626920581699392, 0.13957067792615432, 0.13957067792615432, 0.10715922046717194, 0.10715922046717194, 0.07036604748810812, 0.07036604748810812, 0.03075324199611727, 0.03075324199611727],
  [0.1894506104550685, 0.1894506104550685, 0.18260341504492358, 0.18260341504492358, 0.16915651939500254, 0.16915651939500254, 0.14959598881657674, 0.14959598881657674, 0.12462897125553388, 0.12462897125553388, 0.09515851168249279, 0.09515851168249279, 0.062253523938647894, 0.062253523938647894, 0.027152459411754096, 0.027152459411754096],
  [0.17944647035620653, 0.17656270536699264, 0.17656270536699264, 0.16800410215645004, 0.16800410215645004, 0.15404576107681028, 0.15404576107681028, 0.13513636846852548, 0.13513636846852548, 0.11188384719340397, 0.11188384719340397, 0.08503614831717918, 0.08503614831717918, 0.0554595293739872, 0.0554595293739872, 0.02414830286854793, 0.02414830286854793],
  [0.1691423829631436, 0.1691423829631436, 0.16427648374583273, 0.16427648374583273, 0.15468467512626524, 0.15468467512626524, 0.14064291467065065, 0.14064291467065065, 0.12255520671147846, 0.12255520671147846, 0.10094204410628717, 0.10094204410628717, 0.07642573025488905, 0.07642573025488905, 0.0497145488949698, 0.0497145488949698, 0.02161601352648331, 0.02161601352648331],
  [0.1610544498487837, 0.15896884339395434, 0.15896884339395434, 0.15276604206585967, 0.15276604206585967, 0.1426067021736066, 0.1426067021736066, 0.12875396253933621, 0.12875396253933621, 0.11156664554733399, 0.11156664554733399, 0.09149002162245, 0.09149002162245, 0.06904454273764123, 0.06904454273764123, 0.0448142267656996, 0.0448142267656996, 0.019461788229726478, 0.019461788229726478],
  [0.15275338713072584, 0.15275338713072584, 0.14917298647260374, 0.14917298647260374, 0.14209610931838204, 0.14209610931838204, 0.13168863844917664, 0.13168863844917664, 0.11819453196151841, 0.11819453196151841, 0.10193011981724044, 0.10193011981724044, 0.08327674157670475, 0.08327674157670475, 0.06267204833410907, 0.06267204833410907, 0.04060142980038694, 0.04060142980038694, 0.017614007139152118, 0.017614007139152118],
  [0.14608113364969041, 0.14452440398997005, 0.14452440398997005, 0.13988739479107315, 0.13988739479107315, 0.13226893863333747, 0.13226893863333747, 0.12183141605372853, 0.12183141605372853, 0.10879729916714838, 0.10879729916714838, 0.09344442345603386, 0.09344442345603386, 0.0761001136283793, 0.0761001136283793, 0.057134425426857205, 0.057134425426857205, 0.036953789770852494, 0.036953789770852494, 0.016017228257774335, 0.016017228257774335],
  [0.13925187285563198, 0.13925187285563198, 0.13654149834601517, 0.13654149834601517, 0.13117350478706238, 0.13117350478706238, 0.12325237681051242, 0.12325237681051242, 0.11293229608053922, 0.11293229608053922, 0.10041414444288096, 0.10041414444288096, 0.08594160621706773, 0.08594160621706773, 0.06979646842452049, 0.06979646842452049, 0.052293335152683286, 0.052293335152683286, 0.03377490158481415, 0.03377490158481415, 0.0146279952982722, 0.0146279952982722],
  [0.13365457218610619, 0.1324620394046966, 0.1324620394046966, 0.12890572218808216, 0.12890572218808216, 0.12304908430672953, 0.12304908430672953, 0.11499664022241136, 0.11499664022241136, 0.10489209146454141, 0.10489209146454141, 0.09291576606003515, 0.09291576606003515, 0.07928141177671895, 0.07928141177671895, 0.06423242140852585, 0.06423242140852585, 0.04803767173108467, 0.04803767173108467, 0.030988005856979445, 0.030988005856979445, 0.013411859487141771, 0.013411859487141771],
  [0.12793819534675216, 0.12793819534675216, 0.1258374563468283, 0.1258374563468283, 0.12167047292780339, 0.12167047292780339, 0.1155056680537256, 0.1155056680537256, 0.10744427011596563, 0.10744427011596563, 0.09761865210411388, 0.09761865210411388, 0.08619016153195327, 0.08619016153195327, 0.0733464814110803, 0.0733464814110803, 0.05929858491543678, 0.05929858491543678, 0.04427743881741981, 0.04427743881741981, 0.028531388628933663, 0.028531388628933663, 0.0123412297999872, 0.0123412297999872]
];
var binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
function binomials(n, k) {
  return binomialCoefficients[n][k];
}
function getDerivative(derivative, t, vs) {
  var n = vs.length - 1, _vs, value, k;
  if (n === 0) {
    return 0;
  }
  if (derivative === 0) {
    value = 0;
    for (k = 0; k <= n; k++) {
      value += binomials(n, k) * Math.pow(1 - t, n - k) * Math.pow(t, k) * vs[k];
    }
    return value;
  } else {
    _vs = new Array(n);
    for (k = 0; k < n; k++) {
      _vs[k] = n * (vs[k + 1] - vs[k]);
    }
    return getDerivative(derivative - 1, t, _vs);
  }
}
function B(xs, ys, t) {
  var xbase = getDerivative(1, t, xs);
  var ybase = getDerivative(1, t, ys);
  var combined = xbase * xbase + ybase * ybase;
  return Math.sqrt(combined);
}
function getCubicArcLength(xs, ys, t) {
  var z, sum, i, correctedT;
  if (t === void 0) {
    t = 1;
  }
  var n = 20;
  z = t / 2;
  sum = 0;
  for (i = 0; i < n; i++) {
    correctedT = z * tValues[n][i] + z;
    sum += cValues[n][i] * B(xs, ys, correctedT);
  }
  return z * sum;
}
var TAU = Math.PI * 2;
function unit_vector_angle(ux, uy, vx, vy) {
  var sign2 = ux * vy - uy * vx < 0 ? -1 : 1;
  var dot = ux * vx + uy * vy;
  if (dot > 1) {
    dot = 1;
  }
  if (dot < -1) {
    dot = -1;
  }
  return sign2 * Math.acos(dot);
}
function get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi) {
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;
  var rx_sq = rx * rx;
  var ry_sq = ry * ry;
  var x1p_sq = x1p * x1p;
  var y1p_sq = y1p * y1p;
  var radicant = rx_sq * ry_sq - rx_sq * y1p_sq - ry_sq * x1p_sq;
  if (radicant < 0) {
    radicant = 0;
  }
  radicant /= rx_sq * y1p_sq + ry_sq * x1p_sq;
  radicant = Math.sqrt(radicant) * (fa === fs ? -1 : 1);
  var cxp = radicant * rx / ry * y1p;
  var cyp = radicant * -ry / rx * x1p;
  var cx = cos_phi * cxp - sin_phi * cyp + (x1 + x2) / 2;
  var cy = sin_phi * cxp + cos_phi * cyp + (y1 + y2) / 2;
  var v1x = (x1p - cxp) / rx;
  var v1y = (y1p - cyp) / ry;
  var v2x = (-x1p - cxp) / rx;
  var v2y = (-y1p - cyp) / ry;
  var theta1 = unit_vector_angle(1, 0, v1x, v1y);
  var delta_theta = unit_vector_angle(v1x, v1y, v2x, v2y);
  if (fs === 0 && delta_theta > 0) {
    delta_theta -= TAU;
  }
  if (fs === 1 && delta_theta < 0) {
    delta_theta += TAU;
  }
  return [cx, cy, theta1, delta_theta];
}
function approximate_unit_arc(theta1, delta_theta) {
  var alpha = 4 / 3 * Math.tan(delta_theta / 4);
  var x1 = Math.cos(theta1);
  var y1 = Math.sin(theta1);
  var x2 = Math.cos(theta1 + delta_theta);
  var y2 = Math.sin(theta1 + delta_theta);
  return [x1, y1, x1 - y1 * alpha, y1 + x1 * alpha, x2 + y2 * alpha, y2 - x2 * alpha, x2, y2];
}
function a2c2(x1, y1, rx, ry, phi, fa, fs, x2, y2) {
  var sin_phi = Math.sin(phi * TAU / 360);
  var cos_phi = Math.cos(phi * TAU / 360);
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;
  if (x1p === 0 && y1p === 0) {
    return [];
  }
  if (rx === 0 || ry === 0) {
    return [];
  }
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  var lambda = x1p * x1p / (rx * rx) + y1p * y1p / (ry * ry);
  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }
  var cc = get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);
  var result = [];
  var theta1 = cc[2];
  var delta_theta = cc[3];
  var segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU / 4)), 1);
  delta_theta /= segments;
  for (var i = 0; i < segments; i++) {
    result.push(approximate_unit_arc(theta1, delta_theta));
    theta1 += delta_theta;
  }
  return result.map(function(curve) {
    for (var i2 = 0; i2 < curve.length; i2 += 2) {
      var x = curve[i2 + 0];
      var y = curve[i2 + 1];
      x *= rx;
      y *= ry;
      var xp = cos_phi * x - sin_phi * y;
      var yp = sin_phi * x + cos_phi * y;
      curve[i2 + 0] = xp + cc[0];
      curve[i2 + 1] = yp + cc[1];
    }
    return curve;
  });
}
function Arc(x0, y0, rx, ry, xAxisRotate, LargeArcFlag, SweepFlag, x, y) {
  return new Arc$1(x0, y0, rx, ry, xAxisRotate, LargeArcFlag, SweepFlag, x, y);
}
function Arc$1(x0, y0, rx, ry, xAxisRotate, LargeArcFlag, SweepFlag, x, y) {
  var length2 = 0;
  var partialLengths = [];
  var curves = [];
  var res = a2c2(x0, y0, rx, ry, xAxisRotate, LargeArcFlag, SweepFlag, x, y);
  res.forEach(function(d) {
    var curve = new Bezier(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7]);
    var curveLength = curve.getTotalLength();
    length2 += curveLength;
    partialLengths.push(curveLength);
    curves.push(curve);
  });
  this.length = length2;
  this.partialLengths = partialLengths;
  this.curves = curves;
}
Arc$1.prototype = {
  constructor: Arc$1,
  init: function() {
  },
  getTotalLength: function() {
    return this.length;
  },
  getPointAtLength: function(fractionLength) {
    if (fractionLength < 0) {
      fractionLength = 0;
    } else if (fractionLength > this.length) {
      fractionLength = this.length;
    }
    var i = this.partialLengths.length - 1;
    while (this.partialLengths[i] >= fractionLength && this.partialLengths[i] > 0) {
      i--;
    }
    if (i < this.partialLengths.length - 1) {
      i++;
    }
    var lengthOffset = 0;
    for (var j = 0; j < i; j++) {
      lengthOffset += this.partialLengths[j];
    }
    return this.curves[i].getPointAtLength(fractionLength - lengthOffset);
  },
  getTangentAtLength: function(fractionLength) {
    if (fractionLength < 0) {
      fractionLength = 0;
    } else if (fractionLength > this.length) {
      fractionLength = this.length;
    }
    var i = this.partialLengths.length - 1;
    while (this.partialLengths[i] >= fractionLength && this.partialLengths[i] > 0) {
      i--;
    }
    if (i < this.partialLengths.length - 1) {
      i++;
    }
    var lengthOffset = 0;
    for (var j = 0; j < i; j++) {
      lengthOffset += this.partialLengths[j];
    }
    return this.curves[i].getTangentAtLength(fractionLength - lengthOffset);
  },
  getPropertiesAtLength: function(fractionLength) {
    var tangent = this.getTangentAtLength(fractionLength);
    var point = this.getPointAtLength(fractionLength);
    return { x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y };
  }
};
function LinearPosition(x0, x1, y0, y1) {
  return new LinearPosition$1(x0, x1, y0, y1);
}
function LinearPosition$1(x0, x1, y0, y1) {
  this.x0 = x0;
  this.x1 = x1;
  this.y0 = y0;
  this.y1 = y1;
}
LinearPosition$1.prototype.getTotalLength = function() {
  return Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2));
};
LinearPosition$1.prototype.getPointAtLength = function(pos) {
  var fraction = pos / Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2));
  var newDeltaX = (this.x1 - this.x0) * fraction;
  var newDeltaY = (this.y1 - this.y0) * fraction;
  return { x: this.x0 + newDeltaX, y: this.y0 + newDeltaY };
};
LinearPosition$1.prototype.getTangentAtLength = function() {
  var module = Math.sqrt((this.x1 - this.x0) * (this.x1 - this.x0) + (this.y1 - this.y0) * (this.y1 - this.y0));
  return { x: (this.x1 - this.x0) / module, y: (this.y1 - this.y0) / module };
};
LinearPosition$1.prototype.getPropertiesAtLength = function(pos) {
  var point = this.getPointAtLength(pos);
  var tangent = this.getTangentAtLength();
  return { x: point.x, y: point.y, tangentX: tangent.x, tangentY: tangent.y };
};
function svgPathProperties(svgString) {
  var length2 = 0;
  var partial_lengths = [];
  var functions = [];
  function svgProperties(string) {
    if (!string) {
      return null;
    }
    var parsed = parse$1(string);
    var cur = [0, 0];
    var prev_point = [0, 0];
    var curve;
    var ringStart;
    for (var i = 0; i < parsed.length; i++) {
      if (parsed[i][0] === "M") {
        cur = [parsed[i][1], parsed[i][2]];
        ringStart = [cur[0], cur[1]];
        functions.push(null);
      } else if (parsed[i][0] === "m") {
        cur = [parsed[i][1] + cur[0], parsed[i][2] + cur[1]];
        ringStart = [cur[0], cur[1]];
        functions.push(null);
      } else if (parsed[i][0] === "L") {
        length2 = length2 + Math.sqrt(Math.pow(cur[0] - parsed[i][1], 2) + Math.pow(cur[1] - parsed[i][2], 2));
        functions.push(new LinearPosition(cur[0], parsed[i][1], cur[1], parsed[i][2]));
        cur = [parsed[i][1], parsed[i][2]];
      } else if (parsed[i][0] === "l") {
        length2 = length2 + Math.sqrt(Math.pow(parsed[i][1], 2) + Math.pow(parsed[i][2], 2));
        functions.push(new LinearPosition(cur[0], parsed[i][1] + cur[0], cur[1], parsed[i][2] + cur[1]));
        cur = [parsed[i][1] + cur[0], parsed[i][2] + cur[1]];
      } else if (parsed[i][0] === "H") {
        length2 = length2 + Math.abs(cur[0] - parsed[i][1]);
        functions.push(new LinearPosition(cur[0], parsed[i][1], cur[1], cur[1]));
        cur[0] = parsed[i][1];
      } else if (parsed[i][0] === "h") {
        length2 = length2 + Math.abs(parsed[i][1]);
        functions.push(new LinearPosition(cur[0], cur[0] + parsed[i][1], cur[1], cur[1]));
        cur[0] = parsed[i][1] + cur[0];
      } else if (parsed[i][0] === "V") {
        length2 = length2 + Math.abs(cur[1] - parsed[i][1]);
        functions.push(new LinearPosition(cur[0], cur[0], cur[1], parsed[i][1]));
        cur[1] = parsed[i][1];
      } else if (parsed[i][0] === "v") {
        length2 = length2 + Math.abs(parsed[i][1]);
        functions.push(new LinearPosition(cur[0], cur[0], cur[1], cur[1] + parsed[i][1]));
        cur[1] = parsed[i][1] + cur[1];
      } else if (parsed[i][0] === "z" || parsed[i][0] === "Z") {
        length2 = length2 + Math.sqrt(Math.pow(ringStart[0] - cur[0], 2) + Math.pow(ringStart[1] - cur[1], 2));
        functions.push(new LinearPosition(cur[0], ringStart[0], cur[1], ringStart[1]));
        cur = [ringStart[0], ringStart[1]];
      } else if (parsed[i][0] === "C") {
        curve = new Bezier(cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4], parsed[i][5], parsed[i][6]);
        length2 = length2 + curve.getTotalLength();
        cur = [parsed[i][5], parsed[i][6]];
        functions.push(curve);
      } else if (parsed[i][0] === "c") {
        curve = new Bezier(cur[0], cur[1], cur[0] + parsed[i][1], cur[1] + parsed[i][2], cur[0] + parsed[i][3], cur[1] + parsed[i][4], cur[0] + parsed[i][5], cur[1] + parsed[i][6]);
        length2 = length2 + curve.getTotalLength();
        cur = [parsed[i][5] + cur[0], parsed[i][6] + cur[1]];
        functions.push(curve);
      } else if (parsed[i][0] === "S") {
        if (i > 0 && ["C", "c", "S", "s"].indexOf(parsed[i - 1][0]) > -1) {
          curve = new Bezier(cur[0], cur[1], 2 * cur[0] - parsed[i - 1][parsed[i - 1].length - 4], 2 * cur[1] - parsed[i - 1][parsed[i - 1].length - 3], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4]);
        } else {
          curve = new Bezier(cur[0], cur[1], cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4]);
        }
        length2 = length2 + curve.getTotalLength();
        cur = [parsed[i][3], parsed[i][4]];
        functions.push(curve);
      } else if (parsed[i][0] === "s") {
        if (i > 0 && ["C", "c", "S", "s"].indexOf(parsed[i - 1][0]) > -1) {
          curve = new Bezier(cur[0], cur[1], cur[0] + curve.d.x - curve.c.x, cur[1] + curve.d.y - curve.c.y, cur[0] + parsed[i][1], cur[1] + parsed[i][2], cur[0] + parsed[i][3], cur[1] + parsed[i][4]);
        } else {
          curve = new Bezier(cur[0], cur[1], cur[0], cur[1], cur[0] + parsed[i][1], cur[1] + parsed[i][2], cur[0] + parsed[i][3], cur[1] + parsed[i][4]);
        }
        length2 = length2 + curve.getTotalLength();
        cur = [parsed[i][3] + cur[0], parsed[i][4] + cur[1]];
        functions.push(curve);
      } else if (parsed[i][0] === "Q") {
        if (cur[0] != parsed[i][1] && cur[1] != parsed[i][2]) {
          curve = new Bezier(cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4]);
        } else {
          curve = new LinearPosition(parsed[i][1], parsed[i][3], parsed[i][2], parsed[i][4]);
        }
        length2 = length2 + curve.getTotalLength();
        functions.push(curve);
        cur = [parsed[i][3], parsed[i][4]];
        prev_point = [parsed[i][1], parsed[i][2]];
      } else if (parsed[i][0] === "q") {
        if (!(parsed[i][1] == 0 && parsed[i][2] == 0)) {
          curve = new Bezier(cur[0], cur[1], cur[0] + parsed[i][1], cur[1] + parsed[i][2], cur[0] + parsed[i][3], cur[1] + parsed[i][4]);
        } else {
          curve = new LinearPosition(cur[0] + parsed[i][1], cur[0] + parsed[i][3], cur[1] + parsed[i][2], cur[1] + parsed[i][4]);
        }
        length2 = length2 + curve.getTotalLength();
        prev_point = [cur[0] + parsed[i][1], cur[1] + parsed[i][2]];
        cur = [parsed[i][3] + cur[0], parsed[i][4] + cur[1]];
        functions.push(curve);
      } else if (parsed[i][0] === "T") {
        if (i > 0 && ["Q", "q", "T", "t"].indexOf(parsed[i - 1][0]) > -1) {
          curve = new Bezier(cur[0], cur[1], 2 * cur[0] - prev_point[0], 2 * cur[1] - prev_point[1], parsed[i][1], parsed[i][2]);
        } else {
          curve = new LinearPosition(cur[0], parsed[i][1], cur[1], parsed[i][2]);
        }
        functions.push(curve);
        length2 = length2 + curve.getTotalLength();
        prev_point = [2 * cur[0] - prev_point[0], 2 * cur[1] - prev_point[1]];
        cur = [parsed[i][1], parsed[i][2]];
      } else if (parsed[i][0] === "t") {
        if (i > 0 && ["Q", "q", "T", "t"].indexOf(parsed[i - 1][0]) > -1) {
          curve = new Bezier(cur[0], cur[1], 2 * cur[0] - prev_point[0], 2 * cur[1] - prev_point[1], cur[0] + parsed[i][1], cur[1] + parsed[i][2]);
        } else {
          curve = new LinearPosition(cur[0], cur[0] + parsed[i][1], cur[1], cur[1] + parsed[i][2]);
        }
        length2 = length2 + curve.getTotalLength();
        prev_point = [2 * cur[0] - prev_point[0], 2 * cur[1] - prev_point[1]];
        cur = [parsed[i][1] + cur[0], parsed[i][2] + cur[0]];
        functions.push(curve);
      } else if (parsed[i][0] === "A") {
        curve = new Arc(cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4], parsed[i][5], parsed[i][6], parsed[i][7]);
        length2 = length2 + curve.getTotalLength();
        cur = [parsed[i][6], parsed[i][7]];
        functions.push(curve);
      } else if (parsed[i][0] === "a") {
        curve = new Arc(cur[0], cur[1], parsed[i][1], parsed[i][2], parsed[i][3], parsed[i][4], parsed[i][5], cur[0] + parsed[i][6], cur[1] + parsed[i][7]);
        length2 = length2 + curve.getTotalLength();
        cur = [cur[0] + parsed[i][6], cur[1] + parsed[i][7]];
        functions.push(curve);
      }
      partial_lengths.push(length2);
    }
    return svgProperties;
  }
  svgProperties.getTotalLength = function() {
    return length2;
  };
  svgProperties.getPointAtLength = function(fractionLength) {
    var fractionPart = getPartAtLength(fractionLength);
    return functions[fractionPart.i].getPointAtLength(fractionPart.fraction);
  };
  svgProperties.getTangentAtLength = function(fractionLength) {
    var fractionPart = getPartAtLength(fractionLength);
    return functions[fractionPart.i].getTangentAtLength(fractionPart.fraction);
  };
  svgProperties.getPropertiesAtLength = function(fractionLength) {
    var fractionPart = getPartAtLength(fractionLength);
    return functions[fractionPart.i].getPropertiesAtLength(fractionPart.fraction);
  };
  var getPartAtLength = function(fractionLength) {
    if (fractionLength < 0) {
      fractionLength = 0;
    } else if (fractionLength > length2) {
      fractionLength = length2;
    }
    var i = partial_lengths.length - 1;
    while (partial_lengths[i] >= fractionLength && partial_lengths[i] > 0) {
      i--;
    }
    i++;
    return { fraction: fractionLength - partial_lengths[i - 1], i };
  };
  return svgProperties(svgString);
}
function distance(a, b) {
  return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));
}
function pointAlong(a, b, pct) {
  return [a[0] + (b[0] - a[0]) * pct, a[1] + (b[1] - a[1]) * pct];
}
function samePoint(a, b) {
  return distance(a, b) < 1e-9;
}
function interpolatePoints(a, b, string) {
  let interpolators = a.map((d, i) => interpolatePoint(d, b[i]));
  return function(t) {
    let values = interpolators.map((fn) => fn(t));
    return string ? toPathString(values) : values;
  };
}
function interpolatePoint(a, b) {
  return function(t) {
    return a.map((d, i) => d + t * (b[i] - d));
  };
}
function isFiniteNumber(number2) {
  return typeof number2 === "number" && isFinite(number2);
}
function polygonCentroid(polygon) {
  return nonZeroArea(polygon) ? d3Centroid(polygon) : [
    (polygon[0][0] + polygon[polygon.length - 1][0]) / 2,
    (polygon[0][1] + polygon[polygon.length - 1][1]) / 2
  ];
}
function nonZeroArea(polygon) {
  for (let i = 0; i < polygon.length - 2; i++) {
    let a = polygon[i], b = polygon[i + 1], c = polygon[i + 2];
    if (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) {
      return true;
    }
  }
  return false;
}
const INVALID_INPUT = `All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).
Example valid ways of supplying a shape would be:
[[0, 0], [10, 0], [10, 10]]
"M0,0 L10,0 L10,10Z"
`;
const INVALID_INPUT_ALL = `flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).`;
function parse(str) {
  return new svgpath(str).abs();
}
function split(parsed) {
  return parsed.toString().split("M").map((d, i) => {
    d = d.trim();
    return i && d ? "M" + d : d;
  }).filter((d) => d);
}
function toPathString(ring) {
  return "M" + ring.join("L") + "Z";
}
function pathStringToRing(str, maxSegmentLength) {
  let parsed = parse(str);
  return exactRing(parsed) || approximateRing(parsed, maxSegmentLength);
}
function exactRing(parsed) {
  let segments = parsed.segments || [], ring = [];
  if (!segments.length || segments[0][0] !== "M") {
    return false;
  }
  for (let i = 0; i < segments.length; i++) {
    let [command, x, y] = segments[i];
    if (command === "M" && i || command === "Z") {
      break;
    } else if (command === "M" || command === "L") {
      ring.push([x, y]);
    } else if (command === "H") {
      ring.push([x, ring[ring.length - 1][1]]);
    } else if (command === "V") {
      ring.push([ring[ring.length - 1][0], x]);
    } else {
      return false;
    }
  }
  return ring.length ? { ring } : false;
}
function approximateRing(parsed, maxSegmentLength) {
  let ringPath = split(parsed)[0], ring = [], len, m, numPoints = 3;
  if (!ringPath) {
    throw new TypeError(INVALID_INPUT);
  }
  m = measure(ringPath);
  len = m.getTotalLength();
  if (maxSegmentLength && isFiniteNumber(maxSegmentLength) && maxSegmentLength > 0) {
    numPoints = Math.max(numPoints, Math.ceil(len / maxSegmentLength));
  }
  for (let i = 0; i < numPoints; i++) {
    let p = m.getPointAtLength(len * i / numPoints);
    ring.push([p.x, p.y]);
  }
  return {
    ring,
    skipBisect: true
  };
}
function measure(d) {
  if (typeof window !== "undefined" && window && window.document) {
    try {
      let path = window.document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttributeNS(null, "d", d);
      return path;
    } catch (e) {
    }
  }
  return svgPathProperties(d);
}
function addPoints(ring, numPoints) {
  const desiredLength = ring.length + numPoints, step = polygonLength(ring) / numPoints;
  let i = 0, cursor = 0, insertAt = step / 2;
  while (ring.length < desiredLength) {
    let a = ring[i], b = ring[(i + 1) % ring.length], segment2 = distance(a, b);
    if (insertAt <= cursor + segment2) {
      ring.splice(i + 1, 0, segment2 ? pointAlong(a, b, (insertAt - cursor) / segment2) : a.slice(0));
      insertAt += step;
      continue;
    }
    cursor += segment2;
    i++;
  }
}
function bisect(ring, maxSegmentLength = Infinity) {
  for (let i = 0; i < ring.length; i++) {
    let a = ring[i], b = i === ring.length - 1 ? ring[0] : ring[i + 1];
    while (distance(a, b) > maxSegmentLength) {
      b = pointAlong(a, b, 0.5);
      ring.splice(i + 1, 0, b);
    }
  }
}
function normalizeRing(ring, maxSegmentLength) {
  let points, area2, skipBisect;
  if (typeof ring === "string") {
    let converted = pathStringToRing(ring, maxSegmentLength);
    ring = converted.ring;
    skipBisect = converted.skipBisect;
  } else if (!Array.isArray(ring)) {
    throw new TypeError(INVALID_INPUT);
  }
  points = ring.slice(0);
  if (!validRing(points)) {
    throw new TypeError(INVALID_INPUT);
  }
  if (points.length > 1 && samePoint(points[0], points[points.length - 1])) {
    points.pop();
  }
  area2 = polygonArea(points);
  if (area2 > 0) {
    points.reverse();
  }
  if (!skipBisect && maxSegmentLength && isFiniteNumber(maxSegmentLength) && maxSegmentLength > 0) {
    bisect(points, maxSegmentLength);
  }
  return points;
}
function validRing(ring) {
  return ring.every(function(point) {
    return Array.isArray(point) && point.length >= 2 && isFiniteNumber(point[0]) && isFiniteNumber(point[1]);
  });
}
function rotate(ring, vs) {
  let len = ring.length, min = Infinity, bestOffset, sumOfSquares, spliced;
  for (let offset = 0; offset < len; offset++) {
    sumOfSquares = 0;
    vs.forEach(function(p, i) {
      let d = distance(ring[(offset + i) % len], p);
      sumOfSquares += d * d;
    });
    if (sumOfSquares < min) {
      min = sumOfSquares;
      bestOffset = offset;
    }
  }
  if (bestOffset) {
    spliced = ring.splice(0, bestOffset);
    ring.splice(ring.length, 0, ...spliced);
  }
}
function interpolateRing(fromRing, toRing, string) {
  let diff;
  diff = fromRing.length - toRing.length;
  addPoints(fromRing, diff < 0 ? diff * -1 : 0);
  addPoints(toRing, diff > 0 ? diff : 0);
  rotate(fromRing, toRing);
  return interpolatePoints(fromRing, toRing, string);
}
var earcut$1 = { exports: {} };
earcut$1.exports = earcut;
earcut$1.exports.default = earcut;
function earcut(data2, holeIndices, dim) {
  dim = dim || 2;
  var hasHoles = holeIndices && holeIndices.length, outerLen = hasHoles ? holeIndices[0] * dim : data2.length, outerNode = linkedList(data2, 0, outerLen, dim, true), triangles = [];
  if (!outerNode || outerNode.next === outerNode.prev)
    return triangles;
  var minX, minY, maxX, maxY, x, y, invSize;
  if (hasHoles)
    outerNode = eliminateHoles(data2, holeIndices, outerNode, dim);
  if (data2.length > 80 * dim) {
    minX = maxX = data2[0];
    minY = maxY = data2[1];
    for (var i = dim; i < outerLen; i += dim) {
      x = data2[i];
      y = data2[i + 1];
      if (x < minX)
        minX = x;
      if (y < minY)
        minY = y;
      if (x > maxX)
        maxX = x;
      if (y > maxY)
        maxY = y;
    }
    invSize = Math.max(maxX - minX, maxY - minY);
    invSize = invSize !== 0 ? 1 / invSize : 0;
  }
  earcutLinked(outerNode, triangles, dim, minX, minY, invSize);
  return triangles;
}
function linkedList(data2, start, end, dim, clockwise) {
  var i, last;
  if (clockwise === signedArea(data2, start, end, dim) > 0) {
    for (i = start; i < end; i += dim)
      last = insertNode(i, data2[i], data2[i + 1], last);
  } else {
    for (i = end - dim; i >= start; i -= dim)
      last = insertNode(i, data2[i], data2[i + 1], last);
  }
  if (last && equals(last, last.next)) {
    removeNode(last);
    last = last.next;
  }
  return last;
}
function filterPoints(start, end) {
  if (!start)
    return start;
  if (!end)
    end = start;
  var p = start, again;
  do {
    again = false;
    if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
      removeNode(p);
      p = end = p.prev;
      if (p === p.next)
        break;
      again = true;
    } else {
      p = p.next;
    }
  } while (again || p !== end);
  return end;
}
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
  if (!ear)
    return;
  if (!pass && invSize)
    indexCurve(ear, minX, minY, invSize);
  var stop = ear, prev, next;
  while (ear.prev !== ear.next) {
    prev = ear.prev;
    next = ear.next;
    if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
      triangles.push(prev.i / dim);
      triangles.push(ear.i / dim);
      triangles.push(next.i / dim);
      removeNode(ear);
      ear = next.next;
      stop = next.next;
      continue;
    }
    ear = next;
    if (ear === stop) {
      if (!pass) {
        earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
      } else if (pass === 1) {
        ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
        earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
      } else if (pass === 2) {
        splitEarcut(ear, triangles, dim, minX, minY, invSize);
      }
      break;
    }
  }
}
function isEar(ear) {
  var a = ear.prev, b = ear, c = ear.next;
  if (area(a, b, c) >= 0)
    return false;
  var p = ear.next.next;
  while (p !== ear.prev) {
    if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
      return false;
    p = p.next;
  }
  return true;
}
function isEarHashed(ear, minX, minY, invSize) {
  var a = ear.prev, b = ear, c = ear.next;
  if (area(a, b, c) >= 0)
    return false;
  var minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x, minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y, maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x, maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;
  var minZ = zOrder(minTX, minTY, minX, minY, invSize), maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);
  var p = ear.prevZ, n = ear.nextZ;
  while (p && p.z >= minZ && n && n.z <= maxZ) {
    if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
      return false;
    p = p.prevZ;
    if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && area(n.prev, n, n.next) >= 0)
      return false;
    n = n.nextZ;
  }
  while (p && p.z >= minZ) {
    if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
      return false;
    p = p.prevZ;
  }
  while (n && n.z <= maxZ) {
    if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && area(n.prev, n, n.next) >= 0)
      return false;
    n = n.nextZ;
  }
  return true;
}
function cureLocalIntersections(start, triangles, dim) {
  var p = start;
  do {
    var a = p.prev, b = p.next.next;
    if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
      triangles.push(a.i / dim);
      triangles.push(p.i / dim);
      triangles.push(b.i / dim);
      removeNode(p);
      removeNode(p.next);
      p = start = b;
    }
    p = p.next;
  } while (p !== start);
  return filterPoints(p);
}
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
  var a = start;
  do {
    var b = a.next.next;
    while (b !== a.prev) {
      if (a.i !== b.i && isValidDiagonal(a, b)) {
        var c = splitPolygon(a, b);
        a = filterPoints(a, a.next);
        c = filterPoints(c, c.next);
        earcutLinked(a, triangles, dim, minX, minY, invSize);
        earcutLinked(c, triangles, dim, minX, minY, invSize);
        return;
      }
      b = b.next;
    }
    a = a.next;
  } while (a !== start);
}
function eliminateHoles(data2, holeIndices, outerNode, dim) {
  var queue = [], i, len, start, end, list;
  for (i = 0, len = holeIndices.length; i < len; i++) {
    start = holeIndices[i] * dim;
    end = i < len - 1 ? holeIndices[i + 1] * dim : data2.length;
    list = linkedList(data2, start, end, dim, false);
    if (list === list.next)
      list.steiner = true;
    queue.push(getLeftmost(list));
  }
  queue.sort(compareX);
  for (i = 0; i < queue.length; i++) {
    outerNode = eliminateHole(queue[i], outerNode);
    outerNode = filterPoints(outerNode, outerNode.next);
  }
  return outerNode;
}
function compareX(a, b) {
  return a.x - b.x;
}
function eliminateHole(hole, outerNode) {
  var bridge = findHoleBridge(hole, outerNode);
  if (!bridge) {
    return outerNode;
  }
  var bridgeReverse = splitPolygon(bridge, hole);
  var filteredBridge = filterPoints(bridge, bridge.next);
  filterPoints(bridgeReverse, bridgeReverse.next);
  return outerNode === bridge ? filteredBridge : outerNode;
}
function findHoleBridge(hole, outerNode) {
  var p = outerNode, hx = hole.x, hy = hole.y, qx = -Infinity, m;
  do {
    if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
      var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
      if (x <= hx && x > qx) {
        qx = x;
        if (x === hx) {
          if (hy === p.y)
            return p;
          if (hy === p.next.y)
            return p.next;
        }
        m = p.x < p.next.x ? p : p.next;
      }
    }
    p = p.next;
  } while (p !== outerNode);
  if (!m)
    return null;
  if (hx === qx)
    return m;
  var stop = m, mx = m.x, my = m.y, tanMin = Infinity, tan;
  p = m;
  do {
    if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
      tan = Math.abs(hy - p.y) / (hx - p.x);
      if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
        m = p;
        tanMin = tan;
      }
    }
    p = p.next;
  } while (p !== stop);
  return m;
}
function sectorContainsSector(m, p) {
  return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}
function indexCurve(start, minX, minY, invSize) {
  var p = start;
  do {
    if (p.z === null)
      p.z = zOrder(p.x, p.y, minX, minY, invSize);
    p.prevZ = p.prev;
    p.nextZ = p.next;
    p = p.next;
  } while (p !== start);
  p.prevZ.nextZ = null;
  p.prevZ = null;
  sortLinked(p);
}
function sortLinked(list) {
  var i, p, q, e, tail, numMerges, pSize, qSize, inSize = 1;
  do {
    p = list;
    list = null;
    tail = null;
    numMerges = 0;
    while (p) {
      numMerges++;
      q = p;
      pSize = 0;
      for (i = 0; i < inSize; i++) {
        pSize++;
        q = q.nextZ;
        if (!q)
          break;
      }
      qSize = inSize;
      while (pSize > 0 || qSize > 0 && q) {
        if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
          e = p;
          p = p.nextZ;
          pSize--;
        } else {
          e = q;
          q = q.nextZ;
          qSize--;
        }
        if (tail)
          tail.nextZ = e;
        else
          list = e;
        e.prevZ = tail;
        tail = e;
      }
      p = q;
    }
    tail.nextZ = null;
    inSize *= 2;
  } while (numMerges > 1);
  return list;
}
function zOrder(x, y, minX, minY, invSize) {
  x = 32767 * (x - minX) * invSize;
  y = 32767 * (y - minY) * invSize;
  x = (x | x << 8) & 16711935;
  x = (x | x << 4) & 252645135;
  x = (x | x << 2) & 858993459;
  x = (x | x << 1) & 1431655765;
  y = (y | y << 8) & 16711935;
  y = (y | y << 4) & 252645135;
  y = (y | y << 2) & 858993459;
  y = (y | y << 1) & 1431655765;
  return x | y << 1;
}
function getLeftmost(start) {
  var p = start, leftmost = start;
  do {
    if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y)
      leftmost = p;
    p = p.next;
  } while (p !== start);
  return leftmost;
}
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
  return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}
function isValidDiagonal(a, b) {
  return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && (area(a.prev, a, b.prev) || area(a, b.prev, b)) || equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0);
}
function area(p, q, r) {
  return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}
function equals(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}
function intersects(p1, q1, p2, q2) {
  var o1 = sign(area(p1, q1, p2));
  var o2 = sign(area(p1, q1, q2));
  var o3 = sign(area(p2, q2, p1));
  var o4 = sign(area(p2, q2, q1));
  if (o1 !== o2 && o3 !== o4)
    return true;
  if (o1 === 0 && onSegment(p1, p2, q1))
    return true;
  if (o2 === 0 && onSegment(p1, q2, q1))
    return true;
  if (o3 === 0 && onSegment(p2, p1, q2))
    return true;
  if (o4 === 0 && onSegment(p2, q1, q2))
    return true;
  return false;
}
function onSegment(p, q, r) {
  return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}
function sign(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
}
function intersectsPolygon(a, b) {
  var p = a;
  do {
    if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b))
      return true;
    p = p.next;
  } while (p !== a);
  return false;
}
function locallyInside(a, b) {
  return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}
function middleInside(a, b) {
  var p = a, inside = false, px = (a.x + b.x) / 2, py = (a.y + b.y) / 2;
  do {
    if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x)
      inside = !inside;
    p = p.next;
  } while (p !== a);
  return inside;
}
function splitPolygon(a, b) {
  var a2 = new Node(a.i, a.x, a.y), b2 = new Node(b.i, b.x, b.y), an = a.next, bp = b.prev;
  a.next = b;
  b.prev = a;
  a2.next = an;
  an.prev = a2;
  b2.next = a2;
  a2.prev = b2;
  bp.next = b2;
  b2.prev = bp;
  return b2;
}
function insertNode(i, x, y, last) {
  var p = new Node(i, x, y);
  if (!last) {
    p.prev = p;
    p.next = p;
  } else {
    p.next = last.next;
    p.prev = last;
    last.next.prev = p;
    last.next = p;
  }
  return p;
}
function removeNode(p) {
  p.next.prev = p.prev;
  p.prev.next = p.next;
  if (p.prevZ)
    p.prevZ.nextZ = p.nextZ;
  if (p.nextZ)
    p.nextZ.prevZ = p.prevZ;
}
function Node(i, x, y) {
  this.i = i;
  this.x = x;
  this.y = y;
  this.prev = null;
  this.next = null;
  this.z = null;
  this.prevZ = null;
  this.nextZ = null;
  this.steiner = false;
}
earcut.deviation = function(data2, holeIndices, dim, triangles) {
  var hasHoles = holeIndices && holeIndices.length;
  var outerLen = hasHoles ? holeIndices[0] * dim : data2.length;
  var polygonArea2 = Math.abs(signedArea(data2, 0, outerLen, dim));
  if (hasHoles) {
    for (var i = 0, len = holeIndices.length; i < len; i++) {
      var start = holeIndices[i] * dim;
      var end = i < len - 1 ? holeIndices[i + 1] * dim : data2.length;
      polygonArea2 -= Math.abs(signedArea(data2, start, end, dim));
    }
  }
  var trianglesArea = 0;
  for (i = 0; i < triangles.length; i += 3) {
    var a = triangles[i] * dim;
    var b = triangles[i + 1] * dim;
    var c = triangles[i + 2] * dim;
    trianglesArea += Math.abs((data2[a] - data2[c]) * (data2[b + 1] - data2[a + 1]) - (data2[a] - data2[b]) * (data2[c + 1] - data2[a + 1]));
  }
  return polygonArea2 === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea2) / polygonArea2);
};
function signedArea(data2, start, end, dim) {
  var sum = 0;
  for (var i = start, j = end - dim; i < end; i += dim) {
    sum += (data2[j] - data2[i]) * (data2[i + 1] + data2[j + 1]);
    j = i;
  }
  return sum;
}
earcut.flatten = function(data2) {
  var dim = data2[0][0].length, result = { vertices: [], holes: [], dimensions: dim }, holeIndex = 0;
  for (var i = 0; i < data2.length; i++) {
    for (var j = 0; j < data2[i].length; j++) {
      for (var d = 0; d < dim; d++)
        result.vertices.push(data2[i][j][d]);
    }
    if (i > 0) {
      holeIndex += data2[i - 1].length;
      result.holes.push(holeIndex);
    }
  }
  return result;
};
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function bisector(compare) {
  if (compare.length === 1)
    compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null)
        lo = 0;
      if (hi == null)
        hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0)
          lo = mid + 1;
        else
          hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null)
        lo = 0;
      if (hi == null)
        hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0)
          hi = mid;
        else
          lo = mid + 1;
      }
      return lo;
    }
  };
}
function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}
bisector(ascending);
function pieceOrder(start, end) {
  if (start.length > 8) {
    return start.map((d, i) => i);
  }
  let distances = start.map((p1) => end.map((p2) => squaredDistance(p1, p2)));
  return bestOrder(start, end, distances);
}
function bestOrder(start, end, distances) {
  let min = Infinity, best = start.map((d, i) => i);
  function permute(arr, order = [], sum = 0) {
    for (let i = 0; i < arr.length; i++) {
      let cur = arr.splice(i, 1), dist = distances[cur[0]][order.length];
      if (sum + dist < min) {
        if (arr.length) {
          permute(arr.slice(), order.concat(cur), sum + dist);
        } else {
          min = sum + dist;
          best = order.concat(cur);
        }
      }
      if (arr.length) {
        arr.splice(i, 0, cur[0]);
      }
    }
  }
  permute(best);
  return best;
}
function squaredDistance(p1, p2) {
  let d = distance(polygonCentroid(p1), polygonCentroid(p2));
  return d * d;
}
function interpolateAll(fromShapes, toShapes, { maxSegmentLength = 10, string = true, single = false } = {}) {
  if (!Array.isArray(fromShapes) || !Array.isArray(toShapes) || fromShapes.length !== toShapes.length || !fromShapes.length) {
    throw new TypeError(INVALID_INPUT_ALL);
  }
  let normalize = (s) => normalizeRing(s, maxSegmentLength), fromRings = fromShapes.map(normalize), toRings = toShapes.map(normalize), t0, t1;
  if (single) {
    if (fromShapes.every((s) => typeof s === "string")) {
      t0 = fromShapes.slice(0);
    }
    if (toShapes.every((s) => typeof s === "string")) {
      t1 = toShapes.slice(0);
    }
  } else {
    t0 = fromShapes.slice(0);
    t1 = toShapes.slice(0);
  }
  return interpolateSets(fromRings, toRings, { string, single, t0, t1, match: false });
}
function interpolateSets(fromRings, toRings, { string, single, t0, t1, match } = {}) {
  let order = match ? pieceOrder(fromRings, toRings) : fromRings.map((d, i) => i), interpolators = order.map((d, i) => interpolateRing(fromRings[d], toRings[i], string));
  if (match && Array.isArray(t0)) {
    t0 = order.map((d) => t0[d]);
  }
  if (single && string) {
    if (Array.isArray(t0)) {
      t0 = t0.join(" ");
    }
    if (Array.isArray(t1)) {
      t1 = t1.join(" ");
    }
  }
  if (single) {
    let multiInterpolator = string ? (t) => interpolators.map((fn) => fn(t)).join(" ") : (t) => interpolators.map((fn) => fn(t));
    if (string && (t0 || t1)) {
      return (t) => t < 1e-4 && t0 || 1 - t < 1e-4 && t1 || multiInterpolator(t);
    }
    return multiInterpolator;
  } else if (string) {
    t0 = Array.isArray(t0) ? t0.map((d) => typeof d === "string" && d) : [];
    t1 = Array.isArray(t1) ? t1.map((d) => typeof d === "string" && d) : [];
    return interpolators.map((fn, i) => {
      if (t0[i] || t1[i]) {
        return (t) => t < 1e-4 && t0[i] || 1 - t < 1e-4 && t1[i] || fn(t);
      }
      return fn;
    });
  }
  return interpolators;
}
const AnimatedTransitions_Chart2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  var interpolatorPaPi = interpolateAll(paths, pies, { maxSegmentLength: 4 });
  var interpolatorPiPa = interpolateAll(pies, paths, { maxSegmentLength: 4 });
  var interpolatorPiPo = interpolateAll(pies, pointsList, { maxSegmentLength: 4 });
  var interpolatorPoPi = interpolateAll(pointsList, pies, { maxSegmentLength: 4 });
  var interpolatorPoPa = interpolateAll(pointsList, paths, { maxSegmentLength: 4 });
  var interpolatorPaPo = interpolateAll(paths, pointsList, { maxSegmentLength: 4 });
  let currentInterpolator;
  let previousValue = 0;
  let firstAnimationComplete = false;
  function updateAnimationProgress() {
    if (value == 3 && previousValue == 2) {
      firstAnimationComplete = true;
      currentInterpolator = interpolatorPaPi;
    } else if (value == 2 && previousValue == 3) {
      currentInterpolator = interpolatorPiPa;
    } else if (value == 6 && previousValue == 5) {
      currentInterpolator = interpolatorPiPo;
    } else if (value == 5 && previousValue == 6) {
      currentInterpolator = interpolatorPoPi;
    } else if (value == 7 && previousValue == 6) {
      currentInterpolator = interpolatorPoPa;
    } else if (value == 6 && previousValue == 7) {
      currentInterpolator = interpolatorPaPo;
    }
    setTimeout(() => previousValue = value, 200);
  }
  let allPaths;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  {
    updateAnimationProgress();
  }
  {
    if (firstAnimationComplete) {
      allPaths.data(currentInterpolator).transition().delay(function(d, i) {
        return 100 * i;
      }).duration(1e3).attrTween("d", function(d) {
        return d;
      });
    }
  }
  return `<svg viewBox="${"-200 -200 680 400"}">${each(paths, (path, i) => {
    return `<path${add_attribute("fill", d3.schemeCategory10[i], 0)} stroke-width="${"3"}" stroke-linecap="${"round"}"${add_attribute("d", path, 0)}></path>`;
  })}</svg>`;
});
var Icon_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-1eky3f8{width:1em;height:1em;overflow:visible;transform-origin:50% 50%;transition:all 0.3s}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon;
  let rotation;
  const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
  let { name } = $$props;
  let { direction = "n" } = $$props;
  let { width = "1em" } = $$props;
  let { fill } = $$props;
  let { height = "1em" } = $$props;
  let { stroke = void 0 } = $$props;
  let { strokeWidth = void 0 } = $$props;
  if ($$props.directions === void 0 && $$bindings.directions && directions !== void 0)
    $$bindings.directions(directions);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  $$result.css.add(css$2);
  icon = feather.icons[name];
  rotation = directions.indexOf(direction) * 45;
  {
    if (icon) {
      if (stroke)
        icon.attrs["stroke"] = stroke;
      if (fill)
        icon.attrs["fill"] = fill;
      if (strokeWidth)
        icon.attrs["stroke-width"] = strokeWidth;
    }
  }
  return `${icon ? `<svg${spread([
    escape_object(icon.attrs),
    {
      style: "width: " + escape(width) + "; height: " + escape(height) + "; transform: rotate(" + escape(rotation) + "deg);"
    }
  ], { classes: "svelte-1eky3f8" })}><g><!-- HTML_TAG_START -->${icon.contents}<!-- HTML_TAG_END --></g></svg>` : ``}`;
});
var YouTube_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.video-container.svelte-1b3oixz.svelte-1b3oixz{overflow:hidden;position:relative;width:100%}.video-container.svelte-1b3oixz.svelte-1b3oixz::after{padding-top:56.25%;display:block;content:""}.video-container.svelte-1b3oixz iframe.svelte-1b3oixz{position:absolute;top:0;left:0;width:100%;height:100%}',
  map: null
};
const YouTube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { video_id } = $$props;
  if ($$props.video_id === void 0 && $$bindings.video_id && video_id !== void 0)
    $$bindings.video_id(video_id);
  $$result.css.add(css$1);
  return `<div class="${"video-container svelte-1b3oixz"}"><iframe src="${"https://www.youtube.com/embed/" + escape(video_id)}" frameborder="${"0"}" allow="${"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-1b3oixz"}"></iframe>
</div>`;
});
var AnimatedTransitions_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-1bbtai3.svelte-1bbtai3{max-width:600px;margin:0 auto}.chart-wrap.svelte-1bbtai3.svelte-1bbtai3{margin-bottom:100px}.code-box.svelte-1bbtai3.svelte-1bbtai3{box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px}ul.svelte-1bbtai3 li.svelte-1bbtai3{margin:10px}h2.svelte-1bbtai3.svelte-1bbtai3{margin-top:50px}.chart.svelte-1bbtai3.svelte-1bbtai3{position:sticky;position:-webkit-sticky;position:-moz-sticky;position:-ms-sticky;position:-o-sticky;margin-right:0px !important;padding-right:0;width:80vw;box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;min-width:300px;top:30vh;height:50vh}.text-wrapper.svelte-1bbtai3.svelte-1bbtai3{margin-right:0;padding-right:0;min-width:300px !important;width:80vw;position:relative;z-index:2;padding-bottom:100px}.text-wrapper.svelte-1bbtai3 .text.svelte-1bbtai3{margin:60vh 0 !important;padding:20px;border:none}@media all and (min-width: 700px){.chart.svelte-1bbtai3.svelte-1bbtai3{left:90%;height:80vh;top:20px;width:600px}.text-wrapper.svelte-1bbtai3.svelte-1bbtai3{margin:0;width:35vw}.text-wrapper.svelte-1bbtai3 .text.svelte-1bbtai3{border:1px gray solid}}.full-width.svelte-1bbtai3.svelte-1bbtai3{width:90vw;position:relative;left:65%;right:50%;margin-left:-50vw;margin-right:-50vw}.box.svelte-1bbtai3.svelte-1bbtai3{box-shadow:rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;align-self:flex-end;animation-duration:2s;animation-iteration-count:infinite;margin:0 auto 0 auto;transform-origin:bottom}.bounce-5.svelte-1bbtai3.svelte-1bbtai3{animation-name:svelte-1bbtai3-bounce-5;animation-timing-function:ease}@keyframes svelte-1bbtai3-bounce-5{0%{transform:scale(1, 1) translateY(0)}10%{transform:scale(1, 1) translateY(0)}30%{transform:scale(1, 1) translateY(-10px)}50%{transform:scale(1, 1) translateY(0)}57%{transform:scale(1, 1) translateY(-7px)}64%{transform:scale(1, 1) translateY(0)}100%{transform:scale(1, 1) translateY(0)}}",
  map: null
};
const AnimatedTransitions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollValue = 0;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"wrapper svelte-1bbtai3"}"><h2 class="${"svelte-1bbtai3"}">The goal</h2>
  <p class="${"r"}">In this article, I try to re-create some of the animated transitions between
    different types of charts originally found in the following YouTube video.
  </p>
  ${validate_component(YouTube, "YouTube").$$render($$result, { video_id: "vLk7mlAtEXI" }, {}, {})}

  <p>This presented the following challenges to be overcome:</p>
  <ul class="${"svelte-1bbtai3"}"><li class="${"svelte-1bbtai3"}">How to tween smoothly between different SVG elements (i.e. from Rect to
      Circle)?
    </li>
    <li class="${"svelte-1bbtai3"}">How to coordinate this across multiple bars/ circles?</li></ul>
  <p class="${"r"}">Obviously the tools I will be using will be Svelte and D3 (and I also used a
    third-party library called Flubber for SVG path manipulation. <br><br>I
    chose Flubber after a number of unsuccessful attempts (for this specific use
    case) with: polymorph-js, d3 string interpolator and a custom Svelte
    interpolator/tween; more on these failed attempts towards the end of this
    article.
  </p>

  <h2 class="${"svelte-1bbtai3"}">Demo:</h2>
  <p class="${"r"}">Before we get to the code and implementation tips, let&#39;s check out the demo:
  </p>
  <div class="${"box bounce-5 svelte-1bbtai3"}">${validate_component(Icon, "Icon").$$render($$result, {
      name: "chevrons-down",
      fill: "gray",
      width: "20px",
      height: "20px"
    }, {}, {})}
    <span>Scroll </span></div>
  <div class="${"full-width chart-wrap svelte-1bbtai3"}"><div class="${"chart svelte-1bbtai3"}">${validate_component(AnimatedTransitions_Chart2, "AnimatedTransitionsChart2").$$render($$result, { value: scrollValue }, {}, {})}</div>
    <div class="${"text-wrapper svelte-1bbtai3"}">${validate_component(Scrolly, "Scrolly").$$render($$result, { value: scrollValue }, {
      value: ($$value) => {
        scrollValue = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${each(scrollyData, (d, i) => {
          return `<div class="${["text step svelte-1bbtai3", scrollValue === i ? "active" : ""].join(" ").trim()}">${escape(d)}
          </div>`;
        })}`;
      }
    })}</div>

    </div>
  <h2 class="${"svelte-1bbtai3"}">Data</h2>
  <p>As is often the case with D3/ Animation code, how we format our data ready
    for visualization is all-important. You can find the source data (and path
    creation logic) I created for this piece <a href="${"https://github.com/visual-svelte/website/blob/main/src/data/animatedTransitions.js"}">here</a>.
  </p>
  <p>In the piece, it was actually the SVG morphing library, <a href="${"https://github.com/veltman/flubber"}">Flubber</a>, that dictated the shape of the input data. <br><br>I wanted to use
    the interpolateAll() function which takes as input two lists of paths (for
    example, a list of paths for bars and a list of paths for pies), and creates
    interpolators for each transformation. This meant writing functions for the
    creation of SVG paths that look like Rects and Circles (the Pies are already
    SVG Paths from D3)
  </p>
  <h2 class="${"svelte-1bbtai3"}">Tried and failed/ gotchas</h2>
  <ul class="${"svelte-1bbtai3"}"><li class="${"svelte-1bbtai3"}">I initially used polymorph-js, and created a custom interpolator,
      similarly to how it is described in <a href="${"https://gist.github.com/Cleecanth/342eaa59c7738fc687043eb224814c02"}">this code</a>. Whilst this worked well for one SVG element, I found it difficult to
      efficiently apply it across multiple SVG elements (e.g. 100 bars in a bar
      chart)
    </li>
    <li class="${"svelte-1bbtai3"}">I also tried the <a href="${"https://observablehq.com/@d3/d3-interpolatestring"}">d3.interpolateString</a> method, but this fails when you go beyond anything but the simplest of SVG
      paths.
    </li>
    <li class="${"svelte-1bbtai3"}">Finally, I tried something similar to <a href="${"https://svelte.dev/repl/a6268cfc4685416998c6e64516546acd?version=3"}">this example</a>. It basically converts paths to points, tweens the raw values with
      Svelte tweening, then converts the points back to paths. This works well
      for simple icons, but when you have Arcs and other SVG path descriptors,
      things get messy, fast.
    </li></ul>
  <h2 class="${"svelte-1bbtai3"}">Svelte code</h2>
  <div class="${"code-box svelte-1bbtai3"}">${validate_component(CodeVisual, "CodeVisual").$$render($$result, {
      compid: "recipes/AnimatedTransitions.Chart2"
    }, {}, {})}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
let d3R = [
  {
    primary_key: "AnimatedTransitions",
    published: "2022-03-13",
    post_title: "Animated Chart Transitions with Svelte, D3 & Flubber",
    thumbnail: "/images/thumbnails/graph.png",
    keywords: ["d3", "svelte", "animation", "flubber"],
    intro_text: "How to make really smooth transitions between different chart types, inspired by <a href='https://www.youtube.com/watch?v=vLk7mlAtEXI'>this YouTube video</a>.",
    component: AnimatedTransitions
  }
];
export { Icon as I, d3R as d };
