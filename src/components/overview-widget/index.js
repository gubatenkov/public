import React from 'react';
import { Card, CardBody, Media } from 'reactstrap';

const OverviewWidget = ({ items = [] }) => {
  const totalItems = items.length;

  return (
    <Card className=''>
      <CardBody className='p-0'>
        <h5 className='card-title header-title border-bottom p-3 mb-0'>
          Случайная статистика
        </h5>

        {items.map((item, idx) => {
          const Icon = item.icon || null;
          var borderClass = 'border-bottom';

          if (totalItems === idx + 1) {
            borderClass = null;
          }

          return (
            <Media
              className={`d-flex justify-content-between px-3 py-4 ${borderClass}`}
              key={idx}
            >
              <Media body>
                <h4 className='mt-0 mb-1 font-size-22 font-weight-normal'>
                  {item.title}
                </h4>
                <span className='text-muted'>{item.description}</span>
              </Media>
              {Icon && (
                <Icon className='overview-icon align-self-center icon-dual icon-lg' />
              )}
            </Media>
          );
        })}
      </CardBody>
    </Card>
  );
};

export default OverviewWidget;
