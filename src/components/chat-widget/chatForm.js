import React from 'react';
import { Col, Row } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Send } from 'react-feather';

const ChatForm = () => {
  return (
    <AvForm
      className='needs-validation mt-2'
      id='chat-form'
      noValidate
      name='chat-form'
      onValidSubmit={() => console.log('submited message')}
    >
      <Row className='d-flex' form>
        <Col>
          <AvField
            name='text'
            type='text'
            errorMessage='Введите сообщение'
            validate={{ required: { value: true } }}
          />
        </Col>
        <Col className='col-auto'>
          <button
            className='chat-widget-send-btn btn btn-danger chat-send btn-block ms-3'
            type='submit'
          >
            <Send width='15' />
          </button>
        </Col>
      </Row>
    </AvForm>
  );
};

export default ChatForm;
