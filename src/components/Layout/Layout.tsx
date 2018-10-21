import * as React from 'react';
import { SideBar, Navbar } from 'components';
import 'styles/Layout.css';
import { CssBaseline } from '@material-ui/core';
import { withStyles, Theme, WithStyles, createStyles } from '@material-ui/core/styles';

// #region Styles
const drawerWidth = 240;
const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
      },
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
      },
});
// #endregion

export interface LayoutProps extends WithStyles<typeof styles>{
  theme:  any;
}

export interface LayoutState {
}

class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);

    this.state = { }
  }

  public render() {
    const classes = this.props.classes;

    return <React.Fragment>
      {/* Normalizing styles for the material theme */}
      <CssBaseline />

      {/* Layout */}
      <div className={classes.root}>
        {/* Sidebar */}
        <SideBar />

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className={classes.content}>
            <div className={classes.toolbar} />
            {this.props.children}
        </main>
      </div>
    </React.Fragment>
  }
}

export default withStyles(styles, { withTheme: true })(Layout);