import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Media } from 'reactstrap';

const SmallChart = (props) => {
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
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
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
    colors: props.colors || ['#727cf5'],
  };
  const type = props.type || 'area';
  const series = [{ name: props.name || 'Data', data: props.data || [] }];
  const { icon: Icon, value, textClass } = props.trend;

  return (
    <Card className=''>
      <CardBody className='p-0'>
        <Media className='d-flex justify-content-between p-3'>
          <Media body>
            <span className='small-chart-description text-muted text-uppercase'>
              {props.description}
            </span>
            <h2 className='mb-0 small-chart-title'>{props.title}</h2>
          </Media>
          <div className='align-self-center'>
            <Chart
              className='apex-charts'
              options={options}
              series={series}
              type={type}
              height={45}
              width={90}
            />
            <span className={textClass}>
              {/* <i className={`${props.trend.icon}`}></i> {props.trend.value} */}
              <Icon className='small-chart-icon' /> {value}
            </span>
          </div>
        </Media>
      </CardBody>
    </Card>
  );
};

export default SmallChart;
