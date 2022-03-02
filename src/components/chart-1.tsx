import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { init } from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echart-options";

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);

    myChart.setOption(
      createEchartsOptions({
        xAxis: {
          data: ["勒索病毒", "木马", "蠕虫", "后门病毒", "挖矿病毒"],
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            fontSize: px(12),
            formatter(val) {
              if (val.length > 2) {
                const array = val.split("");
                array.splice(2, 0, "\n");
                return array.join("");
              } else {
                return val;
              }
            },
          },
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            fontSize: px(12),
          },
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
          },
        ],
      })
    );
  }, []);
  return (
    <div className="bordered 传染">
      <h2>计算机病毒传染性排行</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
