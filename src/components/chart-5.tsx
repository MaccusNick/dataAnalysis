import React from "react";

export const Chart5 = () => {
  return (
    <div className="年度病毒">
      <h2>年度病毒攻击统计</h2>
      <table>
        <thead>
          <tr>
            <th>年份</th>
            <th>木马</th>
            <th>蠕虫病毒</th>
            <th>勒索病毒</th>
            <th>宏病毒</th>
            <th>挖矿病毒</th>
            <th>后门病毒</th>
            <th>合计</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2019</td>
            <td>24</td>
            <td>33</td>
            <td>43</td>
            <td>21</td>
            <td>23</td>
            <td>31</td>
            <td>175</td>
          </tr>
          <tr>
            <td>2020</td>
            <td>24</td>
            <td>12</td>
            <td>34</td>
            <td>31</td>
            <td>63</td>
            <td>31</td>
            <td>164</td>
          </tr>
          <tr>
            <td>2021</td>
            <td>23</td>
            <td>12</td>
            <td>43</td>
            <td>21</td>
            <td>23</td>
            <td>12</td>
            <td>134</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
