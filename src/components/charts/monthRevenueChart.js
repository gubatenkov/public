import React from 'react';
import { NavLink } from 'reactstrap';
import { Card, CardBody, Nav, NavItem } from 'reactstrap';
import Chart from 'react-apexcharts';

import { getDaysInMonth } from 'utils/functions';

const MonthRevenueChart = () => {
  let now = new Date();
  let labels = getDaysInMonth(now.getMonth(), now.getFullYear());

  const apexLineChartWithLables = {
    chart: {
      height: 300,
      type: 'area',
      toolbar: {
        show: false,
      },
      parentHeightOffset: 0,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 4,
    },
    zoom: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: ['#43d39e'],
    xaxis: {
      type: 'string',
      categories: labels,
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {},
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val + ' тыс.';
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [45, 100],
      },
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
    },
  };

  const apexLineChartWithLablesData = [
    {
      name: 'Средний показатель',
      data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
    },
  ];
  return (
    <Card>
      <CardBody className='month-revenue-chart-body'>
        <Nav className='ard-nav float-right'>
          <NavItem>
            <NavLink className='text-muted month-revenue-chart-link' href='#'>
              Сегодня
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-muted month-revenue-chart-link' href='#'>
              7д
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='month-revenue-chart-link' active href='#'>
              15д
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-muted month-revenue-chart-link' href='#'>
              1м
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-muted month-revenue-chart-link' href='#'>
              3м
            </NavLink>
          </NavItem>
        </Nav>

        <h5 className='card-title mb-0 header-title'>Доходы за месяц</h5>

        <Chart
          options={apexLineChartWithLables}
          series={apexLineChartWithLablesData}
          type='area'
          className='apex-charts mt-3'
          height={296}
        />
      </CardBody>
    </Card>
  );
};

export default MonthRevenueChart;
