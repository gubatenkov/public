import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import { ChevronDown, File, Mail, Printer } from 'react-feather';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap';

const Report = () => {
  const [date, setDate] = useState(new Date());

  return (
    <form className='d-flex justify-content-end form-inline float-sm-right mt-3 mt-sm-0'>
      <div className='datepicker form-group mb-sm-0 mr-2'>
        <Flatpickr
          className='form-control'
          value={date}
          options={{ mode: 'range' }}
          onChange={(date) => setDate(date)}
        />
      </div>
      <UncontrolledButtonDropdown>
        <DropdownToggle color='primary' className='report-btn dropdown-toggle'>
          Быстрый отчет
          <ChevronDown width='15px' />
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem className='report-item'>
            <Mail className='icon-dual icon-xs mr-2'></Mail>
            <span>На почту</span>
          </DropdownItem>
          <DropdownItem className='report-item'>
            <Printer className='icon-dual icon-xs mr-2'></Printer>
            <span>Распечатать</span>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className='report-item'>
            <File className='icon-dual icon-xs mr-2'></File>
            <span>Скачать</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </form>
  );
};

export default Report;
