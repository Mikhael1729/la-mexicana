import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Home, Foods } from 'components';
import { Food } from 'models';
import { JsonConvert } from 'json2typescript';
import { TestModel } from "models";
import { Entities, Entity } from 'models/Entity';

class App extends React.Component {

  public async componentWillMount() {
    const response = await fetch("https://localhost:5001/api/foods");
    const json: TestModel[] = await response.json();
    
    const converter: any = new JsonConvert();
    const food: Entity[] = converter.deserialize(json, Entities).entities; 

    console.log(food);
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
