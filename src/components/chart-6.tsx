import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { init } from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echart-options";
import china from "../geo/china.json";

export const Chart6 = () => {
  const divRef = useRef(null);
  const colors = {
    辽宁省: "#BB31F7",
    福建省: "#15B8FD",
    安徽省: "#06E1EE",
    四川省: "#F46064",
    广东省: "#F7A110",
  };
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap("CN", china);
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            type: "map",
            mapType: "CN",
            data: [{ name: "辽宁省", value: 1 }],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["辽宁省"],
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN",
            data: [{ name: "福建省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["福建省"],
              borderColor: "yellow",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN",
            data: [{ name: "安徽省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["安徽省"],
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN",
            data: [{ name: "四川省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["四川省"],
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN",
            data: [{ name: "广东省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["广东省"],
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
        ],
      })
    );
  }, []);

  return (
    <div className="bordered 分布">
      <h2>勒索病毒地区分布</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart" />
        <div className="legend bordered">
          <span className="icon" style={{ background: colors["辽宁省"] }} />
          辽宁地区
          <span className="icon" style={{ background: colors["福建省"] }} />
          福建地区
          <span className="icon" style={{ background: colors["安徽省"] }} />
          安徽地区
          <span className="icon" style={{ background: colors["四川省"] }} />
          四川地区
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};
