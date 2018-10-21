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

interface FoodProps extends WithStyles<typeof styles>{
}

const Food: React.SFC<FoodProps> = (props) => {
    const { card, media, actions, button } = props.classes;

    return <Card className={card}>
        {/* Title and ingredients */}
        <CardHeader 
            title="Taco a la mexicana"
            subheader="Con queso, carne de res, tomate..."/>

        {/* Photo */}
        <CardMedia 
            className={media}
            image={taco_image}
            title="Taco de queso"/>

        {/* Short description */}
        <CardContent>
            <Typography variant="body1"gutterBottom={true}>
                Preparado con la más delicada mano, el taco aquí presente nos deslumbra con su sabor increíble.
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
                className={button}>
                <EditIcon />
                Ingredientes
            </Button>
        </CardActions>

    </Card>;
};

export default withStyles(styles)(Food);