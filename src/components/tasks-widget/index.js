import React from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import TaskList from './taskList';
import TaskItem from './taskItem';
import { tasksItems } from 'utils/data';

const TasksWidget = () => {
  return (
    <Card>
      <CardBody className='pt-2 pb-3'>
        <div className='task-widget-header d-flex justify-content-between mt-2 mb-3'>
          <h5 className='card-title'>Активные задачи</h5>

          <Button className='task-widget-btn float-right' size={'sm'}>
            Открыть все
          </Button>
        </div>

        <PerfectScrollbar style={{ maxHeight: '335px', width: '100%' }}>
          <TaskList>
            {tasksItems.length &&
              tasksItems.map((t) => <TaskItem key={t.id} {...t} />)}
          </TaskList>
        </PerfectScrollbar>
      </CardBody>
    </Card>
  );
};

export default TasksWidget;
