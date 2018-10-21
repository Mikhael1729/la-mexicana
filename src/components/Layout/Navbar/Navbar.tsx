import * as React from 'react';
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    WithStyles,
    createStyles,
    Theme,
    withStyles,
    Menu,
    MenuItem,
    Button
    } from '@material-ui/core';
    
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from "@material-ui/icons/Menu";
import { Fragment } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ProductsIcon from '@material-ui/icons/Store';

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
    mobileOpen: boolean;
    showSideBar: () => void;
    hideSideBar: () => void;

    title: string;
}

export interface NavbarState {
    anchorEl: any;
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props)

    this.state = {
        anchorEl: null,
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
  }

    public render() {
        const classes = this.props.classes;
        const anchorEl = this.state.anchorEl;
        const open = Boolean(anchorEl);

        return <AppBar className={classes.appBar}>
            <Toolbar>
                {/* Burguer button */}
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={!this.props.mobileOpen ? this.props.showSideBar : this.props.hideSideBar}
                    className={classes.navIconHide}>
                    <MenuIcon />
                </IconButton>

                {/* Title */}
                <Typography 
                    variant="h6" 
                    color="inherit" 
                    noWrap={true} 
                    style={{ flex: 1 }}
                >
                    {this.props.title}
                </Typography>

                {/* Profile icon button  */}
                <IconButton
                    aria-owns={open ? 'menu-appbar' : ''}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit">
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>

                {/* Shopping cart button */}
                <IconButton color="inherit">
                    <ShoppingCartIcon />
                </IconButton>

                {/* Shopping cart button */}
                <IconButton color="inherit">
                    <ProductsIcon />
                </IconButton>

                {/* Profile button */}
                <Button children="Login" color="inherit"/>  

            </Toolbar>
        </AppBar> 
    }

    private handleMenu (event: any) {
        this.setState({ anchorEl: event.currentTarget });
    };

    private handleClose() {
        this.setState({ anchorEl: null });
    };

}

export default withStyles(styles)(Navbar);
