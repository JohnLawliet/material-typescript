import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/notes/Notes'
import Create from './pages/create/Create';
import './App.css';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import Layout from './components/layout'


function App() {
  return (  
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
