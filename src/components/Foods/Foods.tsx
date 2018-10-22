import * as React from 'react';
import { Fragment } from 'react';
import { Typography, Grid } from '@material-ui/core';
import Food from './Food/Food';
import food_image from 'images/taco.jpg';
import { EditIngredients } from 'components';

export interface FoodsProps {
}

export interface FoodsState {
  ingredientsModalIsOpen: boolean;
  // editingFood: { id: number, name: string, price: number, photo: any, shortDescription: string, ingredients: string}
}


/**
 * 1. Se encarga de: 
 *      - Obtener las comidas.
 *      - Mostrarlas.
 * 
 * 2. Para editar una comida a añadir al carrito:
 *      - Se obtiene la comida en la que se presionó el botón de editar.
 *      - Se agrega a un array de comidas editadas si se editó algo: Stage food:
 *          - Al hacerlo el id al que hará referencia el botón 
 *      - 
 */
export default class Foods extends React.Component<FoodsProps, FoodsState> {
  private foods = [
    { id: 1, name: 'Taco a la mexicana', price: 35.35, photo:food_image, shortDescription: 'Una pequeña descripción 1', ingredients:'Tiene queso, tomate, harina de maíz...' },
    { id: 2, name: 'Taco 2', price: 20, photo:food_image, shortDescription: 'Una pequeña descripción 2', ingredients:'Tiene queso, tomate, harina de maíz...' },
    { id: 3, name: 'Taco 3', price: 80, photo:food_image, shortDescription: 'Una pequeña descripción 3', ingredients:'Tiene queso, tomate, harina de maíz...' },
  ]

  constructor(props: FoodsProps) {
    super(props); 

    this.state = {
      ingredientsModalIsOpen: false
    }

    this.handleEditIngredientsOpen = this.handleEditIngredientsOpen.bind(this);
    this.handleEditIngredientsClose = this.handleEditIngredientsClose.bind(this);
    this.saveCustomFood = this.saveCustomFood.bind(this);
  }

  public render() {
    const FoodItems = this.foods.map((f) => (
      <Food 
        key={f.id}
        foodId={f.id}
        photo={f.photo}
        ingredients={f.ingredients}
        name={f.name}
        shortDescription={f.shortDescription}
        openEditIngredientsDialog={this.handleEditIngredientsOpen} />
      ));

    return <Fragment>
      {/* Title */}
      <Typography 
        variant="h2"
        gutterBottom={true}
        children="Menú" />

      <Grid container={true} spacing={8}>
      { 
        this.foods.map((f) => (
          <Grid item={true} xs={12} md={4} key={f.id}>
            <Food 
              foodId={f.id}
              photo={f.photo}
              ingredients={f.ingredients}
              name={f.name}
              shortDescription={f.shortDescription}
              openEditIngredientsDialog={this.handleEditIngredientsOpen} />
          </Grid>
      ))}
      </Grid>

      {/* Edit ingredients modal */}
      <EditIngredients 
        open={this.state.ingredientsModalIsOpen} 
        closeDialog={this.handleEditIngredientsClose}/>

    </Fragment>
  }

  private handleEditIngredientsOpen() {
    this.setState({ ingredientsModalIsOpen: true });
  }

  private handleEditIngredientsClose() {
    this.setState({ ingredientsModalIsOpen: false });
  };

  private saveCustomFood(foodId: number) {

  }
}
