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
    photo: any;
    foodId: number;
    name: string;
    ingredients: string;
    shortDescription: string;
    openEditIngredientsDialog: () => void;
}

export interface FoodState {
}

class Food extends React.Component<FoodProps, FoodState> {
  constructor(props: FoodProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const { card, media, actions, button } = this.props.classes;

    return <Card className={card}>
        {/* Title and ingredients */}
        <CardHeader 
            title={this.props.name}
            subheader={this.props.ingredients}/>

        {/* Photo */}
        <CardMedia 
            className={media}
            image={this.props.photo}
            title="Taco de queso"/>

        {/* Short description */}
        <CardContent>
            <Typography variant="body1"gutterBottom={true}>
                { this.props.shortDescription }
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
                onClick={this.props.openEditIngredientsDialog}>
                <EditIcon />
                Ingredientes
            </Button>
        </CardActions>
    </Card>;
  }
}

export default withStyles(styles)(Food);