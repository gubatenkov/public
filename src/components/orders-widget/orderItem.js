import React from 'react';
import { Badge } from 'reactstrap';

const OrderItem = ({ id, product, customer, price, status }) => {
  let badgeClass;

  if (status === 'pending') {
    badgeClass = 'warning';
  } else if (status === 'delivered') {
    badgeClass = 'success';
  } else {
    badgeClass = 'danger';
  }

  return (
    <tr className='order-item'>
      <td className='order-id'>#{id}</td>
      <td className='order-product'>{product}</td>
      <td className='order-customer'>{customer}</td>
      <td className='order-price'>${price}</td>
      <td className='order-status'>
        <Badge className='badge py-1' color={badgeClass}>
          {status}
        </Badge>
      </td>
    </tr>
  );
};

export default OrderItem;
