import { Button } from '@material-ui/core';
import Grid from './Grid';

export default ({ payments, find, gotoInvoice }) => {

  const handler = () => find({ cpf: '7800' });

  return (    
    <div>
      <Button onClick={handler}>Pesquisar</Button>
      <Button onClick={() => {
        gotoInvoice()
      }}>Criar Invoice</Button>
      <Grid data={payments} />
    </div>
  )
}