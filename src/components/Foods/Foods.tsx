import * as React from 'react';
import { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import Food from './Food/Food';
import food_image from 'images/taco.jpg';

interface FoodsProps {
}

const Foods: React.SFC<FoodsProps> = (props) => {
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
      shortDescription="Un taco que nos deslumbra con su increíble belleza; hecho con amor y dedicación" />
  </Fragment>
};

export default Foods;