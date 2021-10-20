import React from "react";
import { bindActionCreators } from "redux";
import { useStore, useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import Invoice from "./Invoice";
import { updateInvoice, createInvoice } from "./redux/actions";
import watchCreateInvoice from "./redux/sagas/createInvoice";

function Container(props) {
  const [task, setTask] = React.useState(null);
  const invoice = useSelector((state) => state.invoice);
  const store = useStore();
  const dispatch = useDispatch();

  function gotoPayments() {
    dispatch(push("/home"));
  }

  React.useEffect(() => {
    setTask(store.runSaga(watchCreateInvoice));
    return () => {
      if (task) {
        task.cancel();
      }
    };
  }, []);

  return (
    <Invoice
      invoice={invoice}
      gotoPayments={gotoPayments}
      {...bindActionCreators({ updateInvoice, createInvoice }, dispatch)}
    />
  );
}

export default Container;
