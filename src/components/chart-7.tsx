import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echart-options";

export const Chart7 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        color: ["#8D70F8", "#33A4FA", "#F38E1C"],
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
                return options.value * 100 + "%";
              },
            },
            labelLine: { show: false },
            itemStyle: {
              borderColor: "#0F113A",
              borderWidth: px(4),
            },
            data: [
              { value: 0.2, name: "女" },
              { value: 0.4, name: "男" },
              { value: 0.4, name: "ladyboy" },
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
        <div className="text">价格</div>
      </div>
      <div className="legend">
        <span className="male" />
        收费
        <span className="female" />
        免费
        <span className="female" />
        试用免费
      </div>
    </div>
  );
};
