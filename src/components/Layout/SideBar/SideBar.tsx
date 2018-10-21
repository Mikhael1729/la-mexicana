import * as React from 'react';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/Inbox';
import {
    createStyles,
    Divider,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Theme,
    WithStyles,
    Avatar,
    Typography,
    withStyles
    } from '@material-ui/core';
import brand_image from 'images/Chapa-Mexico.jpg';

const drawerWidth = 240;
const styles = (theme: Theme) => createStyles({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
    top:'0%',
    width: drawerWidth,
    height: '100vh',
    [theme.breakpoints.up('md')]: {
        position: 'relative',
    },
    }
});

export interface SideBarProps extends WithStyles<typeof styles>{
    theme: Theme;
    mobileOpen: boolean;
    showSideBar: () => void;
    hideSideBar: () => void;

    brandTitle: string;
    brandImage: any;
}

export interface SideBarState {
}

class SideBar extends React.Component<SideBarProps, SideBarState> {
  constructor(props: SideBarProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const classes = this.props.classes;

     const brand = (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Avatar 
                src={this.props.brandImage}
                style={{  
                    width: "50px",
                    height: "50px",
                }}/>
            <Typography 
                variant="h5" 
                style={{ marginTop:'8px', marginLeft:'10px' }}
                gutterBottom={true} 
                children={this.props.brandTitle} />
        </div>
    )

    const drawer = <React.Fragment>
        <List component="nav">
            <ListItem button={true}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button={true}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItem>
        </List>
    
        <Divider />

        <List component="nav">
            <ListItem button={true}>
            <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button={true} component="a" href="#simple-list">
            <ListItemText primary="Spam" />
            </ListItem>
        </List>
    </React.Fragment>
    return <React.Fragment>
        <Hidden mdUp={true}>
            <Drawer
                variant="temporary"
                anchor={this.props.theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.props.mobileOpen}
                onClose={this.props.mobileOpen ? this.props.hideSideBar : this.props.showSideBar}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <div style={{ paddingTop:'10px', paddingBottom:'10px' }}>
                    {brand}
                </div>

                <Divider />
                {drawer}
            </Drawer>
            </Hidden>
        <Hidden smDown={true} implementation="css">
            <Drawer
                variant="permanent"
                open={true}
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div style={{ paddingTop:'10px', paddingBottom:'10px' }}>
                    {brand}
                </div>

                <Divider />

                {drawer}
            </Drawer>
        </Hidden>
    </React.Fragment>;
  }
}

export default withStyles(styles, { withTheme: true })(SideBar);