import React, { Component } from 'react';
// @ts-ignore
import AmCharts from "@amcharts/amcharts3-react";
interface Chart {
    selectObject: () => void
}

interface DescriptionClosedEvent {
    chart: Chart
}
export class Maps extends Component {
    render() {
        //config as same as yours but inside const
        const config = {
            "type": "map",
            "theme": "light",
            "colorSteps": 10,
            "dataProvider": {
                "map": "usaLow",
                "areas": [{
                    "id": "US-AL",
                    "value": 4447100
                }, {//..all areas mentioned in question}]
                }],
            },
    "areasSettings": {
                "autoZoom": true
            },
            "valueLegend": {
                "right": 10,
                "minValue": "little",
                "maxValue": "a lot!"
            },
            "listeners": [{
                "event": "descriptionClosed",
                "method": function (ev: DescriptionClosedEvent) {
                    ev.chart.selectObject();
                }
            }]
        };

        return (
            <div className="App">
                <AmCharts.React style={{ width: "100%", height: "500px" }} options={config} />
            </div>);
    }
}