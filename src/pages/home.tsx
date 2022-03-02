import React, { useEffect, useRef } from "react";
import "./home.scss";
import headerBg from "../images/header.png";
import * as echarts from "echarts";
import { init } from "echarts";
import { Chart1 } from "../components/chart-1";
import { Chart2 } from "../components/chart-2";
import { Chart3 } from "../components/chart-3";
import { Chart4 } from "../components/chart-4";
import { Chart5 } from "../components/chart-5";
import { Chart6 } from "../components/chart-6";
import { Chart7 } from "../components/chart-7";
import { Chart8 } from "../components/chart-8";
import { Chart9 } from "../components/chart-9";
import { Chart10 } from "../components/chart-10";
import { Chart11 } from "../components/chart-11";
import { Chart12 } from "../components/chart-12";
import { Chart13 } from "../components/chart-13";
import { Chart14 } from "../components/chart-14";

export const Home = () => {
  return (
    <div className="home">
      <header></header>
      <main>
        <section className="section1">
          <Chart2 />
          <Chart1 />
        </section>
        <section className="section2">
          <Chart4 />
          <Chart3 />
        </section>
        <section className="bordered section3">
          <Chart5 />
        </section>
        <section className="section4">
          <Chart6 />
          <div className="bordered 杀毒软件">
            <h2>杀毒软件性能排行</h2>
            <div className="charts">
              <Chart8 />
              <Chart9 />
              <Chart7 />
            </div>
          </div>
        </section>
        <section className="bordered section5"></section>
        <section className="section5">
          <div className="bordered row2 类型分布">
            <h2>病毒类型分布</h2>
            <div className="charts">
              <Chart12 />
              <Chart13 />
            </div>
          </div>
          <div className="bordered row1 病毒特性">
            <h2>木马病毒特性</h2>
            <div className="charts">
              <Chart10 />
              <Chart11 />
            </div>
          </div>
          <div className="bordered row3 种类分析">
            <h2>病毒种类分析</h2>
            <Chart14 />
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};
