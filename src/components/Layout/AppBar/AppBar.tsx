// import * as React from 'react';
// import {
//   AppBar as Bar,
//   Button,
//   createStyles,
//   IconButton,
//   Toolbar,
//   Typography,
//   WithStyles,
//   Badge,
//   Hidden,
//   Drawer,
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   CssBaseline,
//   } from '@material-ui/core';
// import { Link, NavLink } from 'react-router-dom';
// import MenuIcon from "@material-ui/icons/Menu";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { withStyles, Theme } from '@material-ui/core/styles';
// import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import 'typeface-roboto';
// import { SideBar, Navbar } from 'components'; 

// interface AppBarProps extends WithStyles<typeof styles>{
//     theme: any;
// }

// export interface AppBarState {
//     mobileOpen: boolean;
// }

// class AppBar extends React.Component<AppBarProps, AppBarState> {
//   constructor(props: AppBarProps) {
//     super(props);

//     this.state = {
//         mobileOpen: false
//     };
//   }

//   public render() {
//     const classes = this.props.classes;
//     const theme = this.props.theme;

//     return <React.Fragment>
//       <CssBaseline />
//         <div className={classes.root}>
//             <SideBar classes={classes} />
//             <Navbar classes={classes}/>
//             <main className={classes.content}>
//                 <div className={classes.toolbar} />
//                 {this.props.children}
//             </main>
//         </div>
//     </React.Fragment>
//   }
// }

// export default withStyles(styles, { withTheme: true })(AppBar);