import React from "react";
import { Box, TextField, Button } from "@material-ui/core";

function Invoice({ invoice, updateInvoice, createInvoice, gotoPayments }) {
  const onChange = (event) => {
    const { name, value } = event.target;
    updateInvoice({
      [name]: value,
    });
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <div>
        <TextField
          required
          label="Name"
          name="name"
          value={invoice.name}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
        />
        <TextField
          required
          label="Tax Id"
          name="taxId"
          value={invoice.taxId}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
        />
        <TextField
          required
          label="Order Id"
          name="orderId"
          value={invoice.orderId}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
        />
        <TextField
          required
          label="Amount"
          name="amount"
          value={invoice.amount}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
        />
        <Button
          onClick={() => {
            createInvoice(invoice);
            gotoPayments();
          }}
        >
          Criar
        </Button>
      </div>
    </Box>
  );
}

export default Invoice;
