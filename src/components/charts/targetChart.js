import React from 'react';
import { Card, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import { targetData } from 'utils/data';

const TargetChart = () => {
  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '45%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь'],
      axisBorder: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.2,
      },
      borderColor: '#f3f4f7',
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' тысяч';
        },
      },
    },
  };
  return (
    <Card>
      <CardBody className='pb-0'>
        <h5 className='card-title header-title'>Цели</h5>

        <Chart
          options={options}
          series={targetData}
          type='bar'
          className='apex-charts mt-3'
          height={296}
        />
      </CardBody>
    </Card>
  );
};

export default TargetChart;
