import { useEffect } from "react";
import { userType } from "../../../../mock/user-data";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

type props = {
  userList: Array<userType>;
};

const PrivateUserBarChartPageComponent = ({ userList }: props) => {
  const countUsersByRole = (users: userType[]) => {
    const roleCount: { [key: string]: number } = {};
    users.forEach((user) => {
      if (roleCount[user.userRole]) {
        roleCount[user.userRole]++;
      } else {
        roleCount[user.userRole] = 1;
      }
    });
    return Object.keys(roleCount).map((role) => ({
      role,
      count: roleCount[role],
    }));
  };

  const userRoleData = countUsersByRole(userList);

  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.colors.saturation = 0.4;

    chart.data = userRoleData.map((data) => ({
      role: data.role,
      count: data.count,
    }));

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "role";
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.minWidth = 120;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.maxLabelPosition = 0.98;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "role";
    series.dataFields.valueX = "count";
    series.tooltipText = "{valueX.value}";
    series.sequencedInterpolation = true;
    series.defaultState.transitionDuration = 1000;
    series.sequencedInterpolationDelay = 100;
    series.columns.template.strokeOpacity = 0;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    series.columns.template.adapter.add("fill", (fill, target) => {
      return chart.colors.getIndex(target.dataItem!.index!);
    });

    return () => {
      chart.dispose();
    };
  }, [userRoleData]);
  return <div id="chartdiv" style={{ width: "100%", height: "100%" }} />;
};

export default PrivateUserBarChartPageComponent;
