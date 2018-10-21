import { Dispatch } from "redux";
import { connect } from "react-redux";
import { StoreState } from "reducers";
import { SideBarAction } from "actions";
import { State as SideBarState } from "reducers/SidBarReducer"
import { SideBar } from "components";
import { withRouter } from "react-router-dom";

export function mapStateToProps(state: StoreState) {
    return {
        mobileOpen: state.sideBar.mobileOpen
    };
}

export function mapDispatchToProps(dispatch: Dispatch<SideBarAction.SideBarActionType>) {
    return {
        showSideBar: () => {
            console.log('hello');
            dispatch(SideBarAction.showSideBar())
        }, 
        hideSideBar: () => dispatch(SideBarAction.hideSideBar())
    };
}

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(SideBar));