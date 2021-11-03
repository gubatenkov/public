import React from 'react';
import { Card, CardBody, Table, Button } from 'reactstrap';
import { Download } from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import OrderItem from './orderItem';
import { orderItems } from 'utils/data';

const OrdersWidget = () => {
  const tableContainerStyle = {
    maxHeight: '315px',
    width: '100%',
    paddingRight: '15px',
  };

  return (
    <Card>
      <CardBody className='pb-0'>
        <div className='table-header-wrap' style={{ marginBottom: '30px' }}>
          <Button
            className='float-right'
            size={'sm'}
            style={{ backgroundColor: '#5369f8', border: 'none' }}
          >
            <Download width='13px' /> экспорт
          </Button>

          <h5 className='card-title mt-0 mb-0 header-title'>Недавние заказы</h5>
        </div>

        <div className='table-wrap'>
          <PerfectScrollbar component='div' style={tableContainerStyle}>
            <Table
              hover
              className='orders-table'
              style={{ color: '#6c757d', borderCollapse: 'separate' }}
            >
              <thead>
                <tr>
                  <th scope='col'>№</th>
                  <th scope='col'>Продукт</th>
                  <th scope='col'>Покупатель</th>
                  <th scope='col'>Цена</th>
                  <th scope='col'>Статус</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.length &&
                  orderItems.map((el) => <OrderItem {...el} key={el.id} />)}
              </tbody>
            </Table>
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
  );
};

export default OrdersWidget;
