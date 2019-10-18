// Create a new directed graph
var g = new dagreD3.graphlib.Graph().setGraph({});

// States and transitions from RFC 793
var states = [
  "Node14",
  "Node12",
  "Node13",
  "Node11",
  "Node15",
  "Node16",
  "Node17",
  "Node18",
  "Node19",
  "Node191",
  "Node192",
  "Node193",
  "Node194",
  "Node21",
  "Node22",
  "Node31",
  "Node41",
  "Node51",
  "Node61",
  "Node71",
  "Node81",
  "Node91",
  "Node101",
  "Node111",
  "Node121",
  "Node131",
  "Node141"
];

// Automatically label each of the nodes
states.forEach(function(state) {
  g.setNode(state, { label: state });
});

// Set up the edges
g.setEdge("Node11", "Node22", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node12", "Node22", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node13", "Node22", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node14", "Node22", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node15", "Node22", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node16", "Node22", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node17", "Node22", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node18", "Node22", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node19", "Node22", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node191", "Node22", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node192", "Node22", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node193", "Node22", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node194", "Node22", { label: "", curve: d3.curveStepBefore });

g.setEdge("Node21", "Node31", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node22", "Node31", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node11", "Node31", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node12", "Node31", { label: "", curve: d3.curveStepBefore });

g.setEdge("Node22", "Node41", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node31", "Node41", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node41", "Node51", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node22", "Node51", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node51", "Node61", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node22", "Node61", { label: "", curve: d3.curveStepBefore });

g.setEdge("Node22", "Node71", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node61", "Node71", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node22", "Node81", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node71", "Node81", { label: "", curve: d3.curveStepBefore });

g.setEdge("Node22", "Node91", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node81", "Node91", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node22", "Node101", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node91", "Node101", { label: "", curve: d3.curveStepBefore });

g.setEdge("Node22", "Node111", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node101", "Node111", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node22", "Node121", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node111", "Node121", { label: "", curve: d3.curveStepBefore });

g.setEdge("Node22", "Node131", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node121", "Node131", { label: "", curve: d3.curveStepBefore });
g.setEdge("Node131", "Node141", { label: "", curve: d3.curveStepBefore });


// Set some general styles
g.nodes().forEach(function(v) {
  var node = g.node(v);
  node.rx = node.ry = 5;
});

// Add some custom colors based on state
g.node("Node21").style = "fill: blue";
g.node("Node22").style = "fill: purple";
g.node("Node31").style = "fill: orange";

g.node("Node41").style = "fill: blue";
g.node("Node51").style = "fill: blue";
g.node("Node61").style = "fill: blue";

g.node("Node71").style = "fill: red";
g.node("Node81").style = "fill: red";

g.node("Node91").style = "fill: blue";
g.node("Node101").style = "fill: blue";

g.node("Node111").style = "fill: red";
g.node("Node121").style = "fill: red";

g.node("Node131").style = "fill: blue";
g.node("Node141").style = "fill: lightblue";

var svg = d3.select("svg"),
  inner = svg.select("g");

// Set up zoom support
var zoom = d3.zoom().on("zoom", function() {
  inner.attr("transform", d3.event.transform);
});
svg.call(zoom);

// Create the renderer
var render = new dagreD3.render();

// Run the renderer. This is what draws the final graph.
render(inner, g);

// Center the graph
var initialScale = 0.75;
svg.call(
  zoom.transform,
  d3.zoomIdentity
    .translate((svg.attr("width") - g.graph().width * initialScale) / 2, 20)
    .scale(initialScale)
);

svg.attr("height", g.graph().height * initialScale + 40);
