import React from 'react';
import {
  Grid,
  Link,
  Button,
} from '@material-ui/core';
import DataTable from 'react-data-table-component';

const columns = [
  { selector: 'taxId', name: 'CPF'},
  { selector: 'name', name: 'Name'},
  { selector: 'status', name: 'Status'},
  { selector: 'amount', name: 'Amount'},
]

export default ({ data }) => {
  const cols = [
    ...columns
  ]

  const dataGridTheme = {
    tableWrapper: {
      style: {
        display: 'block'
      }
    },
    title: {
      height: 0
    }
  };

  return (
    <Grid
      container
      spacing={1}
      wrap="wrap"
    >
      <Grid item  md={12}>
        <DataTable
          clicked
          columns={cols}
          customTheme={dataGridTheme}
          data={data}
          highlightOnHover
          pointerOnHover
          responsive
          persistTableHead
          noDataComponent="Sem dados para essa consulta"
          striped
          noHeader
        />
      </Grid>
    </Grid>
  );
}