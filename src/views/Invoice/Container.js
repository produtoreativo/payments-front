import React from 'react';
import { bindActionCreators } from 'redux';
import { useStore, useSelector, useDispatch } from 'react-redux';
import Invoice from './Invoice';
import { updateInvoice } from './redux/actions'

function Container(props) {

  function createInvoice() {}

  const invoice = useSelector( state => state.invoice );
  const dispatch = useDispatch();
  
  return (
    <Invoice 
      invoice={invoice} 
      createInvoice={createInvoice} 
      {...bindActionCreators({ updateInvoice }, dispatch)}
    />
  )
}

export default Container;