import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { init } from "echarts";

const px = (n) => (n / 2420) * (window as any).pageWidth;

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);

    myChart.setOption({
      textStyle: {
        fontSize: px(12),
        color: "#79839e",
      },
      title: { show: false },
      legend: { show: false },
      xAxis: {
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        axisLabel: {
          fontSize: px(17),
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
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      yAxis: {
        splitLine: { show: false },
        axisLabel: {
          fontSize: px(17),
        },
      },
      series: [
        {
          name: "销量",
          type: "bar",
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
        },
      ],
    });
  }, []);
  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};