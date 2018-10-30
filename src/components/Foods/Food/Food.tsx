import * as React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import EditIcon from '@material-ui/icons/Edit';
import taco_image from 'images/taco.jpg';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    createStyles,
    Theme,
    Typography,
    withStyles,
    WithStyles,
    TextField,
    IconButton
    } from '@material-ui/core';
import { Fragment } from 'react';
import { EditIngredients } from 'components';
import { Food as FoodModel } from "models/Food";
import { FoodIngredients as FoodIngredientsModel } from 'models';

const styles = (theme: Theme) => createStyles({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    button: {
        margin: theme.spacing.unit,
    }
})

export interface FoodProps extends WithStyles<typeof styles>{
    plate: FoodIngredientsModel;
}

export interface FoodState {
    editIngredientsModalIsOpen: boolean;
    modifiedFood: FoodIngredientsModel;
}

class Food extends React.Component<FoodProps, FoodState> {
  constructor(props: FoodProps) {
    super(props);

    this.state = {
        editIngredientsModalIsOpen: false,
        modifiedFood: this.props.plate
    }

    this.openEditIngredientsDialog = this.openEditIngredientsDialog.bind(this);
    this.closeEditIngredientsDialog = this.closeEditIngredientsDialog.bind(this);
  }

  public render() {
    const { card, media, actions, button } = this.props.classes;
    const { price, description, photo } = this.props.plate.food;

    return <Fragment>
        <Card className={card}>
            {/* Title and ingredients */}
            <CardHeader 
                title={this.props.plate.food.name}
                subheader={`RD$ ${price}`}/>

            {/* Photo */}
            <CardMedia 
                className={media}
                image={photo}
                title="Taco de queso"/>

            {/* Short description */}
            <CardContent>
                <Typography variant="body1"gutterBottom={true}>
                    { this.props.plate.food.description }
                </Typography>

                {/* Quantity panel */}
                <div style={{ 
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center'  
                }}>
                    <IconButton color="default" className={button} aria-label="Sum quantity">
                        <AddIcon style={{ textShadow:'2px 2px black' }} />
                    </IconButton>

                    <TextField
                        type="number"
                        placeholder="0"
                        value={5}/>

                    <IconButton color="default" className={button} aria-label="Substract quantity">
                        <RemoveIcon style={{
                        textShadow:'2px 2px black'
                    }} />
                    </IconButton>
                </div>
                
            </CardContent>

            {/* Actions */}
            <CardActions className={actions} disableActionSpacing={false}>
                {/* Add to shopping cart */}
                <Button 
                    variant="outlined" 
                    color="primary" 
                    className={button}>
                    <AddShoppingCartIcon />
                    Agregar
                </Button>

                {/* Edit ingredients */}
                <Button 
                    variant="outlined"
                    color="secondary"
                    className={button}
                    onClick={this.openEditIngredientsDialog}>
                    <EditIcon />
                    Ingredientes
                </Button>
            </CardActions>
        </Card>

        { this.state.editIngredientsModalIsOpen
            ? 
                <EditIngredients 
                    open={this.state.editIngredientsModalIsOpen}
                    food={this.state.modifiedFood}
                    closeDialog={this.closeEditIngredientsDialog} />
            : null
        }
    </Fragment> 
  }

  private openEditIngredientsDialog() {
    this.setState({ editIngredientsModalIsOpen: true });
  }

  private closeEditIngredientsDialog() {
      this.setState({ editIngredientsModalIsOpen: false });
  }
}

export default withStyles(styles)(Food);