import { View, parse, changeset } from "vega";
import dataset from "assets/sp500.csv";

const container = document.getElementById("test");

const spec = {"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
"data": {"url": "assets/sp500.csv"},
"vconcat": [{
  "width": 480,
  "mark": "area",
  "encoding": {
    "x": {
      "field": "date",
      "type": "temporal",
      "scale": {"domain": {"selection": "brush"}},
      "axis": {"title": ""}
    },
    "y": {"field": "price", "type": "quantitative"}
  }
}, {
  "width": 480,
  "height": 60,
  "mark": "area",
  "selection": {
    "brush": {"type": "interval", "encodings": ["x"]}
  },
  "encoding": {
    "x": {
      "field": "date",
      "type": "temporal"
    },
    "y": {
      "field": "price",
      "type": "quantitative",
      "axis": {"tickCount": 3, "grid": false}
    }
  }
}]};
const runtime = parse(spec);

var view = new View(runtime)
  //.logLevel(vega.Warn) // set view logging level
  .renderer("svg") // set render type (defaults to 'canvas')
  .initialize(container) // set parent DOM element
  .hover(); // enable hover event processing, *only call once*!