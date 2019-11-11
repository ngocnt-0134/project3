import React from 'react';
import PropTypes from 'prop-types';
import OrderSelect from 'components/orderSelect';
import theme from 'components/Theme/index';
function OrderBlock({ onGetOrder, currentOrder }) {
  return (
    <OrderSelect
      theme={theme}
      value={currentOrder}
      onChange={e => onGetOrder(e.target.value)}
    >
      <option value="1">ASC</option>
      <option value="2">DESC</option>
    </OrderSelect>
  );
}
OrderBlock.propTypes = {
  onGetOrder: PropTypes.func,
  currentOrder: PropTypes.string,
};
export default OrderBlock;
