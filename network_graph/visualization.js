const width = 600;
const height = 600;

const font_base = 10;
const font_scale = 2;
const spacing = 5;

var svg = d3.select("#my_dataviz").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g");

// d3.json("/graphFile.json", function (data) { });
// data is from graphFile.js

var link = svg.selectAll("line").data(data.links).enter().append("line")
  .attr("stroke-width", (d) => {
    return d.weight
  })
  .style("stroke", "#aaa")

var node = svg.selectAll("circle").data(data.nodes).enter()
  .append("a").attr("href", termLink)
  .append("circle")
  .attr("class", "termCircle")
  .attr("r", (d) => {
    return d.size
  })
  .style("fill", "#69b3a2")

var label = svg.selectAll("text").data(data.nodes).enter()
  .append("a")
  .attr("href", termLink)
  .attr("class", "termLink")
  .append("text")
  .attr("class", "termTitle")
  .style("font-size", (d) => {
    return font_base + font_scale * (d.size / font_base)
  })
  .text((d) => {
    return d.name
  })

var simulation = d3.forceSimulation(data.nodes)
  .force("link", d3.forceLink()
    .id((d) => {
      return d.id
    })
    .links(data.links)
  )
  .force("charge", d3.forceManyBody().strength(-10000))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .on("end", ticked);


function ticked() {
  link
    .attr("x1", function (d) {
      return d.source.x;
    })
    .attr("y1", function (d) {
      return d.source.y;
    })
    .attr("x2", function (d) {
      return d.target.x;
    })
    .attr("y2", function (d) {
      return d.target.y;
    });

  node
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    });

  label
    .attr("x", function (d) {
      return d.x + d.size + spacing
    })
    .attr("y", function (d) {
      return d.y + (d.size / font_base) / 2 + font_base / 2
    });
}

//
// Functions
//
function termLink(d) {
  return "/term/" + d.id
}