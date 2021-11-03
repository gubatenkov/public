import React from 'react';
import { Col, Row } from 'reactstrap';
import { TrendingDown, TrendingUp } from 'react-feather';

import {
  OverviewWidget,
  Report,
  SmallChart,
  MonthRevenueChart,
  TargetChart,
  SalesChart,
  OrdersWidget,
  TopManagersWidget,
  TasksWidget,
} from 'components';
import { overviewItems } from 'utils/data';
import ChatWidget from 'components/chat-widget';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Row className='page-title'>
        <Col sm={4} xl={6}>
          <h4 className='mb-1 mt-0'>Главная панель</h4>
        </Col>
        <Col sm={8} xl={6}>
          <Report />
        </Col>
      </Row>

      <Row>
        <Col md={6} xl={3}>
          <SmallChart
            description='Ревенью'
            title='$2100'
            data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
            trend={{
              textClass: 'small-chart-value text-success',
              icon: TrendingUp,
              value: '10.21%',
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <SmallChart
            description='Тренд'
            title='3069'
            colors={['#f77e53']}
            data={[25, 23, 11, 85, 42, 25, 44, 12, 76, 9, 54]}
            trend={{
              textClass: 'small-chart-value text-danger',
              icon: TrendingDown,
              value: '7.32%',
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <SmallChart
            description='Покупатели'
            title='+963'
            colors={['#43d39e']}
            data={[25, 32, 41, 85, 23, 25, 44, 86, 36, 9, 54]}
            trend={{
              textClass: 'small-chart-value text-success',
              icon: TrendingUp,
              value: '24.34%',
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <SmallChart
            description='Лиды'
            title='346'
            data={[11, 66, 76, 56, 23, 25, 44, 12, 36, 15, 34]}
            trend={{
              textClass: 'small-chart-value text-success',
              icon: TrendingUp,
              value: '6.43%',
            }}
          />
        </Col>
      </Row>

      <Row>
        <Col xl={3}>
          <OverviewWidget items={overviewItems} />
        </Col>
        <Col xl={6}>
          <MonthRevenueChart />
        </Col>
        <Col xl={3}>
          <TargetChart />
        </Col>
      </Row>

      <Row>
        <Col xl={5}>
          <SalesChart />
        </Col>
        <Col xl={7}>
          <OrdersWidget />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <TopManagersWidget />
        </Col>
        <Col xl={4}>
          <TasksWidget />
        </Col>
        <Col xl={4}>
          <ChatWidget />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
