import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echart-options";

export const Chart8 = () => {
  const divRef = useRef(null);
  const colors = ["#856BED", "#F46064", "#F38E1C", "#1CDB7C", "#33A4FA"];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        color: colors,
        xAxis: { show: false },
        yAxis: { show: false },
        legend: { show: false },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["75%", "90%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "inside",
              textStyle: { color: "white", fontSize: px(20) },
              formatter(options) {
                return (options.value * 100).toFixed(0) + "%";
              },
            },
            labelLine: { show: false },
            itemStyle: {
              borderColor: "#0F113A",
              borderWidth: px(4),
            },
            data: [
              { value: 0.37, name: "诺顿" },
              { value: 0.21, name: "McAfee" },
              { value: 0.15, name: "Intego" },
              { value: 0.11, name: "瑞星" },
              { value: 0.16, name: "Bitdefender" },
            ],
          },
        ],
      })
    );
  }, []);

  return (
    <div className="杀毒软件-图2">
      <div className="chart">
        <div className="main" ref={divRef} />
        <div className="text">性能</div>
      </div>
      <div className="legend">
        <span style={{ background: colors[0] }} />
        诺顿
        <span style={{ background: colors[1] }} />
        McAfee
        <span style={{ background: colors[2] }} />
        Intego
        <span style={{ background: colors[3] }} />
        瑞星
        <span style={{ background: colors[4] }} />
        Bitdefender
      </div>
    </div>
  );
};
