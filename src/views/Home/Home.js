import { Button } from '@material-ui/core';
import Grid from './Grid';

export default ({ payments, find }) => {

  const handler = () => find({ cpf: '7800' });

  return (    
    <div>
      Home
      <Button onClick={handler}>Pesquisar</Button>
      <Grid data={payments} />
    </div>
  )
}