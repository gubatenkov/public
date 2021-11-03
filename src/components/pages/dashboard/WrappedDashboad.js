import React from 'react';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';

import { Dashboard, Sidebar, Topbar } from 'components';

const WrappedDashboad = () => {
  let isVisible = useSelector((state) => state.sidebar.isVisible);

  return (
    <>
      <Topbar />
      <Sidebar />

      <div className={`content ${isVisible ? 'margin' : ''}`}>
        <Container fluid>
          <div className='content-inner'>
            <Dashboard />
          </div>
        </Container>
      </div>
    </>
  );
};

export default WrappedDashboad;
