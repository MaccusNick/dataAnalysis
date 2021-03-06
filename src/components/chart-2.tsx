import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { init } from "echarts";
import { baseEchartOptions } from "../shared/base-echart-options";
import { createEchartsOptions } from "../shared/create-echart-options";

import { px } from "../shared/px";

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "城关区公安局", 2011: 2, 2012: 3 },
    { name: "七里河区公安局", 2011: 2, 2012: 3 },
    { name: "西固区公安局", 2011: 2, 2012: 3 },
    { name: "安宁区公安局", 2011: 2, 2012: 3 },
    { name: "红古区公安局", 2011: 2, 2012: 3 },
    { name: "永登县公安局", 2011: 2, 2012: 3 },
    { name: "皋兰县公安局", 2011: 2, 2012: 3 },
    { name: "榆中县公安局", 2011: 2, 2012: 3 },
    { name: "新区公安局", 2011: 2, 2012: 3 },
  ];
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        grid: {
          x: px(100),
          y: px(40),
          x2: px(40),
          y2: px(40),
        },

        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false }, //除掉分割线
          axisLabel: { show: false },
        },
        yAxis: {
          axisLabel: {
            formatter(val) {
              return val.replace("公安局", "\n公安局");
            },
          },
          axisTick: { show: false }, //去除y轴刻度
          type: "category",
          data: data.map((i) => i.name),
        },
        series: [
          {
            name: "2011",
            type: "bar",
            data: data.map((i) => i[2011]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#2034f9",
                  },
                  {
                    offset: 1,
                    color: "#04a1ff",
                  },
                ]),
              },
            },
          },

          {
            name: "2012",
            type: "bar",
            data: data.map((i) => i[2012]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#b92ae8",
                  },
                  {
                    offset: 1,
                    color: "#6773e7",
                  },
                ]),
              },
            },
          },
        ],
      })
    );
  };
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "挖矿", 2011: 2, 2012: Math.random() * 10 },
        { name: "木马", 2011: 2, 2012: 3 },
        { name: "蠕虫", 2011: 2, 2012: 3 },
        { name: "勒索病毒", 2011: 2, 2012: 3 },
        { name: "流氓软件", 2011: 2, 2012: 3 },
        { name: "宏病毒", 2011: 2, 2012: 3 },
        { name: "后门病毒", 2011: 2, 2012: 3 },
        { name: "捆绑机病毒", 2011: 2, 2012: 3 },
        { name: "脚本病毒", 2011: 2, 2012: 3 },
      ];
      x(newData);
    }, 1000);
  }, []);

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 损失">
      <h2>计算机病毒损失排名</h2>
      <div ref={divRef} className="chart"></div>
      <div className="legend">
        <span className="first" />
        频率
        <span className="second" />
        损失
      </div>
    </div>
  );
};
