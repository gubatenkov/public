import React from 'react';
import { MoreVertical } from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { messages } from 'utils/data';
import ChatForm from './chatForm';
import ChatItem from './chatItem';

const ChatList = () => {
  return (
    <Card>
      <CardBody className='pt-2 pb-1'>
        <UncontrolledDropdown className='mt-2 float-right'>
          <DropdownToggle
            tag='button'
            className='btn btn-link arrow-none p-0 text-muted'
          >
            <MoreVertical width='15' />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>
              <i className='uil uil-exit mr-2'></i>Профиль
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem className='text-danger'>
              <i className='uil uil-trash mr-2'></i>Удалить чат
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <h5 className='card-title mt-2 mb-3 header-title'>Последний диалог</h5>

        <div className='chat-conversation'>
          <PerfectScrollbar style={{ maxHeight: '295px', width: '100%' }}>
            <ul className='conversation-list'>
              {messages.map((msg, idx) => {
                return (
                  <ChatItem
                    key={msg.id}
                    {...msg}
                    placement={
                      //   idx > 0 ? (idx % 2 === 0 ? '' : 'left') : 'right'
                      msg.userName === 'Джон К.' ? 'right' : 'left'
                    }
                  />
                );
              })}
            </ul>
          </PerfectScrollbar>

          {/* chat form */}
          <ChatForm
            onNewMessagesPosted={() => console.log('new message posted')}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ChatList;
