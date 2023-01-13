import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import ComponentWithAm5Root from './ComponentWithAm5Root';
import am5geodata_ukraineLow from "@amcharts/amcharts5-geodata/ukraineLow"

export class Maps extends ComponentWithAm5Root {
  componentDidMount(): void {
    let root = am5.Root.new("chartdiv");
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
        panX: "translateX",
        panY: "translateY",
        wheelY: "zoom",
        minZoomLevel: 0.75,
        maxZoomLevel: 4,
      })
    );

    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

    chart.chartContainer.set("background", am5.Rectangle.new(root, {
      fill: am5.color("#0f1012"),
      fillOpacity: 1,
    }));

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_ukraineLow,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color("rgba(129, 129, 129, 1)"),
      stroke: am5.color("rgba(80, 80, 80, 1)"),
    });
    
    this.setRoot(root);
  }

  componentWillUnmount(): void {
    this.disposeRoot();
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "100%", overflow: "hidden" }}></div>
    );
  }
}