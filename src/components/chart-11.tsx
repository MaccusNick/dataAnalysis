import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echart-options";

export const Chart11 = () => {
  const divRef = useRef(null);
  const colors = ["#F46064", "#F38E1C", "#1CDB7C", "#8D70F8", "#33A4FA"];
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
            startAngle: -20,
            type: "pie",
            radius: ["25%", "90%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
              textStyle: { color: "white", fontSize: px(20) },
              distanceToLabelLine: 0,
              formatter(options) {
                return options.value * 100 + "%";
              },
            },
            labelLine: { show: true, length: 0 },
            roseType: "area",
            itemStyle: {
              shadowBlur: px(200),
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
            data: [
              { value: 0.36, name: "刑事案件" },
              { value: 0.2, name: "民事案件" },
              { value: 0.18, name: "经济案件" },
              { value: 0.24, name: "其他案件" },
            ],
          },
        ],
      })
    );
  }, []);

  return (
    <div className="杀毒软件-图1">
      <div className="chart">
        <div className="main" ref={divRef} />
      </div>
      <div className="legend">
        <span style={{ background: colors[0] }} />
        传播性
        <span style={{ background: colors[1] }} />
        感染性
        <span style={{ background: colors[2] }} />
        潜伏性
        <span style={{ background: colors[3] }} />
        破坏性
      </div>
    </div>
  );
};
