import React from "react";

export const Chart14 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>病毒类型</th>
          <th>危害度</th>
          <th>总体评价</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={4}>勒索病毒</td>
          <td>WannaCrypt</td>
          <td>高</td>
          <td rowSpan={4}>高</td>
        </tr>
        <tr>
          <td>Bad Rabbit</td>
          <td>高</td>
        </tr>
        <tr>
          <td>Mischa</td>
          <td>高</td>
        </tr>
        <tr>
          <td>CryptoWall</td>
          <td>高</td>
        </tr>
        <tr>
          <td rowSpan={2}>蠕虫病毒</td>
          <td>风暴蠕虫</td>
          <td>中</td>
          <td rowSpan={2}>高</td>
        </tr>
        <tr>
          <td>Samy蠕虫</td>
          <td>高</td>
        </tr>
        <tr>
          <td rowSpan={3}>木马病毒</td>
          <td>Regin木马</td>
          <td>中</td>
          <td rowSpan={3}>高</td>
        </tr>
        <tr>
          <td>ZeuS木马</td>
          <td>高</td>
        </tr>
        <tr>
          <td>Torpig木马</td>
          <td>高</td>
        </tr>
        <tr>
          <td rowSpan={2}>恶意软件</td>
          <td>恶意软件Tinba</td>
          <td>中</td>
          <td rowSpan={2}>中</td>
        </tr>
        <tr>
          <td>恶意软件Mirai</td>
          <td>高</td>
        </tr>
      </tbody>
    </table>
  );
};
