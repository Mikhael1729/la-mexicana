import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { Home } from 'components';

class App extends React.Component {
  public render() {
    return <BrowserRouter>
      <Layout>
        <Route path="/" component={Home} exact={true} strict={true}/>
      </Layout>
    </BrowserRouter>
  }
}
 
export default App;
