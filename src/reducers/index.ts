import { combineReducers } from 'redux';
import * as SideBarReducer from './SidBarReducer';

/*
 * This is the root state of the app
 * It contains every substate of the app
 */  

export interface StoreState {
  sideBar: SideBarReducer.State
}

/*
 * initialState of the app
 */
export const initialState: StoreState = {
  sideBar: SideBarReducer.initialState
}

export const reducers = combineReducers<StoreState>({
  sideBar: SideBarReducer.reducer
})