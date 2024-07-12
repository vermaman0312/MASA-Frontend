import React, { useEffect, useRef } from "react";
import { userType } from "../../../../mock/user-data";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

interface RoleCountAccumulator {
  [key: string]: number;
}

type props = {
  userList: Array<userType>;
  height?: number;
};

const PrivateUserPieChartPageComponent = ({ userList, height }: props) => {
  const chartRef = useRef(null);

  const processData = (
    data: Array<userType>
  ): Array<{ category: string; value: number }> => {
    const roleCounts: RoleCountAccumulator = data.reduce(
      (acc, user) => {
        (acc as RoleCountAccumulator)[user.userRole] =
          (acc[user.userRole] || 0) + 1;
        return acc;
      },
      {
        Student: 0,
        Teacher: 0,
        Admin: 0,
        NonTeacher: 0,
      } as RoleCountAccumulator
    );

    return [
      { category: "Students", value: roleCounts.Student },
      { category: "Teachers", value: roleCounts.Teacher },
      { category: "Admins", value: roleCounts.Admin },
      { category: "NonTeachers", value: roleCounts.NonTeacher },
    ];
  };

  useEffect(() => {
    if (!chartRef.current) {
      console.error("chartRef.current is null");
      return;
    }
    const root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.horizontalLayout,
      })
    );

    const series0 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
        radius: am5.percent(100),
      })
    );

    series0.states.create("hidden", {
      startAngle: 180,
      endAngle: 180,
    });

    series0.slices.template.setAll({
      fillOpacity: 0.5,
      strokeOpacity: 0,
      templateField: "settings",
    });

    series0.slices.template.states.create("hover", { scale: 1 });
    series0.slices.template.states.create("active", { shiftRadius: 0 });

    series0.labels.template.setAll({
      templateField: "settings",
    });

    series0.ticks.template.setAll({
      templateField: "settings",
    });

    series0.labels.template.setAll({
      textType: "circular",
      radius: 20,
      fontSize: 12,
    });

    series0.data.setAll([
      {
        category: "Teachers + Students",
        value: 60,
      },
      {
        category: "Unused",
        value: 30,
        settings: { forceHidden: true },
      },
    ]);

    const series1 = chart.series.push(
      am5percent.PieSeries.new(root, {
        radius: am5.percent(95),
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
      })
    );

    series1.states.create("hidden", {
      startAngle: 180,
      endAngle: 180,
    });

    series1.slices.template.setAll({
      templateField: "sliceSettings",
      strokeOpacity: 0,
    });

    series1.labels.template.setAll({
      textType: "circular",
      fontSize: 12,
    });

    series1.slices.template.states.create("hover", { scale: 1 });
    series1.slices.template.states.create("active", { shiftRadius: 0 });

    series1.ticks.template.setAll({
      forceHidden: true,
    });

    const processedData = processData(userList);
    series1.data.setAll(processedData);

    return () => {
      root.dispose();
    };
  }, [userList]);

  return (
    <div
      id="chartdiv"
      ref={chartRef}
      style={{ width: "100%", height: `${height}px` }}
    />
  );
};

export default PrivateUserPieChartPageComponent;
