import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Home, Foods } from 'components';
import { TestModel } from "models";
import { EntityConverter as Converter } from "helpers/EntityConverter";

class App extends React.Component {

  public async componentWillMount() {
    const response = await fetch("https://localhost:5001/api/foods");
    const json: any = await response.json();

    const foods: TestModel[] = Converter.ConvertJsonArray(json.value, TestModel);
  }

  public render() {
    return <BrowserRouter>
      <Layout>
        <Route path="/" component={Home} exact={true} strict={true} />
        <Route path="/comida" component={Foods} exact={true} strict={true} />
      </Layout>
    </BrowserRouter>
  }
}

export default App;
