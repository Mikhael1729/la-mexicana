import * as React from 'react';
import { Fragment } from 'react';
import { Typography, Grid } from '@material-ui/core';
import Food from './Food/Food';
import { EditIngredients } from 'components';
import { FoodIngredients as FoodIngredientsModel } from 'models';
import { FoodData } from 'data/FoodData';

export interface FoodsProps {
}

export interface FoodsState {
  ingredientsModalIsOpen: boolean;
  currentFood: FoodIngredientsModel;
}

export default class Foods extends React.Component<FoodsProps, FoodsState> {
  private foods: FoodIngredientsModel[]  = FoodData.generateData();
  private stageFoods = [];

  constructor(props: FoodsProps) {
    super(props); 

    this.state = {
      ingredientsModalIsOpen: false,
      currentFood: this.foods[0]
    }

    this.handleEditIngredientsOpen = this.handleEditIngredientsOpen.bind(this);
    this.handleEditIngredientsClose = this.handleEditIngredientsClose.bind(this);
    this.saveCustomFood = this.saveCustomFood.bind(this);
  }

  public render() {
    const FoodItems = this.foods.map((plate, index) => {
      return (
        <Grid 
          item={true} 
          xs={12} 
          sm={6} 
          md={4} 
          key={plate.food.id}
        >
          <Food 
            foodId={index}
            photo={plate.food.photo}
            price={plate.food.price}
            name={plate.food.name}
            shortDescription={plate.food.description}
            openEditIngredientsDialog={this.handleEditIngredientsOpen} />
        </Grid>
      );
    });

    return <Fragment>
      {/* Title */}
      <Typography 
        variant="h2"
        gutterBottom={true}
        children="Menú" />

      <Grid container={true} spacing={8}>
        { FoodItems }
      </Grid>

      {/* Edit ingredients modal */}
      <EditIngredients 
        open={this.state.ingredientsModalIsOpen} 
        closeDialog={this.handleEditIngredientsClose} 
        foodIngredients={this.state.currentFood}
        />

    </Fragment>
  }

  private handleEditIngredientsOpen(index: number) {
    this.setState({ 
      ingredientsModalIsOpen: true, 
      currentFood: this.foods[index] });
  }

  private handleEditIngredientsClose() {
    this.setState({ ingredientsModalIsOpen: false });
  };

  private saveCustomFood(foodId: number) {

  }
}
