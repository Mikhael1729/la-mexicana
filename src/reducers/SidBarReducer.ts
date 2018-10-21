import { SideBarAction } from "actions";
import { HIDE_SIDE_BAR, SHOW_SIDE_BAR } from "types";

export interface State {
    mobileOpen: boolean;
}

export const initialState: State = {
    mobileOpen: false
}

export function reducer(state: State=initialState, action: SideBarAction.SideBarActionType): State {
    switch (action.type) {
        case SHOW_SIDE_BAR:
            return { ...state, mobileOpen: true }
        case HIDE_SIDE_BAR:
            return { ...state, mobileOpen: false }
        default:
            return state;
    }
}