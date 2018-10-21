import * as React from 'react';
import { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import Food from './Food/Food';

interface FoodsProps {
}

const Foods: React.SFC<FoodsProps> = (props) => {
  return <Fragment>
    {/* Title */}
    <Typography 
      variant="h2"
      gutterBottom={true}
      children="Menú" />

    <Food />
  </Fragment>
};

export default Foods;