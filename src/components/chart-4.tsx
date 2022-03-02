import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { init } from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echart-options";

export const Chart4 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        color: "#F7A110",
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
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
            name: "故意伤人",
            type: "line",
            data: [
              0.15, 0.13, 0.11, 0.13, 0.14, 0.11, 0.16, 0.14, 0.11, 0.12, 0.17,
              0.12, 0.15,
            ],
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
                  color: "#1b1d52",
                },
              ]),
            },
          },
        ],
      })
    );
  }, []);

  return (
    <div className="bordered 攻击时段">
      <h2>病毒攻击时段</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
