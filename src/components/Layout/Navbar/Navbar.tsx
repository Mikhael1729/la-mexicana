import * as React from 'react';
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    WithStyles,
    createStyles,
    Theme,
    withStyles
    } from '@material-ui/core';

import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;
const styles = (theme: Theme) => createStyles({
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

export interface NavbarProps extends WithStyles<typeof styles>{
}

export interface NavbarState {
    mobileOpen: boolean;
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    this.state = {
        mobileOpen: false
    }
  }

  public render() {
    const classes = this.props.classes;

    return <AppBar className={classes.appBar}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}>
                <MenuIcon />
            </IconButton>

            <Typography variant="h6" color="inherit" noWrap={true}>
                La Mexicana
            </Typography>
        </Toolbar>
    </AppBar>
  }

  private handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
}

export default withStyles(styles)(Navbar);
