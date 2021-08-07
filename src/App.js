import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import Store, { browserHistory } from './base/Store';
import theme from './base/Theme';
import Layout from './views/Layout';

function App() {
  return (
    <div className="App">
      <Store>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <ConnectedRouter history={browserHistory}>
            <Switch>
              <Layout />
            </Switch>
          </ConnectedRouter>
        </ThemeProvider>
      </Store>
    </div>
  );
}

export default App;
