import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: lightBlue[500],
    },
  },
});

export default theme;