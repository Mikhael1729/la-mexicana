import * as React from 'react';
import { Fragment } from 'react';
import { Typography, Grid } from '@material-ui/core';
import Food from './Food/Food';
import food_image from 'images/taco.jpg';
import { EditIngredients } from 'components';
import { FoodIngredients as FoodIngredientsModel, Food as FoodModel, Ingredient } from 'models';

export interface FoodsProps {
}

export interface FoodsState {
  ingredientsModalIsOpen: boolean;
  currentFood: FoodIngredientsModel;
}

export default class Foods extends React.Component<FoodsProps, FoodsState> {
  private foods: FoodIngredientsModel[] = [
    new FoodIngredientsModel({
      food: new FoodModel({ id:1, name: 'Comida 1', description: 'Descripción 1', photo: food_image, price: 40 }),
      ingredients: [
        new Ingredient({ id: 1, name: 'Ingrediente 1', description: 'Ingrediente, descripción 1' }),
        new Ingredient({ id: 2, name: 'Ingrediente 2', description: 'Ingrediente, descripción 2'})
      ],
    }),
    new FoodIngredientsModel({
      food: new FoodModel({ id:2, name: 'Comida 2', description: 'Descripción 2', photo: food_image, price: 80 }),
      ingredients: [
        new Ingredient({ id: 1, name: 'Ingrediente 2', description: 'Ingrediente, descripción 2' }),
        new Ingredient({ id: 2, name: 'Ingrediente 1', description: 'Ingrediente, descripción 1'})
      ],
    }),
  ]

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
