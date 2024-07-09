import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomSideDrawer from "../../../components/custom-side-drawer/custom-side-drawer.component";
import { allUserList, userType } from "../../../mock/user-data";

interface RoleCountAccumulator {
  [key: string]: number;
}

type userChartProps = {
  userList: Array<userType>;
  height?: number;
};

export const PrivateUserPieChartPageTemplate = ({
  userList,
  height,
}: userChartProps) => {
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

export const PrivateUserDataVisulizationPageTemplate = () => {
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

  const userRoleData = countUsersByRole(allUserList);

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

  return <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>;
};

type tableProps = {
  tableRole?: string;
  data: Array<userType>;
  row: number;
};

export const PrivateUserListDataTablePageTemplate = ({
  tableRole,
  data,
  row,
}: tableProps) => {
  const getOrdinalSuffix = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };
  const getAcademicYear = (currentYear: number, admissionYear: number) => {
    const yearDifference = currentYear - admissionYear + 1;
    return getOrdinalSuffix(yearDifference);
  };
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex flex-col items-center gap-2">
      {tableRole === "teacher" ? (
        <div className="w-full">
          <div className="mt-5">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      S.N
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Employee ID
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Designation
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      More
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    <>
                      {data
                        .filter((filter) => filter.userRole === "Teacher")
                        .slice(0, row)
                        .map((user, index) => {
                          return (
                            <tr key={index}>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0"
                                  ></span>
                                  <span className="relative">{index + 1}</span>
                                </span>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0"
                                  ></span>
                                  <span className="relative">
                                    {user.employeeId}
                                  </span>
                                </span>
                              </td>
                              <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                <div className="flex">
                                  <div className="flex-shrink-0 w-10 h-10">
                                    <img
                                      className="w-full h-full rounded-full"
                                      src={user.userProfileImage}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-gray-500 whitespace-no-wrap font-display font-bold text-xs">
                                      {`${user.userFirstName} ${user.userLastName}`}
                                    </p>
                                    <p className="text-gray-600 whitespace-no-wrap font-display text-xs">
                                      {user.employeeId}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.userEmailAddress}
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">
                                  {user.userPhoneNumber}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.userDepartment}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.userDesignation}
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">
                                  {user.userCollege}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                  ></span>
                                  <span className="relative">
                                    {user.userRole}
                                  </span>
                                </span>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                <button
                                  type="button"
                                  className="inline-block text-gray-500 hover:text-gray-700"
                                >
                                  <svg
                                    className="inline-block h-6 w-6 fill-current"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </>
                  ) : (
                    <CustomLabel>No User Found</CustomLabel>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : tableRole === "admin" ? (
        <div className="w-full">
          <div className="mt-5">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      S.N
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Employee ID
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Designation
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      More
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    <>
                      {data
                        .filter((filter) => filter.userRole === "Admin")
                        .slice(0, row)
                        .map((user, index) => {
                          return (
                            <tr key={index}>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0"
                                  ></span>
                                  <span className="relative">{index + 1}</span>
                                </span>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0"
                                  ></span>
                                  <span className="relative">
                                    {user.employeeId}
                                  </span>
                                </span>
                              </td>
                              <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                <div className="flex">
                                  <div className="flex-shrink-0 w-10 h-10">
                                    <img
                                      className="w-full h-full rounded-full"
                                      src={user.userProfileImage}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-gray-500 whitespace-no-wrap font-display font-bold text-xs">
                                      {`${user.userFirstName} ${user.userLastName}`}
                                    </p>
                                    <p className="text-gray-600 whitespace-no-wrap font-display text-xs">
                                      {user.employeeId}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.userEmailAddress}
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">
                                  {user.userPhoneNumber}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.userDepartment}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.userDesignation}
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">
                                  {user.userCollege}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                  ></span>
                                  <span className="relative">
                                    {user.userRole}
                                  </span>
                                </span>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                <button
                                  type="button"
                                  className="inline-block text-gray-500 hover:text-gray-700"
                                >
                                  <svg
                                    className="inline-block h-6 w-6 fill-current"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </>
                  ) : (
                    <CustomLabel>No User Found</CustomLabel>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : tableRole === "nonteacher" ? (
        <div className="w-full">
          <div className="mt-5">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      S.N
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Employee ID
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Designation
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      More
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    <>
                      {data
                        .filter((filter) => filter.userRole === "NonTeacher")
                        .slice(0, row)
                        .map((user, index) => {
                          return (
                            <tr key={index}>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0"
                                  ></span>
                                  <span className="relative">{index + 1}</span>
                                </span>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0"
                                  ></span>
                                  <span className="relative">
                                    {user.employeeId}
                                  </span>
                                </span>
                              </td>
                              <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                <div className="flex">
                                  <div className="flex-shrink-0 w-10 h-10">
                                    <img
                                      className="w-full h-full rounded-full"
                                      src={user.userProfileImage}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-gray-500 whitespace-no-wrap font-display font-bold text-xs">
                                      {`${user.userFirstName} ${user.userLastName}`}
                                    </p>
                                    <p className="text-gray-600 whitespace-no-wrap font-display text-xs">
                                      {user.employeeId}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.userEmailAddress}
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">
                                  {user.userPhoneNumber}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.userDepartment}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.userDesignation}
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">
                                  {user.userCollege}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                  ></span>
                                  <span className="relative">
                                    {user.userRole}
                                  </span>
                                </span>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                <button
                                  type="button"
                                  className="inline-block text-gray-500 hover:text-gray-700"
                                >
                                  <svg
                                    className="inline-block h-6 w-6 fill-current"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </>
                  ) : (
                    <CustomLabel>No User Found</CustomLabel>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="mt-5">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      S.N
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Enrollment Number
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Student Name
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Current Status
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Admission Year
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="font-display px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      More
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    <>
                      {data
                        .filter((filter) => filter.userRole === "Student")
                        .slice(0, row)
                        .map((user, index) => {
                          return (
                            <tr key={index}>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0"
                                  ></span>
                                  <span className="relative">{index + 1}</span>
                                </span>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0"
                                  ></span>
                                  <span className="relative">
                                    {user.enrollmentNumber}
                                  </span>
                                </span>
                              </td>
                              <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                <div className="flex">
                                  <div className="flex-shrink-0 w-10 h-10">
                                    <img
                                      className="w-full h-full rounded-full"
                                      src={user.userProfileImage}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-gray-500 whitespace-no-wrap font-display font-bold text-xs">
                                      {`${user.userFirstName} ${user.userLastName}`}
                                    </p>
                                    <p className="text-gray-600 whitespace-no-wrap font-display text-xs">
                                      {user.enrollmentNumber}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.userEmailAddress}
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">
                                  {user.userPhoneNumber}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {`${getAcademicYear(
                                    currentYear,
                                    Number(user.userAdmissionYear)
                                  )} year, `}
                                  {user.userBranch}
                                  <span className="font-display font-semibold text-gray-500">
                                    {`(${user.userDepartment})`}
                                  </span>
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">
                                  {user.userCollege}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0"
                                  ></span>
                                  <span className="relative">
                                    {user.userAdmissionYear}
                                  </span>
                                </span>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs font-display">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                  ></span>
                                  <span className="relative">
                                    {user.userRole}
                                  </span>
                                </span>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                <button
                                  type="button"
                                  className="inline-block text-gray-500 hover:text-gray-700"
                                >
                                  <svg
                                    className="inline-block h-6 w-6 fill-current"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </>
                  ) : (
                    <CustomLabel>No User Found</CustomLabel>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

type tableButtonProps = {
  tableValue?: string;
  onClickAdmin?: () => void;
  onClickTeacher?: () => void;
  onClickNonTeacher?: () => void;
  onClickStudent?: () => void;
};

export const PrivateUserTableButtonPageTemplate = ({
  tableValue,
  onClickAdmin,
  onClickTeacher,
  onClickNonTeacher,
  onClickStudent,
}: tableButtonProps) => {
  return (
    <div className="bg-gray-400 w-[35rem] p-1 flex items-center justify-between rounded-lg">
      <button
        onClick={onClickAdmin}
        className={`${
          tableValue === "admin" && "bg-gray-600 transition-all zoom-in"
        } w-full rounded-lg text-white text-xs font-display p-2`}
      >
        Admins
      </button>
      <button
        onClick={onClickTeacher}
        className={`${
          tableValue === "teacher" && "bg-gray-600 transition-all zoom-in"
        } w-full rounded-lg text-white text-xs font-display p-2`}
      >
        Teachers
      </button>
      <button
        onClick={onClickNonTeacher}
        className={`${
          tableValue === "nonteacher" && "bg-gray-600 transition-all zoom-in"
        } w-full rounded-lg text-white text-xs font-display p-2`}
      >
        Non Teachers
      </button>
      <button
        onClick={onClickStudent}
        className={`${
          tableValue === "student" && "bg-gray-600 transition-all zoom-in"
        } w-full rounded-lg text-white text-xs font-display p-2`}
      >
        Students
      </button>
    </div>
  );
};
