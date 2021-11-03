import React from 'react';
import { Card, CardBody } from 'reactstrap';

import TopManagersItem from './topManagersItem';
import { topManagers } from 'utils/data';

const TopManagersWidget = () => {
  return (
    <Card>
      <CardBody className='pb-0 pt-2'>
        <h5 className='topmanagers-header-title card-title mb-3 mt-2'>
          Топ менеджеры
        </h5>

        {topManagers.length &&
          topManagers.map((m) => <TopManagersItem key={m.id} {...m} />)}
      </CardBody>
    </Card>
  );
};

export default TopManagersWidget;
