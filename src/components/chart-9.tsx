import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echart-options";

export const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        color: "#F7A110",
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [0, 20, 30, 40, 50, 60, 70, 80],
          splitLine: { show: true, lineStyle: { color: "#073E78" } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "#073E78" } },
          axisLabel: {
            formatter(val) {
              return val * 100 + "%";
            },
          },
        },
        series: [
          {
            type: "line",
            data: [0.9, 0.2, 0.26, 0.65, 0.26, 0.5, 0.08, 0.36],
            symbol: "circle",
            symbolSize: px(12),
            lineStyle: { width: px(2) },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#F7A110",
                },
                {
                  offset: 1,
                  color: "#1B1D52",
                },
              ]),
            },
          },
        ],
      })
    );
  }, []);

  return (
    <div className="杀毒软件-图3">
      <h3>销量走势</h3>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
