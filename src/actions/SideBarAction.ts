import * as constants from '../types';

/* Side bar actions */
export interface IShowSideBar {
    type: constants.SHOW_SIDE_BAR;
}

export interface IHideSideBar {
    type: constants.HIDE_SIDE_BAR;
}

export type SideBarActionType = IShowSideBar | IHideSideBar;

export function showSideBar(): IShowSideBar {
    return {
        type: constants.SHOW_SIDE_BAR
    }
}

export function hideSideBar(): IHideSideBar {
    return {
        type: constants.HIDE_SIDE_BAR
    }
}
