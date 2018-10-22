import * as React from 'react';
import { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import Food from './Food/Food';
import food_image from 'images/taco.jpg';
import { EditIngredients } from 'components';

export interface FoodsProps {
}

export interface FoodsState {
  ingredientsModalIsOpen: boolean;
}

export default class Foods extends React.Component<FoodsProps, FoodsState> {
  constructor(props: FoodsProps) {
    super(props);

    this.state = {
      ingredientsModalIsOpen: false
    }

    this.handleEditIngredientsOpen = this.handleEditIngredientsOpen.bind(this);
    this.handleEditIngredientsClose = this.handleEditIngredientsClose.bind(this);
  }

  public render() {
    return <Fragment>
      {/* Title */}
      <Typography 
        variant="h2"
        gutterBottom={true}
        children="Menú" />

      <Food 
        photo={food_image}
        ingredients="Con harina de maíz, tomate, queso..."
        name="Taco a la mexicana"
        shortDescription="Un taco que nos deslumbra con su increíble belleza; hecho con amor y dedicación"
        openEditIngredientsDialog={this.handleEditIngredientsOpen} />

      {/* Edit ingredients modal */}
      <EditIngredients open={this.state.ingredientsModalIsOpen} closeDialog={this.handleEditIngredientsClose} />

    </Fragment>
  }

  private handleEditIngredientsOpen() {
    this.setState({ ingredientsModalIsOpen: true });
  }

  
  private handleEditIngredientsClose() {
    this.setState({ ingredientsModalIsOpen: false });
  };
}
