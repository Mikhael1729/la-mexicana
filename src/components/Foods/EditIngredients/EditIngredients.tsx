import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions, withMobileDialog } from '@material-ui/core';
import { FoodIngredients as FoodIngredientsModel } from 'models';

export interface EditIngredientsProps {
    fullScreen?: any;
    open: boolean;
    foodIngredients: FoodIngredientsModel
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
    return (
      <div>
        <Dialog
          fullScreen={this.props.fullScreen}
          open={this.props.open}
          onClose={this.props.closeDialog}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.foodIngredients.food.description}
            </DialogContentText>
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
