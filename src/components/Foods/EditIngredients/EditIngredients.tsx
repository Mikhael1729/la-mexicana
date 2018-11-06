import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions, withMobileDialog, Typography, Grid } from '@material-ui/core';
import { FoodIngredients as FoodIngredientsModel, Food as FoodModel } from 'models';

export interface EditIngredientsProps {
    fullScreen?: any;
    open: boolean;
    food: FoodIngredientsModel;
    closeDialog: () => void;
}

export interface EditIngredientsState {
}

class EditIngredients extends React.Component<EditIngredientsProps, EditIngredientsState> {
  constructor(props: EditIngredientsProps) {
    super(props);

    this.state = { }
  }

  public render() {
    const { name, description, photo, price } = this.props.food.food;
    const ingredients = this.props.food.ingredients;
    const ingredientsGroups = this.props.food.ingredientsGroups;

    return (
      <div>
        <Dialog
          fullScreen={this.props.fullScreen}
          open={this.props.open}
          onClose={this.props.closeDialog}
          aria-labelledby="responsive-dialog-title"
        >
          {/* Title */}
          <DialogTitle id="responsive-dialog-title">{'Editar ingredientes'}</DialogTitle>

          {/* Content */}
          <DialogContent>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
              }}>

                {/* Photo */}
                <img 
                  src={photo} 
                  title={name}
                  style={{ width:'300px'}}/>

                <br />

                {/* Name */}
                <Typography 
                    gutterBottom={true} 
                    variant="headline" 
                    component="h1" 
                    color="textPrimary"
                    children={name}/>

                {/* Price */}
                <Typography 
                    variant="subheading" 
                    component="h4" 
                    gutterBottom={true} 
                    color="textSecondary" 
                    children={<b>RD$ {price}</b>}
                    style={{ marginTop:'-10px'}}/>

                {/* Ingredients */}
                

              </div>
          </DialogContent> 

          <DialogActions>
            <Button onClick={this.props.closeDialog} color="primary">
              Disagree
            </Button>
            <Button onClick={this.props.closeDialog} color="primary" autoFocus={true}>
              Agree
            </Button>
          </DialogActions>

        </Dialog>
      </div>
    );
  }
}

export default withMobileDialog<EditIngredientsProps>()(EditIngredients);
